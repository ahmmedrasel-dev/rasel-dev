import React from 'react';
import { FaBootstrap, FaCaretRight, FaChrome, FaGithub, FaHtml5, FaLaravel, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa';
import TypewriterComponent from 'typewriter-effect';
import { SiCss3, SiExpress, SiFigma, SiFirebase, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiTailwindcss, SiVercel } from 'react-icons/si'
import { Fade } from 'react-reveal';
import styles from './about.module.css';

const Skills = () => {
  return (
    <div className='mt-20'>
      <h2 className='text-white text-5xl'>I'm Specialized in</h2>
      <div className='flex items-center ml-5 gap-2'>
        <FaCaretRight className='text-3xl font-bold' />
        <TypewriterComponent
          options={{
            strings: ['Frontend Development', 'Backend Development'],
            autoStart: true,
            cursor: "_",
            loop: true,
          }}
        />
      </div>

      <div className='py-10 border-b'>
        <h2 className={`text-white text-2xl ${styles.sub_title}`}>Frontend Development:</h2>
        <div className='grid grid-cols-8 mt-4'>
          <Fade Top duration="1000" delay="1000">
            <div className='flex items-center gap-2 text-xl'>
              <SiJavascript />
              <span>Javascript</span>
            </div>
          </Fade>
          <Fade Top duration="1000" delay="1100">
            <div className='flex items-center gap-2 text-xl'>
              <FaReact />
              <span>React Js</span>
            </div>
          </Fade>
          <Fade Top duration="1000" delay="1200">
            <div className='flex items-center gap-2 text-xl'>
              <SiNextdotjs />
              <span>Next Js</span>
            </div>
          </Fade>
          <Fade Top duration="1000" delay="1300">
            <div className='flex items-center gap-2 text-xl'>
              <FaHtml5 />
              <span>Html5</span>
            </div>
          </Fade>
          <Fade Top duration="1000" delay="1400">
            <div className='flex items-center gap-2 text-xl'>
              <SiCss3 />
              <span>CSS3</span>
            </div>
          </Fade>
          <Fade Top duration="1000" delay="1500">
            <div className='flex items-center gap-2 text-xl'>
              <FaBootstrap />
              <span>Bootstrap</span>
            </div>
          </Fade>
          <Fade Top duration="1000" delay="1500">
            <div className='flex items-center gap-2 text-xl'>
              <SiTailwindcss />
              <span>Tailwind</span>
            </div>
          </Fade>
          <Fade Top duration="1000" delay="1700">
            <div className='flex items-center gap-2 text-xl'>
              <SiFirebase />
              <span>Firebase</span>
            </div>
          </Fade>
        </div>
      </div>

      <div className='py-10 border-b'>
        <h2 className={`text-white text-2xl ${styles.sub_title}`}>Backend Development:</h2>
        <div className='grid grid-cols-8 mt-4'>
          <Fade duration="1000" delay="1500">
            <div className='flex items-center gap-2 text-xl'>
              <FaNodeJs />
              <span>Node Js</span>
            </div>
          </Fade>
          <Fade duration="1000" delay="1500">
            <div className='flex items-center gap-2 text-xl'>
              <SiExpress />
              <span>Express Js</span>
            </div>
          </Fade>
          <Fade duration="1000" delay="1500">
            <div className='flex items-center gap-2 text-xl'>
              <SiNextdotjs />
              <span>Next Js</span>
            </div>
          </Fade>
          <Fade duration="1000" delay="1500">
            <div className='flex items-center gap-2 text-xl'>
              <FaPhp />
              <span>Php</span>
            </div>
          </Fade>
          <Fade duration="1000" delay="1500">
            <div className='flex items-center gap-2 text-xl'>
              <FaLaravel />
              <span>Laravel</span>
            </div>
          </Fade>
          <Fade duration="1000" delay="1500">
            <div className='flex items-center gap-2 text-xl'>
              <SiMongodb />
              <span>Mongodb</span>
            </div>
          </Fade>
          <Fade duration="1000" delay="1500">
            <div className='flex items-center gap-2 text-xl'>
              <SiMysql />
              <span>Mysql</span>
            </div>
          </Fade>
          <Fade duration="1000" delay="1500">
            <div className='flex items-center gap-2 text-xl'>
              <SiFirebase />
              <span>Firebase</span>
            </div>
          </Fade>
        </div>
      </div>

      <div className='py-10'>
        <h2 className={`text-white text-2xl ${styles.sub_title}`}>Tools</h2>
        <div className='grid grid-cols-8 mt-4'>
          <Fade duration="1000" delay="1600">
            <div className='flex items-center gap-2 text-xl'>
              <FaGithub />
              <span>Github</span>
            </div>
          </Fade>
          <Fade duration="1000" delay="1600">
            <div className='flex items-center gap-2 text-xl'>
              <FaChrome />
              <span>Dev Tools</span>
            </div>
          </Fade>
          <Fade duration="1000" delay="1600">
            <div className='flex items-center gap-2 text-xl'>
              <SiNextdotjs />
              <span>Netlify</span>
            </div>
          </Fade>
          <Fade duration="1000" delay="1600">
            <div className='flex items-center gap-2 text-xl'>
              <SiVercel />
              <span>Vercel</span>
            </div>
          </Fade>
          <Fade duration="1000" delay="1600">
            <div className='flex items-center gap-2 text-xl'>
              <SiPostman />
              <span>Postman</span>
            </div>
          </Fade>
          <Fade duration="1000" delay="1600">
            <div className='flex items-center gap-2 text-xl'>
              <SiFigma />
              <span>Figma</span>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Skills;