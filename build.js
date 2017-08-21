const webpack = require('webpack');
const config = require('./webpack.config');

var compiler = webpack(config, () => {});
compiler.run(() => {})