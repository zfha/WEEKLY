//载入webpack主体
let webpack = require('webpack');
//指定webpack配置文件
let config = require('./webpack.config.js');
//执行webpack，返回一个compile的对象，这个时候编译并未执行
let compile = webpack(config);
//运行compile，执行编译
compile.run();
