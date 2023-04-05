import React from 'react';
import styles from '../Components/HomeMain/HomeMain.module.css'
import Head from 'next/head';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/router';

const login = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Check if email and password are provided
    if (!email || !password) {
      toast.error('Please provide email and password');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email, password
      })
      console.log(response)
      if (response.status === 200) {
        toast.success(response.data.message);
        localStorage.setItem('access_token', response.data.accessToken)
        localStorage.setItem('refresh_token', response.data.refreshToken)
        form.reset();
        router.push('http://localhost:3000')
      }
    } catch (error) {
      toast.error(error.message);
    }


  }
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Exparties Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='lg:h-[100vh] lg:overflow-hidden overflow-scroll'>
        <div className='lg:max-w-screen-xl w-full p-4 mx-auto'>
          <div className={`${styles.container}`}>
            <div className={`${styles.fillter_bg}`}></div>
          </div>

          <div className="hero py-8 relative z-50">
            <div className="hero-content flex-col">
              <div className="card shadow-2xl bg-neutral border-2">
                <form onSubmit={handleSubmit} className="card-body p-4 lg:p-8 lg:w-[500px] w-full">
                  <div className="form-control">
                    <label className="label">
                      <h1 className='lg:text-3xl text-lg font-bold text-white'>Welcome Back</h1>
                    </label>
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
                    <button className="btn border-0 btn-success text-white" type='submit'>Login</button>
                  </div>
                  <p className='text-center'>New to Rasel Dev? <Link href={'/register'}><span className='text-error cursor-pointer font-bold'>Create New Account</span></Link></p>
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

export default login;