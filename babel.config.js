// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        ts: true,
        /**
         * targets 默认值
         * ios: '9',
         * android: '5'
         */
        targets: {
          ios: '12',
          android: '8',
        }
      },
    ],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'taro-hooks',
        camel2DashComponentName: false
      },
      'taro-hooks',
    ]
  ],
};
