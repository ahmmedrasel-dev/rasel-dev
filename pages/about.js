import Head from 'next/head';
import React from 'react';
import styles from '../Components/HomeMain/HomeMain.module.css'
import AboutMain from '@/Components/About/AboutMain';

const about = () => {
  return (
    <>
      <Head>
        <title>About-Rasel Ahmmed</title>
        <meta name="description" content="Exparties Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <div className='lg:max-w-screen-xl w-full p-4 mx-auto'>
          <div className={`${styles.container}`}>
            <div className={`${styles.fillter_bg}`}></div>
          </div>

          <AboutMain></AboutMain>
          <div className={`${styles.container2}`}>
            <div className={`${styles.fillter_bg2}`}></div>
          </div>
        </div>

      </main>

    </>
  );
};

export default about;