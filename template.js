/* eslint-disable import/no-commonjs */
/**
 * pages模版快速生成脚本,执行命令 npm run tep `文件名`
 */

const fs = require('fs');

const dirName = process.argv[2];

if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run tep test');
  process.exit(0);
}

// 页面模版
const indexTep = `import Taro, { Component } from '@tarojs/taro';
  import { View } from '@tarojs/components';
  import { connect } from 'react-redux';
  import './index.less';
  @connect(({${dirName}}) => ({
    ...${dirName},
  }))
  const ${titleCase(dirName)} = () => {
    return (
      <View>
        <Text>${titleCase(dirName)}</Text>
      </View>
    );
  };
  
  export default ${titleCase(dirName)};
`;

// less文件模版
const lessTep = `
  .${dirName}-page {

  }
`;

// index.config页面模版
const configTep = `export default {
  navigationBarTitleText: 'Taro-hooks',
  enableShareAppMessage: true,
};
`;

fs.mkdirSync(`./src/pages/${dirName}`); // mkdir $1
process.chdir(`./src/pages/${dirName}`); // cd $1

fs.writeFileSync('index.tsx', indexTep);
fs.writeFileSync('index.less', lessTep);
fs.writeFileSync('index.config.ts', configTep);

console.log(`模版${dirName}已创建`);

function titleCase(str) {
  const array = str.toLowerCase().split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] =
      array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
  }
  const string = array.join(' ');
  return string;
}

process.exit(0);
