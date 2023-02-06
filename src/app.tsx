// 运行时配置
import { RunTimeLayoutConfig } from '@umijs/max';

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
    rightRender: () => {
      return <>哈哈</>;
    },
  };
};
