const generator = require('@babel/generator');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse');
const types = require('@babel/types');

function compile(code) {
  //1. parser
  let ast = parser.parse(code);
  //2. traverse
  const visitor = {
    CallExpression(path) {
      const { callee } = path.node;

      //2.1. find console.log callee
      if (
        types.isMemberExpression(callee) &&
        callee.object.name === 'console' &&
        callee.property.name === 'log'
      ) {
        //2.2 find parent function name
        let fn = path.findParent(p => {
          return p.isFunctionDeclaration();
        });
        //2.3 unshift argument string
        path.node.arguments.unshift(
          types.stringLiteral(`[${fn.node.id.name}]`)
        );
      }
    }
  };

  traverse.default(ast, visitor);
  //3. generate
  return generator.default(ast, {}, code);
}

const code = `
  function foo(){
    console.log('bar');
  }
`;

const result = compile(code);
console.log(result.code);
