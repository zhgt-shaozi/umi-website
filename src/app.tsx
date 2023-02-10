// 运行时配置
import { RunTimeLayoutConfig } from '@umijs/max';
import { Avatar } from 'antd';
import { APP_LIST } from '@/constants';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RunTimeLayoutConfig = (initData) => {
  console.log('initData: ', initData);

  return {
    title: '求求让我回本吧！',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false, // 不需要菜单国家化时，可关闭
    },
    layout: 'mix', // layout 的布局方式，mix - 混合模式
    splitMenus: true, // 🍋 mix 模式专属的功能，将一级菜单放到顶部导航，二级菜单放置到侧栏
    fixSiderbar: true, //  是否固定导航（顶部和侧栏）

    // 右上角功能 render（退出登录、头像等，需自定义）
    rightRender: () => {
      return (
        <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
          Z
        </Avatar>
      );
    },
    appList: APP_LIST,
  };
};
