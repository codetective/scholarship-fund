import React from 'react';
import ContainerWrap from '../../atoms/ContainerWrap';
import HStack from '../../atoms/HStack';
import { GoChecklist } from 'react-icons/go';

function CriteriaListItem({ children }) {
  return (
    <li className='flex gap-2 items-start text-[#01100B] text-md md:text-lg  mb-2'>
      <img src='check.svg' alt='check' width={20} />

      <span>{children}</span>
    </li>
  );
}

const criteriaList = [
  'Must be a Student (indigenous or not) in a Tertiary Institution in Akwa Ibom',
  'Must have verifiable document to prove Studentship',
  'Must have Local Government of Origin Document',
  'Must be a Student with Disability with verifiable proof',
  'Must have corresponding info across all submitted documents and credentials',
  'Applicants must have uploaded proof of disability and other required documents',
];

export default function CriteriaSection() {
  return (
    <section className='py-20 text-[#01100B]' id='criteria'>
      <ContainerWrap>
        <div className='flex flex-col items-start md:flex-row gap-5'>
          <div className='w-full md:w-1/2'>
            <HStack spacing='2'>
              <GoChecklist className='text-3xl' />
              <h1 className='font-bold text-[#01100B] text-2xl md:text-3xl'>
                Criteria for Fund
              </h1>
            </HStack>
            <p className='py-2 text-md w-full md:w-[80%] md:max-w-[400px]'>
              Only candidates who meet the following criteria are eligible for
              the education fund:
            </p>
          </div>
          <div className='w-full md:w-1/2'>
            <ul className='flex flex-col gap-3'>
              {criteriaList.map((l, i) => (
                <CriteriaListItem key={i}>{l}</CriteriaListItem>
              ))}
            </ul>
          </div>
        </div>
      </ContainerWrap>
    </section>
  );
}

//  <section className='py-20 text-[#01100B]'>
//    <ContainerWrap>
//      <div className='mx-auto flex flex-col gap-10 lg:flex-row'>
//        <div className=''>
//          <h1 className='text-center font-semibold text-4xl mb-5'>
//            Criteria for Fund
//          </h1>
//          <p className='text-center'>
//            Eligibility criteria for beneficiaries for beneficiaries of His
//            Excellency, Umo Eno 2023 students with disabilities education
//            intervention funds.
//          </p>
//          <div className='mt-5'>
//            <ul>
//              <li className='flex gap-2 items-center text-[#01100B] text-sm mb-2'>
//                <img src='check.svg' alt='check' />
//                <span>
//                  Must be a Student in a Tertiary Institution in Akwa Ibom
//                </span>
//              </li>
//              <li className='flex gap-2 items-center text-[#01100B] text-sm mb-2'>
//                <img src='check.svg' alt='check' />
//                <span>Must have verifiable document to prove Studentship</span>
//              </li>
//              <li className='flex gap-2 items-center text-[#01100B] text-sm mb-2'>
//                <img src='check.svg' alt='check' />
//                <span>Must Submit Local Government of Origin Document</span>
//              </li>
//              <li className='flex gap-2 items-center text-[#01100B] text-sm mb-2'>
//                <img src='check.svg' alt='check' />
//                <span>
//                  Must be a Student with Disability with verifiable proof
//                </span>
//              </li>
//              <li className='flex gap-2 items-center text-[#01100B] text-sm mb-2'>
//                <img src='check.svg' alt='check' />
//                <span>
//                  Must have corresponding info across all Submitted Documents and
//                  School Credentials
//                </span>
//              </li>
//              <li className='flex gap-2 items-center text-[#01100B] text-sm'>
//                <img src='check.svg' alt='check' />
//                <span>Applicants must have uploaded proof of disability</span>
//              </li>
//            </ul>
//          </div>
//        </div>
//        <div className='lg:-translate-y-[20%] w-full md:w-auto'>
//          <img
//            src='/criteria.svg'
//            alt='Pastor Umo ENo with student'
//            className='w-full'
//          />
//        </div>
//      </div>
//    </ContainerWrap>
//  </section>;
