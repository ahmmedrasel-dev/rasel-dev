import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectMain = () => {
  return (
    <div>
      <h2 className='lg:text-4xl text-3xl text-center text-white font-bold'>My Latest Projects</h2>

      <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-8'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectMain;