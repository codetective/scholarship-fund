import { useState } from 'react';
import Container from '../../atoms/Container';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    email: '',
  });
  const { email } = formData;

  function onEmailSubmit(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }
  return (
    <Container>
      <section className='flex min-h-[90vh]'>
        <div className='md:w-1/2 flex items-center justify-center pt-[100px] md:pr-10'>
          <div>
            <h1 className='text-6xl font-bold text-blue-600'>
              Free <span className='text-orange-400'>scholarship</span> for
              every bright student
            </h1>
            <p className='my-8 text-sm'>
              Get free scholarships for every level of education that every
              student who achievement for a bright future you can get it from
              school
            </p>

            <div className='shadow-lg rounded-lg p-2 bg-white flex justify-between'>
              <input
                type='email'
                id='email'
                value={email}
                onChange={onEmailSubmit}
                placeholder='Enter email address'
                className='w-full outline-none focus:ring-0'
              />
              <button
                type='button'
                className='py-3 px-4 rounded-lg bg-blue-600  text-white'
              >
                Submission
              </button>
            </div>
          </div>
        </div>
        <div className='bg-blue-600 w-1/2 hidden md:block rounded-bl-3xl absolute h-full max-h-[90vh] top-0 right-0'></div>
      </section>
    </Container>
  );
}
