module.exports = {
    entry: "./index.js",
    output: {
        filename: "index.bundle.js"
    },
    module: {
        loaders: [
            {
                loader: "babel-loader"
            }
        ]
    }
}