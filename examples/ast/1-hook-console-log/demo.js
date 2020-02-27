const generator = require('@babel/generator');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse');
const types = require('@babel/types');

function compile(code) {
  let ast = parser.parse(code);
  traverse.default(ast, {
    CallExpression(path) {
      let { callee } = path.node;
      if (
        types.isMemberExpression(callee) &&
        callee.object.name === 'console' &&
        callee.property.name === 'log'
      ) {
        let fn = path.findParent(p => {
          return types.isFunctionDeclaration(p);
        });
        path.node.arguments.unshift(
          types.StringLiteral(`[${fn.node.id.name}]`)
        );
      }
    }
  });
  return generator.default(ast).code;
}

const code = `
  function abdfdadf(){
    console.log('world');
  }
`;

console.log(compile(code));
