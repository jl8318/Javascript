var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'assets/js');
var APP_DIR = path.resolve(__dirname, 'src');
var CSS_DIR = path.resolve(__dirname,'assets/css');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include :APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        include : CSS_DIR,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader",
            options: { modules: true, localIdentName: '[local]---[hash:base64:5]' }
           },
        ],
      },
   
    ]
  }
};

module.exports = config;