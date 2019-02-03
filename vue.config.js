module.exports = {
    devServer: {
        proxy: {
            "/api": {
                "target": "http://localhost:8008",
                "secure": false,
                "changeOrigin": true
            }
        }
    }
}
