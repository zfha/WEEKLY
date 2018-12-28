const generator = require('@babel/generator');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse');
const types = require('@babel/types');
const fs = require('fs');

let dataKeys = [];

/**
 * 转换data
 * 1. 获取data函数体，转换为属性data
 * 2. 记录data属性值，方便之后的函数值处理
 */
function handleData(path) {
  // 获取就是data函数体
  let blockStatement = null;
  path.traverse({
    BlockStatement(p) {
      blockStatement = p.node;
    },
    ReturnStatement(path) {
      path.traverse({
        ObjectProperty(path) {
          dataKeys.push(path.node.key.name);
        }
      });
    }
  });

  // 用blockStatement生成ArrowFunctionExpression
  const arrowFunctionExpression = types.arrowFunctionExpression(
    [],
    blockStatement
  );
  // 生成CallExpression
  const callExpression = types.callExpression(arrowFunctionExpression, []);
  // 生成data property
  const dataProperty = types.objectProperty(
    types.identifier('data'),
    callExpression
  );
  // 插入到原data函数下方
  path.insertAfter(dataProperty);

  // 删除原data函数
  path.remove();
}

function traverseData(ast) {
  traverse.default(ast, {
    ObjectMethod(path) {
      if (path.node.key.name === 'data') {
        handleData(path);
      }
    }
  });
}

/**
 * 转换methods，把里面的函数都提取为一等函数
 */
function traverseMethods(ast) {
  traverse.default(ast, {
    ObjectProperty(path) {
      if (path.node.key.name === 'methods') {
        // 遍历属性并插入到原methods之后
        path.node.value.properties.forEach(property => {
          path.insertAfter(property);
        });
        // 删除原methods
        path.remove();
      }
    }
  });
}

/**
 * 把this.xxx改为this.data.xxx
 * 加上setData方法
 */
function traverseMemberData(ast) {
  traverse.default(ast, {
    MemberExpression(path) {
      if (
        path.node.object.type === 'ThisExpression' &&
        dataKeys.includes(path.node.property.name)
      ) {
        path.get('object').replaceWithSourceString('this.data');
        //一定要判断一下是不是赋值操作
        if (
          (types.isAssignmentExpression(path.parentPath) &&
            path.parentPath.get('left') === path) ||
          types.isUpdateExpression(path.parentPath)
        ) {
          // findParent
          const expressionStatement = path.findParent(parent =>
            parent.isExpressionStatement()
          );
          let propertyName = path.node.property.name;
          // create
          if (expressionStatement) {
            const finalExpStatement = types.expressionStatement(
              types.callExpression(
                types.memberExpression(
                  types.thisExpression(),
                  types.identifier('setData')
                ),
                [
                  types.objectExpression([
                    types.objectProperty(
                      types.identifier(propertyName),
                      types.identifier(`this.data.${propertyName}`)
                    )
                  ])
                ]
              )
            );
            expressionStatement.insertAfter(finalExpStatement);
          }
        }
      }
    }
  });
}

/**
 * 把export default改为page
 */
function traversePage(ast) {
  traverse.default(ast, {
    ExportDefaultDeclaration(path) {
      let body = path.node.declaration;
      let pageCall = types.callExpression(types.identifier('page'), [body]);
      let expression = types.expressionStatement(pageCall);
      path.insertAfter(expression);
      path.remove();
    }
  });
}

function compile(code) {
  //1. parser
  let ast = parser.parse(code, { sourceType: 'module' });
  //2. traverse
  traverseData(ast);
  traverseMethods(ast);
  traverseMemberData(ast);
  traversePage(ast);
  //3. generate
  return generator.default(ast, {}, code);
}

const code = fs.readFileSync('source.js', 'utf-8');

const result = compile(code);
console.log(result.code);
