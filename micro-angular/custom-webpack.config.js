const appName = require('./package.json').name;

module.exports = {
  
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    publicPath:'localhost:4200/angular-assets',
    library: `${appName}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${appName}`,
  }
};