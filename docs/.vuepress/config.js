const { path } = require('@vuepress/utils')

module.exports = {
  lang: 'vi-VN',
  title: 'leUniversity',
  description: 'This is my first VuePress site',

  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],

  theme: path.resolve(__dirname, './theme'),

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: 'Trường',
        children: [
          {
            text: 'Đại học',
            link: '/dai-hoc/',
          },
          {
            text: 'Cao đẳng',
            link: '/college/',
          }
        ],
      },
      {
        text: 'Điểm chuẩn',
        link: '/diem-chuan/',
      },
      {
        text: 'Tin tức',
        link: '/news/',
      },
      {
        text: 'Thủ tục/ Hồ sơ',
        link: '/documents/',
      },
      {
        text: 'Công cụ',
        children: [
          {
            text: 'Tính điểm',
            link: '/tools/calculator/',
          }
        ],
      },
    ],

  },
}