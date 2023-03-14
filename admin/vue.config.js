// const { defineConfig } = require('@/vue/cli-service')
// module.exports = defineConfig({
//     transpileDependencies: true,

//     devserver: {
//         proxy: {
//             "/users": {
//                 target: "http:://localhost:3000",
//                 changeOrigin: true
//             }
//         }
//     }
// })

module.exports = ({
    devServer: {
        proxy: {
            "/adminapi": {
                target: "http://localhost:3000",
                changeOrigin: true
            }
        }
    }
})