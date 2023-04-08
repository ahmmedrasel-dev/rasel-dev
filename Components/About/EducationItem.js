import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';

const EducationItem = ({ year, degree, institute }) => {
  return (
    <div className='flex education bg-accent rounded-lg shadow-md p-8'>
      <FaUserGraduate className='text-5xl bg-success p-2 rounded-full' />
      <div className='ml-4'>
        <p className='lg:text-lg text-sm'>{year}</p>
        <h3 className='lg:text-xl text-md'>{degree}</h3>
        <h4 className='lg:text-lg text-lg'>{institute}</h4>
      </div>
    </div>
  );
};

export default EducationItem;