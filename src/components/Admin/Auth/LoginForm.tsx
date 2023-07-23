import React from 'react';
import ContainerWrap from '../../../atoms/ContainerWrap';
import HStack from '../../../atoms/HStack';
import { useAuth } from '../../../contexts/AuthContext';

function LoginForm() {
  const { error, login, loading } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //make login call here
    login!(email, password);
  };

  return (
    <div className='h-screen w-screen bg-gray-50'>
      <ContainerWrap>
        <div className='h-full w-full flex flex-col items-center justify-center'>
          <div className=' block max-w-md rounded-lg bg-white px-6 py-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
            <HStack
              spacing='5'
              className='md:text-xl text-lg justify-center font-bold pb-10'
            >
              <img
                src='/logo.svg'
                loading='lazy'
                alt='logo'
                width={48}
                height={48}
                className='cursor-pointer z-[100]'
              />
              <h1>AKS Education Fund</h1>
            </HStack>
            <div className='pb-4 text-center font-semibold'>
              <h2>Admin Login</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='relative mb-6'>
                <label htmlFor='email'>Email address</label>
                <input
                  type='email'
                  id='email'
                  placeholder='email'
                  className='py-2 px-8 w-full rounded'
                  required
                />
              </div>
              <div className='relative mb-6'>
                <label htmlFor='email'>Password</label>
                <input
                  type='password'
                  id='password'
                  placeholder='password'
                  className='py-2 px-8 w-full rounded'
                  required
                />
              </div>
              {error && (
                <p className='text-red-500 text-center py-4 font-bold'>
                  {error}
                </p>
              )}
              <button
                type='submit'
                className='bg-orange-500 inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  '
                data-te-ripple-init
                data-te-ripple-color='light'
                disabled={loading}
              >
                {loading ? 'loading' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </ContainerWrap>
    </div>
  );
}

export default LoginForm;
