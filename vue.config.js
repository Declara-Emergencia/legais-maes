// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    publicPath: "/maes-legais/",
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:1888/apps/test/mainapp.php/',
                changeOrigin: true,
            },
        },
    }
}
