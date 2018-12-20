## 目标

实现 console.log 的时候，打印出调用者的函数名。

案例代码如下：

```
function foo(){
  console.log('bar');
}
```

希望转换后的代码

```
function foo(){
  console.log('[foo] bar');
}
```

## 工具

`babel`全家桶: `@babel/generator`, `@babel/parser`, `@babel/traverse`, `@babel/types`

## AST 转换网站

[AST Explorer](https://astexplorer.net/)
注意`transform`选择`babelV7`
