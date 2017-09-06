var htmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist', //打包的文件放在什么地方
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:path.resolve(__dirname,'(node_modules|bower_components)') ,
                include:path.resolve(__dirname,'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:1
                        }
                    },
                    {
                        loader:'postcss-loader'
                    }
                ]
            },
            {
                 test:/\.less$/,//当处理less和scss@import引入其他less文件时，不需要importloader处理
                 loader:'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                 test:/\.scss$/,
                 loader:'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                 test:/\.html$/,
                 loader:'html-loader'
            },
            {
                 test:/\.(png|jpg|svg|gif)$/,
                 loader:'file-loader'
            }
        ]
    },
    devServer: {
        inline: true,
        port: 8099
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html', 
            template: 'index.html',
            inject: 'body'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
};