module.exports = [
  { text: "首页", link: "/" },
  {
    text: "指南",
    link: "/pages/101/",
    items: [
      { text: "简 介", link: "/pages/101/" },
      { text: "快速开始", link: "/pages/102/" },
      { text: "返回响应码", link: "/pages/103/" },
      {
        text: "API接口",
        items: [
          { text: "幽默段子", link: "/pages/201/" },
          { text: "IP归属地", link: "/pages/202/" },
          { text: "土味情话", link: "/pages/203/" },
          { text: "星座运势", link: "/pages/204/" },
          { text: "天气查询", link: "/pages/205/" },
          { text: "随机壁纸", link: "/pages/206/" },
        ],
      },
    ],
  },
];
