import React from 'react';
import { FaBootstrap, FaCaretRight, FaChrome, FaGithub, FaHtml5, FaLaravel, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa';
import TypewriterComponent from 'typewriter-effect';
import { SiCss3, SiExpress, SiFigma, SiFirebase, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiTailwindcss, SiVercel } from 'react-icons/si'

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

      <div className='mt-10'>
        <h2 className='text-white text-2xl'>Frontend Development:</h2>
        <div className='grid grid-cols-8 mt-4'>
          <div className='flex items-center gap-2 text-xl'>
            <SiJavascript />
            <span>Javascript</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <FaReact />
            <span>React Js</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <SiNextdotjs />
            <span>Next Js</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <FaHtml5 />
            <span>Html5</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <SiCss3 />
            <span>CSS3</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <FaBootstrap />
            <span>Bootstrap</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <SiTailwindcss />
            <span>Tailwind</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <SiFirebase />
            <span>Firebase</span>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <h2 className='text-white text-2xl'>Backend Development:</h2>
        <div className='grid grid-cols-8 mt-4'>
          <div className='flex items-center gap-2 text-xl'>
            <FaNodeJs />
            <span>Node Js</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <SiExpress />
            <span>Express Js</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <SiNextdotjs />
            <span>Next Js</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <FaPhp />
            <span>Php</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <FaLaravel />
            <span>Laravel</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <SiMongodb />
            <span>Mongodb</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <SiMysql />
            <span>Mysql</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <SiFirebase />
            <span>Firebase</span>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <h2 className='text-white text-2xl'>Tools</h2>
        <div className='grid grid-cols-8 mt-4'>
          <div className='flex items-center gap-2 text-xl'>
            <FaGithub />
            <span>Github</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <FaChrome />
            <span>Dev Tools</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <SiNextdotjs />
            <span>Netlify</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <SiVercel />
            <span>Vercel</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <SiPostman />
            <span>Postman</span>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <SiFigma />
            <span>Figma</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Skills;