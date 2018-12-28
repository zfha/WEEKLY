## 目标

实现简单的`vue`语法转换为微信小程序语法

原`vue`script 部分，见`source.js`文件

```
export default {
  data() {
    return {
      message: 'hello vue',
      count: 0
    };
  },
  methods: {
    add() {
      ++this.count;
    },
    minus() {
      --this.count;
    }
  }
};

```

转换以后的微信小程序代码

```
page({
  data: (() => {
    return {
      message: 'hello vue',
      count: 0
    };
  })(),

  minus() {
    --this.data.count;
    this.setData({
      count: this.data.count
    });
  },

  add() {
    ++this.data.count;
    this.setData({
      count: this.data.count
    });
  }
```

## 工具

`babel`全家桶: `@babel/generator`, `@babel/parser`, `@babel/traverse`, `@babel/types`

## AST 转换网站

[AST Explorer](https://astexplorer.net/)
注意`transform`选择`babelV7`

## 步骤

利用`AST Explorer`分析两中的代码的语法树差异，然后进行 AST 改造

1. 把`data`从方法转换为一个属性，注意使用立即执行函数，支持 data 预处理
2. 把`methods`里面方法提取出来，作为一等函数
3. 把`this.xxxx`，改为`this.data.xxx`，并加入`setData`函数【注意，只有在 data 中声明的属性，才需要做这个处理】
4. 把`export default`改为`page()`
