const path = require('path')
const markdownRender = require('markdown-it')();
const args = process.argv.splice(1);

let baseUrl = args.indexOf('build') !== -1 && args.indexOf('--target') === -1 ? '/best-ui/' : '/';
let output = args.indexOf('build') !== -1 && args.indexOf('--target') === -1 ? 'docs' : 'dist';


const mdOptions = {
    preventExtract: true,
    use: [
        [require('markdown-it-container'), 'demo', {

            validate: function (params) {
                return params.trim().match(/^demo\s+(.*)$/);
            },

            render: function (tokens, idx) {
                if (tokens[idx].nesting === 1) {
                    // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                    let demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
                    let description = (demoInfo && demoInfo.length > 1) ? demoInfo[1] : '';
                    let descriptionHTML = description ? markdownRender.render(description) : '';
                    // 2.获取代码块内的html和js代码
                    let content = tokens[idx + 1].content;
                    // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                    return `<demo-block>
                                <div class="source" slot="source">${content}</div>
                                ${descriptionHTML}
                                <div class="highlight" slot="highlight"></div>
                            </demo-block>\n`;
                } 
                // else {
                //     return '</div></demo-block>\n';
                // }
            }
        }]
    ]

}

module.exports = {
    baseUrl: baseUrl,
    outputDir: output,
    filenameHashing: false,
    pages: {
        index: {
            entry: 'docs-src/main.js',
        }
    },
    chainWebpack: config => {
        // MD Loader
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('md-tag-loader')
            .loader('vue-markdown-loader')
            .tap(options => {
                options = Object.assign(mdOptions, options);
                return options;
            })
            .end()
    }
}