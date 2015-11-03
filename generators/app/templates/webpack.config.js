var webpack = require('webpack');
var path = require('path');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        profile: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'app/profile'
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js",
        publicPath: '/'
    },
    resolve: {
        modulesDirectories: ['', 'node_modules','assets/style'],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: "react-hot-loader!babel-loader"},
            {test: /\.less$/, loader: "style-loader!css-loader!autoprefixer-loader!less-loader"}
        ]
    },
    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};