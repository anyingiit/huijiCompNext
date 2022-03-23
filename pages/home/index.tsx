import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/home/styles.module.scss';
// import Header from './Header';
import PageBase from '../../components/page-basic';
import { getHeaderMenu, HeaderProps } from '../api/getHeader';

export const getStaticProps: GetStaticProps = async () => {
  const headerMenu: HeaderProps = getHeaderMenu();
  return {
    props: {
      headerMenu
    }
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ headerMenu }) => {
  console.log(headerMenu);
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      {/* <Header /> */}
      <PageBase headerProps={headerMenu}></PageBase>
    </div>
  );
};

export default Home;
