const path = require('path')

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/docs-dist/' : '/',
    outputDir: 'docs-dist',
    filenameHashing: false,
    pages: {
        index: {
            entry: 'examples/main.js',
        }
    }
}