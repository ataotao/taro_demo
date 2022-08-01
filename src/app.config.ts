export default {
  appId: 'app',
  pages: [
    'pages/index/index',
    // 'pages/nodes/index', 把要分包的页面从 `pages` 字段中删除
  ],
  // 在 `subpackages` 字段添加分包，如果目标是支付宝小程序，还需要加一个字段 `subPackages` 值和 `subpackages` 一致
  // 不能在 `pages` 根目录也不能在 pages 目录外，需要在 `pages` 根目录另外新建文件夹做分包
  'subpackages': [
    {
      'root': 'pages_sub1',
      'pages': [
        'nodes/index'
      ]
    }
  ],

  // tabBar: {
  //   list: [{
  //     'iconPath': 'resource/latest.png',
  //     'selectedIconPath': 'resource/lastest_on.png',
  //     pagePath: 'pages/index/index',
  //     text: '最新'
  //   }, {
  //     'iconPath': 'resource/hotest.png',
  //     'selectedIconPath': 'resource/hotest_on.png',
  //     pagePath: 'pages/hot/hot',
  //     text: '热门'
  //   }, {
  //     // 如果是分包的子页面，就不能在 `tabBar` 中使用
  //     'iconPath': 'resource/node.png',
  //     'selectedIconPath': 'resource/node_on.png',
  //     pagePath: 'pages/nodes/nodes',
  //     text: '节点'
  //   }],
  //   'color': '#000',
  //   'selectedColor': '#56abe4',
  //   'backgroundColor': '#fff',
  //   'borderStyle': 'white'
  // },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'V2EX',
    navigationBarTextStyle: 'black'
  }
};
