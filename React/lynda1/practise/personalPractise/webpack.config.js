var webpack = require("webpack");
var path = require('path');
var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'assert');

module.exports = {
	entry: "./src/index.jsx",
	output:{
		path:BUILD_DIR,//bundled file reside
		filename:"bundle.js"
		/*publicPath:"asset"*/
	},
	devServer:{//like httpster, 
		//automatically reload as soon as I make any change
		inline:true,
		contentBase:'../',
		port:3000

	},
	module:{
		loaders:[
			{
				test:/\.jsx$/, //js end
				exclude:/(node_modules)/, // no include
				include:APP_DIR,
				loader:"babel-loader",
				query:{
					presets:["latest","stage-0","react"]
				}//any preset you want
			}/*,
			{
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }*/
		]
	}
}