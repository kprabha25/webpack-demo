const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')

const output = merge(
    { fruit: "apple", color: "red" },
    { fruit: "strawberries" }
  );
  console.log(output);
  

module.exports = merge( common, { 
    mode: 'development',
     module: {
     rules: [
       {
         test: /\.scss$/,
         use: [
           {
             loader: 'style-loader'
           }, {
             loader: 'css-loader'
           }, {
             loader: 'sass-loader'
           }
         ]
       }
     ]
   }
} )
