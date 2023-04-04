import React from 'react';
import LottieAnimation from '../Animation/LottieAnimation';
import animationData from '../../public/animation_data/web_development2.json'
import TypeAnimation from '../TypeAnimation/TypeAnimation';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsFillCloudDownloadFill, BsFacebook, BsGithub } from 'react-icons/bs'
import styles from './HomeMain.module.css'

const HomeMain = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>

      <div className='grid grid-cols-2 items-center'>
        <div className='mt-10'>
          <div className={`${styles.container}`}>
            <div className={`${styles.fillter_bg}`}></div>
          </div>
          <div className={`${styles.homecontent}`}>
            <h1 className='text-6xl text-success mb-4 uppercase'>I'm Rasel Ahmmed</h1>
            <TypeAnimation />
            <p className='mt-4 pr-10'>As an experienced front-end developer, I am proficient in JavaScript, React Js, Redux, Tailwind, HTML,
              and CSS. I am passionate about staying at the front-end of emerging technologies and trends to push
              the boundaries of what is possible in front-end development.</p>

            <a className='btn btn-success mt-4 text-white btn-lg' href="https://drive.google.com/uc?export=download&id=1nHHEZYDAaBm0TZACWobwluFFSYwLYG-M">
              <BsFillCloudDownloadFill className='mr-1 text-lg' />
              Download Resume
            </a>

            <div className='flex gap-5 mt-8'>
              <a className='border-2 rounded-full p-2 hover:border-success hover:text-success' href="https://www.linkedin.com/in/ahmmedrasel-dev/" target='_blank' rel="noreferrer"><FaLinkedinIn className='text-2xl shadow-md' /></a>
              <a className='border-2 rounded-full p-2 hover:border-success hover:text-success' href="https://github.com/ahmmedrasel-dev" target='_blank' rel='noreferrer'><BsGithub className='text-2xl shadow-md' /></a>
              <a className='border-2 rounded-full p-2 hover:border-success hover:text-success' href="https://www.facebook.com/ahmmedraseldev" target='_blank' rel='noreferrer'><BsFacebook className='text-2xl shadow-md' /></a>
            </div>
          </div>
        </div>
        <div>
          <div className={`${styles.container2}`}>
            <div className={`${styles.fillter_bg2}`}></div>
          </div>
          <LottieAnimation
            animationData={animationData}
            width={700}
            height={600}
          />


        </div>
      </div>

    </div>
  );
};

export default HomeMain;