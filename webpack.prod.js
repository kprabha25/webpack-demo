const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js')

module.exports = merge(common, { 
    entry: {
        app: './src/index.js',
    },
    mode: 'production',    
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
      module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'                                        
                ],
                
            },
        ],
      }     
})