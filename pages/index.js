import Head from 'next/head'
import HomeMain from '../Components/HomeMain/HomeMain'
import Navbar from '@/Components/Header/Navbar'

export default function Home() {

  return (
    <>
      <Head>
        <title>Rasel Ahmmed</title>
        <meta name="description" content="Exparties Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-[100vh] overflow-hidden'>
        <HomeMain />
        <Navbar />
      </main>
    </>
  )
}
