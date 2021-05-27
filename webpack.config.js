const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    //0.Establecer el modo del connfigurador
    mode: 'development',
    //1.Especificando el archivo de entrada
    entry: './client/index.js',
    //2 Especificando la salida
    output: {
        // Ruta absoluta de salida
        path: path.join(__dirname,'public'),
        //4 nombre del archivo de salida
        filename: 'js/bundle.js',
        //5 ruta del path publico para fines del servidor de desarrollo
        publicPath: '/'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                  '@babel/preset-env',
                                  {
                                      'modules': false,
                                      'useBuiltIns': 'usage',
                                      'targets': {"chrome": "80"},
                                      'corejs': 3
                                  }  
                                ]
                            ],
                            "plugins":[
                                [
                                    "module-resolver",
                                    {
                                        "root": ["./"],
                                        "alias":{
                                            "@client" : "./client",
                                        }
                                    }
                                ]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/app.css'
        })
    ]
}