import React from 'react';
import EducationItem from './EducationItem';
import { Fade } from 'react-reveal';

const Education = () => {
  return (
    <div className='lg:max-w-7xl max-w-xl lg:mx-auto mx-4 my-8'>
      <h2 className='lg:text-4xl text-3xl text-center text-white font-bold'>My Education & Courses</h2>

      <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-8'>
        <Fade duration="1300">
          <EducationItem
            year="2022-2023"
            degree="Web Development with Jhankar Mahmud"
            institute="Programming Hero"
          />
        </Fade>

        <Fade duration="1300">
          <EducationItem
            year="2021-2022"
            degree="Professional Web Development"
            institute="Creative II institute"
          />
        </Fade>

        <Fade duration="1300">
          <EducationItem
            year="2011-2015"
            degree="Bachelor of Business Administration"
            institute="Daffodil International University"
          />
        </Fade>

        <Fade duration="1300">
          <EducationItem
            year="2008-2010"
            degree="Higher Secondary School Certificate"
            institute="Adhapak Abdul Majid College."
          />
        </Fade>


      </div>
    </div>
  );
};

export default Education;