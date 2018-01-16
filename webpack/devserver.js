module.exports = function () {
    return {
        devServer: {
            stats: 'errors-only',
            port: 3000,
            contentBase: "/source/",
            // hot: true,
        }
    }
};



