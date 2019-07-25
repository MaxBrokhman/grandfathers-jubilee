module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    optimization: {
            splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}