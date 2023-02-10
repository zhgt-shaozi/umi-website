/**
 * @功能 存放全局公用的变量
 */

export const DEFAULT_NAME = 'Umi Max';

export const APP_LIST = [
  {
    title: 'UI 设计组件',
    desc: '前端相关的 UI 组件',
    children: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', // 站点图标
        title: 'Ant Design',
        desc: '杭州市较知名的 UI 设计语言', // 站点描述
        url: 'https://ant.design',
        target: '_blank', // 跳转方
      },
    ],
  },
  {
    title: '图表组件',
    children: [
      {
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案',
        url: 'https://antv.vision/',
        target: '_blank',
      },
    ],
  },
];
