import ContainerWrap from '../../atoms/ContainerWrap';

export default function GovernorSection() {
  return (
    <section className='bg-[#C3DFB3] relative'>
      <ContainerWrap>
        <div className='md:relative md:pt-0 flex flex-col justify-center items-center pt-10'>
          <div className='md:h-[300px] md:w-[300px] w-[80%] h-[80%] -top-[50%] md:absolute md:-top-[50%] md:right-0 lg:left-[20px] md:left-0 left-0'>
            <img
              src='/governor.svg'
              alt='His Excellency Pastor Umo Eno'
              className='w-full h-full lg:w-auto'
            />
          </div>
          <div className='md:h-[150px] lg:w-[65%]  md:w-[53%] ml-auto flex items-center'>
            <p className='text-[#01100B] md:text-left text-center block mx-auto text-xl md:py-0 py-5 font-medium heading-font md:w-full w-[70%] '>
              A compassionate Governor creating an atmosphere of Inclusive
              Leadership...
            </p>
          </div>
        </div>
      </ContainerWrap>
    </section>
  );
}
