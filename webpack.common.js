const path = require('path')

//entry: './src/index.js',
//filename: 'bundle.js',

module.exports = {
    
    entry: {
        app: './src/app.js'
    },
    devtool: false, // inline-source-map, source-map
    output: {
        
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'                    
                    // ,
                    // options: {
                    //     presets: ["babel-preset-env"]
                    // }
                }
            },            
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    }
}