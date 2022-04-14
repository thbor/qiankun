const appName = require('./package.json').name;

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    publicPath:'http://localhost:4200',
    library: `${appName}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${appName}`,
  }
};