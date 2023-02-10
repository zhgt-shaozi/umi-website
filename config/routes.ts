/**
 * @功能 路由配置
 */

export default [
  {
    path: '/',
    redirect: '/welcome', // 重定向
  },
  {
    path: '/welcome',
    name: '欢迎', // 菜单名称
    icon: 'SmileFilled', // 菜单图标（需在 antd icon 中找到，也可以自定义路径）
    component: './Welcome', // 默认直接引用 pages 下的文件
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'CrownFilled',
    // access: 'canAdmin',  // 权限点
    // component: './Home', // 💡 注意，这里不能定义组件，否则会导致二级菜单的组件失效
    routes: [
      // 🍏 这里单独定义一级菜单的组件
      {
        path: '/admin',
        component: './Home',
      },

      {
        path: '/admin/sub-page1',
        name: '一级页面',
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
        component: './Access',
      },
      {
        path: '/admin/sub-page2',
        name: '二级页面',
        icon: 'CrownFilled',
        component: './Table',
      },
    ],
  },
  {
    path: 'https://ant.design', // path 为一个 https 链接时，会自动在新窗口打开该页面
    name: 'Ant Design 官网外链',
    icon: 'ChromeFilled',
    target: 'blank',
  },
];
