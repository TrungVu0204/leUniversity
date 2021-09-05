const { path } = require('@vuepress/utils')
const sideBarConfig = require("./sidebar")

module.exports = {
  lang: 'vi-VN',
  title: 'leUniversity',
  description: 'Cổng thông tin đại học',

  dest: 'public',

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
        ignore: [
          {
            menu: "/thu-tuc-ho-so/",
          }
        ]
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
            text: 'Đại học vs. Cao đẳng',
            link: '/dai-hoc-vs-cao-dang.md',
          },
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
        text: 'Thông tin chung',
        children: [
          {
            text: 'Điểm chuẩn',
            link: '/diem-chuan/',
          },
          {
            text: 'Khối thi',
            link: '/nganh-hoc/khoi-thi.md',
          }
        ],
      },
      {
        text: 'Tin tức',
        link: '/news/',
      },
      {
        text: 'Thủ tục/ Hồ sơ',
        link: '/thu-tuc-ho-so/',
      },
      {
        text: 'Công cụ',
        children: [
          {
            text: 'Tính điểm',
            link: '/cong-cu/tinh-diem',
          }
        ],
      },
    ],
    sidebar: sideBarConfig,
  },
}