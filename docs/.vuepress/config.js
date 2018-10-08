module.exports = {
    base: '/best-ui/',
    title: 'Best UI',
    description: '基于Vue的组件库',
    head:[
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#ff9800' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: 'GitHub', link: 'https://github.com/bestvist/best-ui' },
            { text: 'Gitter', link: 'https://gitter.im/best-ui/best-ui' },
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
                        '/guide/component/grid',
                        '/guide/component/color',
                        '/guide/component/icon',
                        '/guide/component/button',
                        '/guide/component/input',
                        '/guide/component/checkbox',
                        '/guide/component/radio',
                        '/guide/component/switch',
                        '/guide/component/time',
                        '/guide/component/timeline',
                        '/guide/component/card',
                        '/guide/component/tag',
                        '/guide/component/progress',
                        '/guide/component/alert',
                        '/guide/component/collapse',
                        '/guide/component/list',
                        '/guide/component/carousel',
                        '/guide/component/popover',
                        '/guide/component/tip',
                    ]
                }
            ]
        }
    }
  }