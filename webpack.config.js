module.exports = {
    entry: {reservationEdit:'./reservation-edit.jsx', willCall:'./will-call.jsx'},
    output: {
        filename: '[name].entry.js',
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
