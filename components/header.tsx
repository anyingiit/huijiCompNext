import { useState } from 'react';
import { NextPage } from 'next';
import styles from '../styles/home/Header/styles.module.scss';
import { MenuOutlined } from '@ant-design/icons';
import { HeaderProps } from '../pages/api/getHeader';

type Props = {
  props: HeaderProps;
};

const Header: NextPage<Props> = ({ props }) => {
  // TODO: 使用let的解构还是使用useState?
  const [menuDatas, setMenuDatas] = useState(props);
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          {/* <SketchOutlined className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full text-2xl flex justify-center items-center" /> */}
          <span className="ml-3 text-xl">北京光谱科技有限公司</span>
        </a>
        <button
          onClick={() => {
            const temp = { ...menuDatas };
            temp.mobileMenuEnable = !temp.mobileMenuEnable;
            setMenuDatas(temp);
          }}
          className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base md:hidden ml-auto mt-auto mb-auto"
        >
          <MenuOutlined />
        </button>
        <nav
          className={
            String(menuDatas.mobileMenuEnable ? 'flex' : 'hidden') +
            ' ' +
            'ml-auto flex flex-wrap items-start text-base justify-start flex-col absolute top-20 right-1 bottom-1 left-1 bg-white md:static md:flex-row md:flex'
          }
        >
          {menuDatas.menuItems.map((item, index) => {
            return (
              <div key={index} className={[`${styles.largeMenu}`, `w-full p-5 md:p-0 md:pl-5 md:w-auto`].join(' ')}>
                <div className="w-full md:w-auto">
                  <div className="flex flex-row items-center justify-center w-full h-10">
                    <a className="hover:text-gray-900 text-xl w-full" href={item.largeTitle.href}>
                      {item.largeTitle.title}
                    </a>
                    <button
                      className="hover:text-gray-900 text-xl flex justify-center items-center w-5 md:hidden"
                      onClick={() => {
                        const temp = { ...menuDatas };
                        temp.menuItems[index].enable = !temp.menuItems[index].enable;
                        temp.menuItems.map((menuItem, menuIndex) => {
                          if (item.enable && menuIndex != index) {
                            menuItem.enable = false;
                          }
                        });
                        setMenuDatas(temp);
                      }}
                    >
                      {item.enable ? '-' : '+'}
                    </button>
                  </div>
                  <ul
                    className={[
                      `${String(menuDatas.menuItems[index].enable ? 'block' : 'hidden')}`,
                      `md:hidden`,
                      `${styles.secondMenu}`,
                      `md:absolute`
                    ].join(' ')}
                  >
                    {menuDatas.menuItems[index].largeTitle.children?.map((child, childIndex) => {
                      return (
                        <li key={index + childIndex} className="hover:text-gray-900 text-xl">
                          <a href={child.href}>{child.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
