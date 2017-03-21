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
        tree: "./webpackbuildjs/react/tree_react.js"
        //,canvas: "./webpackbuildjs/mzg/canvas.js"
        //,datepicker: "./webpackbuildjs/mzg/datepicker.js"
        //,formselect: "./webpackbuildjs/mzg/formselect.js"
        //,es6: ['babel-polyfill',"./webpackbuildjs/mzg/es6.js"]
        //,welcome: "./webpackbuildjs/welcome.js"
        ,react: ['react', 'react-dom']
    }
    ,devServer:{
        historyApiFallback:true,
        hot:true,
        //inline:true,
        //progress:true,

        port:8080 //端口你可以自定义
    }
    //,devtool: 'cheap-module-source-map',//配置生成Source Maps，选择合适的选项  eval-source-map
    ,devtool: false,//配置生成Source Maps，选择合适的选项  eval-source-map

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
    externals: {
        'react': 'React'
        ,'ReactDOM':'react-dom'
        //,'fs':'fs'
    },
    module: {
        loaders: [
            //{ test: /\.js$/, loader: "jsx?harmony!babel"
            //    , exclude: /node_modules/
            //   ,query:{
            //   presets:['es2015','react']
            //   }
            //},
            { test: /\.js$/, loader: "jsx"},
            ,{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                //test: path.join(__dirname, 'es6'),
                query: {
                    presets: ['es2015',"react"]
                    //plugins : [
                    //    'transform-es3-member-expression-literals',
                    //    'transform-es3-property-literals',
                    //]
                }

            },
            //{
            //    loader: 'babel-loader',
            //    test: /\.js$/,
            //    exclude: /node_modules/,
            //    query: {
            //        presets: 'es2015'
            //    }
            //},


            //{ test: /\.css$/, loader: "style!css"},

            { test: /\.css$/, loader:  ExtractTextPlugin.extract("style-loader", "css-loader")} ,
           {test: /\.scss?$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")}
            //,{ test: /\.js$/, loader: "babel",exclude: /node_modules/}
            //, {
            //    test: /\.(jpe?g|png|gif|svg)$/i,
            //    loaders: [
            //        'file?hash=sha512&digest=hex&name=image/[hash].[ext]',
            //        'image-webpack'
            //    ]
            //}
           // ,{ test: /\.(png|jpg|gif)$/, loader: "url?limit=6120"}
            //{ test: /\.scss$/, loader: "style!css!sass"},

            //{ test: /\.svg$/, loader: "url?limit=8192"}
        ]
    }
    , imageWebpackLoader: {//压缩图片
            mozjpeg: {
                quality: 50
            },
            pngquant:{
                quality: 55,
                speed: 10
            },
            svgo:{
                plugins: [
                    {
                        removeViewBox: false
                    },
                    {
                        removeEmptyAttrs: false
                    }
                ]
            }
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
        }) ,
       new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
       })
        //,new webpack.ProvidePlugin({
        //    'Moment': 'moment',
        //    "$": "jquery",
        //    "jQuery": "jquery",
        //    "window.jQuery": "jquery",
        //    "React": "react"
        //})
        //,new webpack.HotModuleReplacementPlugin() //热加载
]
    //,plugins: [
    //    new ExtractTextPlugin("main.css"),
    //    new webpack.optimize.CommonsChunkPlugin("init.js")
    //]

    //,plugins:[
    //    new HtmlWebpackPlugin({
    //        filename: __dirname+'/1.html',
    //        inject:'body',
    //        hash:true
    //    })
    //
    //    new HtmlWebpackPlugin({
    //        filename: __dirname+'/build/html/index-build.html',
    //        template:__dirname+'/src/tpl/index.html',
    //        inject:'body',
    //        hash:true
    //    }),
    //
    //    // 拆分插件
    //    new webpack.optimize.CommonsChunkPlugin({
    //        name:'user', // 上面入口定义的节点组
    //        filename:'build-user.js' //最后生成的文件名
    //    }),
    //
    //    // css抽取
    //    new extractTextPlugin("[name].css"),
    //]
};