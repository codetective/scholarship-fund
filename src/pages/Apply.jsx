import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
import { MdFileUpload } from 'react-icons/md';
import ContainerWrap from '../atoms/ContainerWrap';

export default function Apply() {
  const navigate = useNavigate();
  const ref = useRef();
  const [page, setPage] = useState('page-1');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    formOfDisability: '',
    lga: '',
    courseOfStudy: '',
    programmeOfStudy: '',
    certificateOfOrigin: '',
    birthCertificate: '',
    admissionLetter: '',
    feeSchedule: '',
    letterOfAttestation: '',
    feeReceipt: '',
    picture: '',
  });

  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    formOfDisability,
    programmeOfStudy,
    lga,
    courseOfStudy,
    certificateOfOrigin,
    birthCertificate,
    admissionLetter,
    feeSchedule,
    letterOfAttestation,
    feeReceipt,
    picture,
  } = formData;

  const universityPrograms = ['NCE', 'OND', 'ND', 'HND', 'BSC', 'MSC', 'PHD'];

  function onChange(e) {
    // if (e.target.value) {
    //   setFormData({
    //     ...formData,
    //     [e.target.id]: e.target.value,
    //   });
    // } else if (e.target.files) {
    //   setFormData({
    //     ...formData,
    //     [e.target.id]: e.target.files[0],
    //   });
    // }
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    setPage('page-2');
    window.scroll(0, 0);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
  }
  useEffect(() => {
    function toTop() {
      window.scrollTo(0, 0);
    }
    toTop();
  }, []);

  return (
    <ContainerWrap>
      <section className='max-w-screen-lg mx-auto my-10 px-3 lg:px-0'>
        {page === 'page-1' && (
          <div>
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

            <form onSubmit={onSubmit}>
              <div className='bg-[#FBE7D5] text-[#01100B] p-5 w-full text-center mt-10 rounded-lg'>
                <p>
                  This form is strictly for people with disabilities. Please
                  fill out the fields correctly to enable us process your
                  application promptly.
                </p>
              </div>

              <div className='mt-5 flex flex-col gap-5 md:flex-row'>
                <input
                  type='text'
                  id='firstName'
                  value={firstName}
                  onChange={onChange}
                  placeholder='First Name'
                  className='py-2 px-8 w-full rounded'
                  required
                />
                <input
                  type='text'
                  id='lastName'
                  value={lastName}
                  onChange={onChange}
                  placeholder='Last Name'
                  className='py-2 px-8 w-full rounded'
                  required
                />
              </div>

              <div className='mt-5 flex flex-col gap-5 md:flex-row'>
                <input
                  type='text'
                  id='dateOfBirth'
                  value={dateOfBirth}
                  onChange={onChange}
                  ref={ref}
                  onFocus={() => (ref.current.type = 'date')}
                  onBlur={() => (ref.current.type = 'text')}
                  placeholder='Date of Birth'
                  className='py-2 px-8 w-full rounded'
                  required
                />
                <select
                  name='gender'
                  id='gender'
                  value={gender}
                  onChange={onChange}
                  placeholder='Gender'
                  className='py-2 px-8 w-full rounded'
                  required
                >
                  <option value='' selected disabled className='text-gray-500'>
                    Gender
                  </option>
                  <option value='male'>Male</option>
                  <option value='male'>Female</option>
                </select>
              </div>

              <input
                type='text'
                id='formOfDisability'
                value={formOfDisability}
                onChange={onChange}
                placeholder='Form of Disability'
                className='mt-5 py-2 px-8 w-full rounded'
                required
              />

              <select
                name='programmeOfStudy'
                id='programmeOfStudy'
                value={programmeOfStudy}
                onChange={onChange}
                className='mt-5 py-2 px-8 w-full rounded'
                required
              >
                <option value='' selected disabled>
                  Programme of Study
                </option>
                {universityPrograms.map((program, index) => (
                  <option key={index} value={program}>
                    {program}
                  </option>
                ))}
              </select>
              <input
                type='text'
                id='courseOfStudy'
                value={courseOfStudy}
                onChange={onChange}
                placeholder='Course of Study'
                className='mt-5 py-2 px-8 w-full rounded'
                required
              />
              <input
                type='text'
                id='lga'
                value={lga}
                onChange={onChange}
                placeholder='LGA'
                className='mt-5 py-2 px-8 w-full rounded'
                required
              />
              <div className='mt-10 flex justify-between items-center gap-2 flex-col md:flex-row'>
                <button
                  onClick={() => navigate(-1)}
                  className='text-center w-full md:w-auto border border-[#FF7900] text-[#FF7900] py-3 px-20 rounded'
                >
                  Back
                </button>
                <button
                  type='submit'
                  className='text-center w-full md:w-auto border border-[#FF7900] bg-[#FF7900] text-white py-3 px-20 rounded'
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {page === 'page-2' && (
          <div>
            <h1 className='text-black font-semibold text-3xl'>
              Application Form (Documentation)
            </h1>
            <div className='flex items-center justify-between space-x-1 max-w-screen-md mx-auto mt-10'>
              <div className='py-3 px-3 rounded-full bg-[#00563B] text-white'>
                <TiTick />
              </div>

              <div className='h-[1px] bg-[#495057]  w-full'></div>

              <div className='py-1 px-3 rounded-full bg-[#00563B] text-white'>
                <p>2</p>
              </div>

              <div className='h-[1px] bg-[#495057] rounded-full w-full'></div>

              <div className='py-1 px-3 rounded-full bg-[#D6BFA9] text-[#341901]'>
                <p>3</p>
              </div>
            </div>
            <form onSubmit={onFormSubmit}>
              <div className='bg-[#FBE7D5] text-[#01100B] p-5 w-full text-center mt-10 mb-2 rounded-lg'>
                <p>
                  This form is strictly for people with disabilities. Please
                  fill out the fields correctly to enable us process your
                  application promptly.
                </p>
              </div>
              <p className='text-[#FF7900] font-medium mb-10'>
                Max limit of uploaded document is 2MB
              </p>

              {/* Item */}
              <label htmlFor='certificateOfOrigin'>
                Upload Your Local Government Certificate Of Origin
              </label>
              <div className='border rounded w-full py-2 px-8 mt-2 mb-5'>
                <input
                  type='file'
                  id='certificateOfOrigin'
                  value={certificateOfOrigin}
                  onChange={onChange}
                  className='hidden'
                  required
                />

                <label
                  htmlFor='certificateOfOrigin'
                  className='text-[#95A48C] flex items-center gap-2 font-medium'
                >
                  <MdFileUpload size={25} />
                  <span>Use a PDF And JPEG</span>
                </label>
                <p className='text-sm text-[#95A48C]'>{certificateOfOrigin}</p>
              </div>

              {/* Item */}
              <label htmlFor='birthCertificate'>
                Birth Certificate/Age Declaration
              </label>
              <div className='border rounded w-full py-2 px-8 mt-2 mb-5'>
                <input
                  type='file'
                  id='birthCertificate'
                  value={birthCertificate}
                  onChange={onChange}
                  className='hidden'
                  required
                />
                <label
                  htmlFor='birthCertificate'
                  className='text-[#95A48C] flex items-center gap-2 font-medium'
                >
                  <MdFileUpload size={25} />
                  <span>Use a PDF And JPEG</span>
                </label>
                <p className='text-sm text-[#95A48C]'>{birthCertificate}</p>
              </div>

              {/* Item */}
              <label htmlFor='admissionLetter'>
                Jamb Admission Letter/School Notification Admission Letter
              </label>
              <div className='border rounded w-full py-2 px-8 mt-2 mb-5'>
                <input
                  type='file'
                  id='admissionLetter'
                  value={admissionLetter}
                  onChange={onChange}
                  className='hidden'
                  required
                />
                <label
                  htmlFor='admissionLetter'
                  className='text-[#95A48C] flex items-center gap-2 font-medium'
                >
                  <MdFileUpload size={25} />
                  <span>Use A PDF And JPEG</span>
                </label>
                <p className='text-sm text-[#95A48C]'>{admissionLetter}</p>
              </div>

              {/* Item */}
              <label htmlFor='feeSchedule'>
                Schedule Of School Fees Payment
              </label>
              <div className='border rounded w-full py-2 px-8 mt-2 mb-5'>
                <input
                  type='file'
                  id='feeSchedule'
                  value={feeSchedule}
                  onChange={onChange}
                  className='hidden'
                  required
                />
                <label
                  htmlFor='feeSchedule'
                  className='text-[#95A48C] flex items-center gap-2 font-medium'
                >
                  <MdFileUpload size={25} />
                  <span>Use A PDF And JPEG</span>
                </label>
                <p className='text-sm text-[#95A48C]'>{feeSchedule}</p>
              </div>

              {/* Item */}
              <label htmlFor='letterOfAttestation'>
                Letter Of Attestation By Department HOD
              </label>
              <div className='border rounded w-full py-2 px-8 mt-2 mb-5'>
                <input
                  type='file'
                  id='letterOfAttestation'
                  value={letterOfAttestation}
                  onChange={onChange}
                  className='hidden'
                  required
                />
                <label
                  htmlFor='letterOfAttestation'
                  className='text-[#95A48C] flex items-center gap-2 font-medium'
                >
                  <MdFileUpload size={25} />
                  <span>Use A PDF And JPEG</span>
                </label>
                <p className='text-sm text-[#95A48C]'>{letterOfAttestation}</p>
              </div>

              {/* Item */}
              <label htmlFor='feeReceipt'>
                School Fees Payment Receipt (Session/Semester Pressiding)
              </label>
              <div className='border rounded w-full py-2 px-8 mt-2 mb-5'>
                <input
                  type='file'
                  id='feeReceipt'
                  value={feeReceipt}
                  onChange={onChange}
                  className='hidden'
                  required
                />
                <label
                  htmlFor='feeReceipt'
                  className='text-[#95A48C] flex items-center gap-2 font-medium'
                >
                  <MdFileUpload size={25} />
                  <span>Use A PDF And JPEG</span>
                </label>
                <p className='text-sm text-[#95A48C]'>{feeReceipt}</p>
              </div>

              {/* Item */}
              <label htmlFor='picture'>
                Full Picture Of Beneficiary Showing The Type Of Disability
              </label>
              <div className='border rounded w-full py-2 px-8 mt-2 mb-5'>
                <input
                  type='file'
                  id='picture'
                  value={picture}
                  onChange={onChange}
                  className='hidden'
                  required
                />
                <label
                  htmlFor='picture'
                  className='text-[#95A48C] flex items-center gap-2 font-medium'
                >
                  <MdFileUpload size={25} />
                  <span>Use A PDF And JPEG</span>
                </label>
                <p className='text-sm text-[#95A48C]'>{picture}</p>
              </div>
              <div className='mt-10 flex gap-2 justify-between flex-col md:flex-row items-center'>
                <button
                  onClick={() => {
                    setPage('page-1');
                    window.scroll(0, 0);
                  }}
                  className='text-center w-full md:w-auto border border-[#FF7900] text-[#FF7900] py-3 px-20 rounded'
                >
                  Back
                </button>
                <button
                  // onClick={onFormSubmit}
                  type='submit'
                  className='text-center w-full md:w-auto border border-[#FF7900] bg-[#FF7900] text-white py-3 px-20 rounded'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </ContainerWrap>
  );
}
