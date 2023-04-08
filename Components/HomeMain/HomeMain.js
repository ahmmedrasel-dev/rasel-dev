import React from 'react';
import LottieAnimation from '../Animation/LottieAnimation';
import animationData from '../../public/animation_data/web_development2.json'
import { FaLinkedinIn } from 'react-icons/fa';
import { BsFillCloudDownloadFill, BsFacebook, BsGithub } from 'react-icons/bs'
import styles from './HomeMain.module.css'
import TypewriterComponent from 'typewriter-effect';
import { Fade, Slide } from 'react-reveal';

const HomeMain = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
      <div className='mt-10 lg:order-1 order-2'>
        <div className={`${styles.homecontent} flex flex-col lg:items-start items-center justify-center`}>
          <Slide top duration="1500">
            <h1 className='lg:text-6xl text-3xl text-white mb-4 uppercase font-black'>I'm <span className='text-success'>Rasel</span> Ahmmed</h1>
          </Slide>
          <TypewriterComponent
            options={{
              strings: ["Full-Stack Developer", "MERN Stack Developer", "Frontend Developer"],
              autoStart: true,
              cursor: "_",
              loop: true,
            }}
          />
          <Fade delay="500" duration="1000">
            <p className='mt-4 text-center lg:text-left'>As an experienced front-end developer, I am proficient in JavaScript, React Js, Redux, Tailwind, HTML,
              and CSS. I am passionate about staying at the front-end of emerging technologies and trends to push
              the boundaries of what is possible in front-end development.</p>
          </Fade>

          <Fade bottom duration="1200">
            <a className='btn btn-success mt-4 text-white lg:btn-md btn-md' href="https://drive.google.com/uc?export=download&id=1nHHEZYDAaBm0TZACWobwluFFSYwLYG-M">
              <BsFillCloudDownloadFill className='mr-1 lg:text-lg text-sm' />
              Download Resume
            </a>
          </Fade>
          <div className='flex gap-5 mt-8'>
            <a className='border-2 rounded-full p-2 hover:border-success hover:text-success' href="https://www.linkedin.com/in/ahmmedrasel-dev/" target='_blank' rel="noreferrer"><FaLinkedinIn className='text-2xl shadow-md' /></a>
            <a className='border-2 rounded-full p-2 hover:border-success hover:text-success' href="https://github.com/ahmmedrasel-dev" target='_blank' rel='noreferrer'><BsGithub className='text-2xl shadow-md' /></a>
            <a className='border-2 rounded-full p-2 hover:border-success hover:text-success' href="https://www.facebook.com/ahmmedraseldev" target='_blank' rel='noreferrer'><BsFacebook className='text-2xl shadow-md' /></a>
          </div>
        </div>
      </div>
      <div className='lg:order-2 order-1'>
        <LottieAnimation
          animationData={animationData}
        />
      </div>
    </div>
  );
};

export default HomeMain;