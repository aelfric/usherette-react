module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //        //make sure port 8090 is used when launching webpack-dev-server
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
        {
            test: /\.jsx$/,
            loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }
        ]
    }
}
