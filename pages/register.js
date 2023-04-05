import Head from 'next/head';
import React from 'react';
import styles from '../Components/HomeMain/HomeMain.module.css'
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const register = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email');
      return;
    }

    // Validate name
    if (!name.trim()) {
      toast.error('Please enter your name');
      return;
    }

    // Validate password
    if (password.length < 8) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    // Send data to server
    try {
      const response = await axios.post('http://localhost:3000/api/register', {
        name, email, password
      })

      if (response.status === 200) {
        toast.success(response.data.message);
        form.reset();
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Exparties Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='lg:h-[100vh] lg:overflow-hidden overflow-scroll'>
        <div className='lg:max-w-screen-xl w-full p-4 mx-auto'>
          <div className={`${styles.container}`}>
            <div className={`${styles.fillter_bg}`}></div>
          </div>

          <div className="hero lg:py-8 relative z-50">
            <div className="hero-content flex-col">
              <div className="card shadow-2xl bg-neutral border-2">
                <form onSubmit={handleSubmit} className="card-body p-4 lg:p-8 lg:w-[500px] w-full">
                  <div className="form-control">
                    <label className="label">
                      <h1 className='lg:text-3xl text-lg font-bold text-white'>Register New Account!</h1>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn border-0 btn-success text-white" type='submit'>Register</button>
                  </div>
                  <p className='text-center'>Alreay Have an Account? <Link href={'/login'}><span className='text-error cursor-pointer font-bold'>Login</span></Link></p>
                </form>
              </div>
            </div>
          </div>

          <div className={`${styles.container2}`}>
            <div className={`${styles.fillter_bg2}`}></div>
          </div>
        </div>
      </main>

    </>
  );
};

export default register;