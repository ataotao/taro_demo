// 使用编译时宏函数 defineAppConfig 包裹配置对象，以获得类型提示和自动补全：
export default defineAppConfig({
  appId: 'app',
  pages: ['pages/index/index'],
  // 在 `subpackages` 字段添加分包，如果目标是支付宝小程序，还需要加一个字段 `subPackages` 值和 `subpackages` 一致
  'subpackages': [{
    'root': 'pages_sub1',
    'pages': ['nodes/index']
  }],
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
});