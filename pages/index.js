import Head from 'next/head'
import HomeMain from '../Components/HomeMain/HomeMain'
import styles from '../Components/HomeMain/HomeMain.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rasel Ahmmed</title>
        <meta name="description" content="Exparties Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='lg:h-[100vh] lg:overflow-hidden overflow-scroll'>
        <div className='lg:max-w-screen-xl w-full p-4 mx-auto'>
          <div className={`${styles.container}`}>
            <div className={`${styles.fillter_bg}`}></div>
          </div>
          <HomeMain />
          <div className={`${styles.container2}`}>
            <div className={`${styles.fillter_bg2}`}></div>
          </div>
        </div>

      </main>
    </>
  )
}
