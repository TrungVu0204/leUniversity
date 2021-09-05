const { path } = require('@vuepress/utils')
const sideBarConfig = require("./sidebar")

module.exports = {
  lang: 'vi-VN',
  title: 'leUniversity',
  description: 'Cổng thông tin đại học',

  dest: 'public',

  theme: path.resolve(__dirname, './theme'),

  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    [
      "vuepress-plugin-auto-sidebar",
      {
        title: {
          mode: "titlecase",
          map: {
            "/dai-hoc/": "Đại học",
            "/dai-hoc/mien-bac/": "Miền Bắc",
          }
        },
      }
    ],
  ],

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
    sidebar: sideBarConfig,
  },
}