const path = require('path')
const args = process.argv.splice(1);

let baseUrl = args.indexOf('--target')===-1? '/best-ui/docs-dist/':'/';
let output = args.indexOf('--target')===-1? 'docs-dist':'dist';

module.exports = {
    baseUrl: baseUrl,
    outputDir: output,
    filenameHashing: false,
    pages: {
        index: {
            entry: 'docs/main.js',
        }
    },
}