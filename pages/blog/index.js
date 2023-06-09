import Head from 'next/head';
import React from 'react';
import styles from '../../Components/Blog/blog.module.css';
import BlogMain from '@/Components/Blog/BlogMain';
const blog = () => {
  return (
    <>
      <Head>
        <title>Blog Page</title>
        <meta name="description" content="Exparties Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-[100%]'>
        <div className='overflow-y-hidden'>

          <div className='lg:max-w-screen-xl w-full p-4 mx-auto'>
            <div className={`${styles.container}`}>
              <div className={`${styles.blog_bg_blur}`}></div>
            </div>

            <BlogMain></BlogMain>

            <div className={`${styles.container}`}>
              <div className={`${styles.blog_bg_blur2}`}></div>
            </div>

            {/* <div className={`${styles.container}`}>
              <div className={`${styles.about_bg_blur3}`}></div>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default blog;