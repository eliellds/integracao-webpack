const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'production', // pode ser development também
    entry: './src/main.ts',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        hot: true
    },
    output: {
        filename: 'app.min.js', // nome gerado na pasta do build
        path: path.join(__dirname, 'dist') // local em que irá gerar o arquivo
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'public' }],
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js'] // quando não informado no import, vai tentar encontrar um arquivo .ts ou .js
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}