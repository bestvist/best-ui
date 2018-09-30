module.exports = {
    base: '/best-ui/',
    title: 'Best UI',
    description: 'UI library for Vuejs',
    head:[
        ['link', { rel: 'icon', href: `/favicon.ico` }],
        ['meta', { name: 'theme-color', content: '#ff9800' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: 'GitHub', link: 'https://github.com/bestvist/best-ui' },
        ],
        sidebarDepth: 0,
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        '',
                    ]
                },
                {
                    title: '组件',
                    collapsable: false,
                    children: [
                        '/guide/component/',
                        '/guide/component/layout',
                    ]
                }
            ]
        }
    }
  }