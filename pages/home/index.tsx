import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/home/styles.module.scss';
import Header from './Header';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
    </div>
  );
};

export default Home;
