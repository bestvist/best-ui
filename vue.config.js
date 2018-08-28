const path = require('path')

module.exports = {
    outputDir: 'dist',
    filenameHashing: false,
    pages: {
        index: {
            entry: 'examples/main.js',
        }
    },
    css: {
        modules: true,
        loaderOptions: {
            css: {
                localIdentName: 'style/[name]'
            },
            sass: {
                data: `@import "@/styles/index.scss";`
            }
        }
    }
}