import React from 'react';
import BlogCard from './BlogCard';

const BlogMain = () => {
  return (
    <div>
      <h2 className='lg:text-4xl text-3xl text-center text-white font-bold'>My Latest Blogs</h2>

      <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 mt-10'>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
      </div>
    </div>
  );
};

export default BlogMain;