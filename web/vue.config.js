module.exports = ({
    devServer: {
        proxy: {
            "/webapi": {
                target: "http://localhost:3000",
                changeOrigin: true
            }
        }
    }
})

