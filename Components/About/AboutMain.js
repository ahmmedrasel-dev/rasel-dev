import Image from 'next/image';
import React from 'react';
import LottieAnimation from '../Animation/LottieAnimation';
import animationData from '../../public/animation_data/web_development4.json'
import Skills from './Skills';
import { Fade } from 'react-reveal';
import Education from './Education';
const AboutMain = () => {
  return (
    <>
      <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-8'>
        <div>
          <LottieAnimation
            animationData={animationData}
          />
        </div>
        <div>
          <Fade top>
            <h4 className='tracking-[.6rem]'>Who Am I?</h4>
          </Fade>

          <Fade right>
            <div className='bg-error inline-block px-6 py-3 mt-3'><h2 className='tracking-[.5rem] text-white text-2xl uppercase font-bold'>Rasel Ahmmed</h2></div>
          </Fade>

          <div className='flex flex-col gap-4 mt-8'>
            <Fade duration={1000} delay={500}>
              <p>I am a full-stack developer with over 3 years of experience building end-to-end web applications. I have a strong foundation in front-end technologies such as HTML, CSS, and JavaScript, Tailwind, Bootstap and have worked extensively with frameworks like React Js, Next Js, Redux to create intuitive and responsive user interfaces.</p>
            </Fade>

            <Fade duration={3000} delay={600}>
              <p>For back-end technologies, I have Knowledge on Node Js, Php and Laravel. I have experience working with Node.js to build RESTful APIs, integrating with databases such as MySQL and MongoDB, and using tools like Git and Gitlab to manage code and deployment. While I'm still early in my career, I'm eager to learn more about front-end and back-end technologies and to apply my skills to real-world projects. I have also knowledge on programming language in C, and Python.</p>
            </Fade >
            <Fade duration={3000} delay={700}>
              <p>
                Throughout my career, I have developed a deep understanding of full-stack development principles and have been involved in all stages of the software development lifecycle. I am passionate about building scalable and maintainable applications that solve real-world problems and deliver a great user experience."
              </p>
            </Fade>
          </div>
        </div>
      </div>

      <Skills></Skills>
      <Education></Education>
    </>
  );
};

export default AboutMain;