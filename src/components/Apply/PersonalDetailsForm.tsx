import React, { FormEventHandler, useRef } from 'react';
import FormGroup from './FormGroup';

function PersonalDetailsForm({
  handleSubmit,
  loading,
}: {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  loading: boolean;
}) {
  const ref = useRef<HTMLInputElement | null>(null);
  const universityPrograms = ['NCE', 'OND', 'ND', 'HND', 'BSC', 'MSC', 'PHD'];

  return (
    <>
      <h1 className='text-black font-semibold text-center text-xl md:text-3xl'>
        Application Form (Personal Information)
      </h1>
      <div className='flex items-center justify-between space-x-1 max-w-screen-md mx-auto mt-10'>
        <div className='py-1 px-3 rounded-full bg-[#00563B] text-white'>
          <p>1</p>
        </div>

        <div className='h-[1px] bg-[#495057]  w-full'></div>

        <div className='py-1 px-3 rounded-full bg-[#D6BFA9] text-[#341901]'>
          <p>2</p>
        </div>

        <div className='h-[1px] bg-[#495057] rounded-full w-full'></div>

        <div className='py-1 px-3 rounded-full bg-[#D6BFA9] text-[#341901]'>
          <p>3</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='bg-[#FBE7D5] text-[#01100B] p-5 w-full text-center mt-10 rounded-lg'>
          <i>
            This form is strictly for <b>STUDENTS</b> with disabilities. Please
            fill out the fields <b>CORRECTLY</b>, you will not be allowed to
            edit this submission! * Only one submission per applicant
          </i>
        </div>

        <div className='mt-5 flex flex-col gap-5 md:flex-row'>
          <FormGroup label={'First name'} name={'firstname'}>
            <input
              type='text'
              id='firstName'
              placeholder='First Name'
              className='py-3 px-8 w-full rounded'
              required
              name='firstName'
            />
          </FormGroup>

          <FormGroup label={'Last name'} name={'lastname'}>
            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Last Name'
              className='py-3 px-8 w-full rounded'
              required
            />
          </FormGroup>
        </div>

        <div className='mt-5 flex flex-col gap-5 md:flex-row'>
          <FormGroup label={'Date of Birth'} name={'dateOfBirth'}>
            <input
              type='text'
              id='dateOfBirth'
              name='dateOfBirth'
              ref={ref}
              onFocus={() => (ref.current!.type = 'date')}
              onBlur={() => (ref.current!.type = 'text')}
              placeholder='Date of Birth'
              className='py-3 px-8 w-full rounded'
              required
            />
          </FormGroup>
          <FormGroup label={'Gender'} name={'gender'}>
            <select
              name='gender'
              id='gender'
              placeholder='Gender'
              className='py-3 px-8 w-full rounded'
              required
              defaultValue={'male'}
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </FormGroup>
        </div>

        <FormGroup label='Email' name='email'>
          <input
            type='email'
            id='email'
            placeholder='email'
            className='py-2 px-8 w-full rounded'
            required
            name='email'
          />
        </FormGroup>
        <FormGroup label='Form of Disability' name='formOfDisability'>
          <input
            type='text'
            id='formOfDisability'
            name='formOfDisability'
            placeholder='Form of Disability'
            className=' py-3 px-8 w-full rounded'
            required
          />
        </FormGroup>

        <FormGroup label='Programme of Study' name='programmeOfStudy'>
          <select
            name='programmeOfStudy'
            id='programmeOfStudy'
            className=' py-3 px-8 w-full rounded'
            required
            defaultValue='NCE'
          >
            {universityPrograms.map((program, index) => (
              <option key={index} value={program}>
                {program}
              </option>
            ))}
          </select>
        </FormGroup>
        <FormGroup name='courseOfStudy' label='Course of Study'>
          <input
            type='text'
            id='courseOfStudy'
            name='courseOfStudy'
            placeholder='Course of Study'
            className=' py-3 px-8 w-full rounded'
            required
          />
        </FormGroup>

        <FormGroup name='lga' label='Local Government Area'>
          <input
            type='text'
            id='lga'
            name='lga'
            placeholder='LGA'
            className=' py-3 px-8 w-full rounded'
            required
          />
        </FormGroup>

        <div className='mt-10 flex justify-between items-center gap-2 flex-col md:flex-row'>
          {/* <button
          onClick={() => navigate(-1)}
          className='text-center w-full md:w-auto border border-[#FF7900] text-[#FF7900] py-3 px-20 rounded'
        >
          Back
        </button> */}
          <div></div>
          <button
            type='submit'
            className='text-center w-full md:w-auto border border-[#FF7900] bg-[#FF7900] text-white py-3 px-20 rounded'
          >
            {loading ? <i>'subbmitting...'</i> : 'Next'}
          </button>
        </div>
      </form>
    </>
  );
}

export default PersonalDetailsForm;
