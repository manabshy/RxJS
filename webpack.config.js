// module.exports = {
//     entry:"./main.ts",
//     output:{ filename:"app.js" },
//     module:{
//         loaders:[
//             {
//             test: /.ts$/,
//             loader:"ts-loader"
//             }
//         ]
//     },
//     resolve:{
//         extensions:["",".ts",".js"]
//     }
// }

module.exports = {
    entry:"./main.ts",
    output:{ filename:"app.js" },    
    module: {
        loaders: [
            {
                //test: /\.jsx?$/,
                test: /.ts$/,
                exclude:/(node_modules)/,
                loader: 'ts-loader',
            }
        ]
    },
    resolve:{
        extensions:[".ts",".js"]
    }    
};