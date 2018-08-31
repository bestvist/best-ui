const path = require('path')

module.exports = {
    outputDir: 'dist',
    filenameHashing: false,
    pages: {
        index: {
            entry: 'examples/main.js',
        }
    }
}