type GetHeaderMenuResponse = {
  code: number;
  data: {
    menuDatas: Array<{
      name: string;
      pathname: string;
      href: string | null;
      children: Array<{
        name: string;
        pathname: string;
        href: string | null;
      }> | null;
    }>;
  };
};

const getHeaderMenuMook: GetHeaderMenuResponse = {
  code: 0,
  data: {
    menuDatas: [
      {
        children: null,
        name: '主页',
        pathname: 'home',
        href: null
      },
      {
        children: null,
        name: '产品',
        pathname: 'product',
        href: null
      },
      {
        children: [
          {
            name: '我们的服务',
            pathname: 'weservice',
            href: null
          },
          {
            name: '服务报价',
            pathname: 'serviceprice',
            href: null
          }
        ],
        name: '服务',
        pathname: 'service',
        href: null
      }
    ]
  }
};

export type HeaderProps = {
  mobileMenuEnable: boolean;
  menuItems: Array<{
    enable: boolean;
    largeTitle: {
      title: string;
      href: string;
      children: Array<{
        title: string;
        href: string;
      }> | null;
    };
  }>;
};

export const getHeaderMenu = (): HeaderProps => {
  const headerProps: HeaderProps = {
    mobileMenuEnable: false,
    menuItems: getHeaderMenuMook.data.menuDatas.map((item) => {
      return {
        enable: false,
        largeTitle: {
          title: item.name,
          href: item.href == null ? item.pathname : item.href,
          children:
            item.children == null
              ? null
              : item.children.map((item) => {
                  return {
                    title: item.name,
                    href: item.href == null ? item.pathname : item.href
                  };
                })
        }
      };
    })
  };
  return headerProps;
};
