module.exports = {
  dest: 'demo',
  base: '/vue-modal/demo/',
  // base: '/demo/',
  title: 'vue-modal',
  description: 'A modal plugin for Vue',
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/kouts/vue-modal' }
    ],
    sidebar: [
      ['/', 'Introduction'],
      ['/installation/', 'Installation'],
      ['/usage/', 'Usage'],
      ['/options/', 'Options']
    ]
  },
  head: [
    [
      'script',
      {src: 'https://polyfill.io/v3/polyfill.min.js?features=NodeList.prototype.forEach'}],
  ],  
  chainWebpack: (config, isServer) => {
    const compileRule = config.module.rule('compile');
    compileRule.test(/\.js$/).include.add(/@vuepress/).add(/.temp/).end().use('babel-loader').loader('babel-loader').options({
      presets: [
        ['@babel/preset-env', {
          useBuiltIns: 'usage'
        }]
      ],
      plugins: ['@babel/plugin-syntax-dynamic-import']
    });
  }  
};
