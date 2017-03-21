/**
 * Created by YikaJ on 15/6/16.
 */
'use strict';
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
module.exports = {
    entry: {
        //index: ['./webpackbuildjs/entry.js', hotMiddlewareScript]
        //login: "./webpackbuildjs/mzg/login.js"
        //,modal: "./webpackbuildjs/mzg/modal.js"
        //roller: "./webpackbuildjs/mzg/roller.js"
        example: "./example.js"
        ,yg_app: ["./common/js/mobileAdapflex.js","./yg_app.js"]
        //hello: './component/helloword/hello.vue'
        //,canvas: "./webpackbuildjs/mzg/canvas.js"
        //,datepicker: "./webpackbuildjs/mzg/datepicker.js"
        //,formselect: "./webpackbuildjs/mzg/formselect.js"
        //,es6: ['babel-polyfill',"./webpackbuildjs/mzg/es6.js"]
        //,welcome: "./webpackbuildjs/welcome.js"
        //,react: ['react', 'react-dom']
    }
    ,devServer:{
        historyApiFallback:true,
        hot:true,
        //inline:true,
        //progress:true,

        port:8082 //端口你可以自定义
    }
    //,devtool: 'cheap-module-source-map',//配置生成Source Maps，选择合适的选项  eval-source-map
    ,devtool: false,//配置生成Source Maps，选择合适的选项  eval-source-map
    //resolve: {
    //    alias: {
    //        'vue$': path.join(__dirname, 'dist')+'/js/vue2.1.8.js'
    //    }
    //},
    extensions: ['', '.vue'],
    //resolve: {
    //    modulesDirectories: ["./node_modules", "./node_modules/babel"]
    //},
    //
    //resolveLoader: {
    //    root: path.resolve(__dirname, 'node_modules')
    //},

    output: {
        path: path.join(__dirname, 'dist'),
        //publicPath: './dist',
        publicPath: '/dist/',
        filename: "js/[name].js"
    },
    //externals: {
    //    'react': 'React'
    //    ,'ReactDOM':'react-dom'
    //    //,'fs':'fs'
    //},
    module: {
        loaders: [

            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            //{
            //    test: /\.css$/,
            //    exclude: /node_modules/,
            //    loader: 'style-loader!css-loader'
            //},
            { test: /\.(png|jpg|gif)$/, loader: "url?limit=6"},
            {test: /\.scss?$/, exclude: /node_modules/,
                //loader: 'css-loader!sass-loader',
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
    ,babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }

    ,plugins: [
        //new webpack.HtmlWebpackPlugin({
        //    filename: __dirname+'/1.html',
        //    inject:'body',
        //    hash:true
        //}),
        new ExtractTextPlugin("css/[name].css"),//分离css样式
        new webpack.optimize.UglifyJsPlugin({    //压缩代码
            compress: {
                warnings: false
            },
            output: {
                comments: false // remove all comments
            },
            except: ['$super', '$', 'exports', 'require']    //排除关键字
        })
       // , new webpack.DefinePlugin({
       //     "process.env": {
       //         NODE_ENV: JSON.stringify("production")
       //     }
       //})


        //,new webpack.ProvidePlugin({
        //    'Moment': 'moment',
        //    "$": "jquery",
        //    "jQuery": "jquery",
        //    "window.jQuery": "jquery",
        //    "React": "react"
        //})
        //,new webpack.HotModuleReplacementPlugin() //热加载
]

};