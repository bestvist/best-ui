const path = require('path')
const args = process.argv.splice(1);

let baseUrl = args.indexOf('build') !== -1 && args.indexOf('--target') === -1 ? '/best-ui/' : '/';
let output = args.indexOf('build') !== -1 && args.indexOf('--target') === -1 ? 'docs' : 'dist';

module.exports = {
    baseUrl: baseUrl,
    outputDir: output,
    filenameHashing: false,
    pages: {
        index: {
            entry: 'docs-src/main.js',
        }
    },
}