const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')


module.exports={
    mode:'development',
    entry:'./src/index.js',
    devtool:'inline-source-map',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true,

    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|svg|jpeg|gif)$/i,
                type:'asset/resource',
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                type:'asset/resource'
            }
        ]

    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            inject:'body'
        })
    ]
}