import React from 'react';
import ContainerWrap from '../../atoms/ContainerWrap';

export default function AboutSection() {
  return (
    <section
      id='about'
      className="py-20 bg-[url('/scholar2.svg')] mx-auto"
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <ContainerWrap>
        <div className='mx-auto'>
          <h1 className='text-center font-bold text-[#01100B] text-2xl md:text-3xl'>
            About Scheme
          </h1>
          <p className='text-[#341901] md:text-center text-base md:text-xl mt-10 '>
            We are thrilled to introduce the Akwa Ibom State Student
            Intervention Fund, an educational intervention initiative designed
            specifically for students with disabilities pursuing higher
            education in Akwa Ibom State. Approved by the esteemed Governor,
            Pastor Umo Eno, this scholarship fund is a testament to his passion
            for empowering young future leaders and ensuring equal opportunities
            for all.
            <br />
            <br />
            Inspired by Excellence and Impact
            <br />
            <br />
            We firmly believe that every student, regardless of their
            challenges, has the potential to excel and make a lasting impact.
            The Governor&apos;s unwavering support stems from his recognition of
            the remarkable passion and drive exhibited by these young
            individuals. We are committed to fostering an inclusive environment
            where students with disabilities can thrive academically,
            personally, and professionally.
          </p>
        </div>
      </ContainerWrap>
    </section>
  );
}
