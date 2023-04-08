import React from 'react';
import { BiLinkExternal } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa';

const ProjectCard = () => {
  return (
    <div className="card bg-neutral shadow-2xl">
      <figure><img src="https://i.ibb.co/K7V3ZBm/argu-machineries.png" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          Argu Machinaries
          <div className="badge badge-error">NEW</div>
        </h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus commodi animi. Debitis ea, voluptatem natus quia nemo excepturi dolor?</p>
        <div className="card-actions py-4">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className='flex gap-2 '>
          <button className="btn gap-2 btn-warning cursor-pointer">
            <BiLinkExternal />
            Live Preview
          </button>

          <button className="btn gap-2 btn-success">
            <FaGithub />
            Source Code
          </button>
          <button className="btn gap-2 btn-error">
            <FaGithub />
            Server Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;