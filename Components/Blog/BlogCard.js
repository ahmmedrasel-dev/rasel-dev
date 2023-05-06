import Link from 'next/link';
import React from 'react';

const BlogCard = () => {
  return (
    <Link href={`/blog`}>
      <div className="bg-[#1a1a7cae] shadow-2xl">
        <figure><img src="https://i.ibb.co/K7V3ZBm/argu-machineries.png" alt="Shoes" /></figure>
        <div className="p-4">
          <h2 className="card-title">
            How to become a Fullstack web developer?
          </h2>
          <p className='text-sm mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus commodi animi. Debitis ea, voluptatem natus quia nemo excepturi dolor?</p>
          <div className='py-6'>
            <hr></hr>
          </div>
          <div className='flex justify-between '>
            <small>Rasel Ahmmed</small>
            <small>Nov 27, 2022</small>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;