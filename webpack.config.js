const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/main.js', // 入口
    output:{ // 出口
        path:path.resolve(__dirname,'./dist'),
        filename:"bundle.js"
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{ // 这个节点用于配置所有第三方模块加载器
        rules:[ // 匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            // 这里使用url-loader时 后面的参数设置都不无效
            {test:/\.(jpg|png|bpm)$/,use:'file-loader?limit=4934&name=[hash:8]-[name].[ext]'},
            {test: /\.(woff|woff2|eot|ttf|otf)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}, // 排除node_modules下的js文件，要不然webpack打包很慢
            {test:/\.vue$/,use:'vue-loader'}
        
        ]
    },

    resolve:{
        alias: {
            'vue$': 'vue/dist/vue.js' // 修改vue被导入的时候的包的路径，
          }
    }
}