import Button from '../../atoms/Button';
import ContainerWrap from '../../atoms/ContainerWrap';
import HStack from '../../atoms/HStack';
export default function HeroSection() {
  return (
    <div>
      <ContainerWrap>
        <section className='flex py-[50px] gap-y-8 flex-col md:flex-row items-center mx-auto'>
          <div className='md:w-1/2 text-center md:text-left w-full flex items-center justify-center '>
            <div className='heading-font'>
              <h1 className='text-4xl md:text-4xl lg:text-5xl font-bold text-[#00563B]'>
                <span className='heading-font text-[#FF7900]'>
                  2023 Akwa Ibom State
                </span>{' '}
                Education Intervention Fund
              </h1>
              <p className='py-6 text-base  text-[#01100B]'>
                For Undergraduate Students With Disability in Higher institution
              </p>
              <HStack spacing='5' className='justify-center md:justify-normal'>
                <Button className='hover:bg-transparent hover:text-orange-500 border-2 bg-[#FF7900] border-[#FF7900] text-white'>
                  Apply Now!
                </Button>

                <Button className='bg-transparent hover:text-white border-2 text-green-600 border-green-800 hover:bg-[#FF7900] '>
                  Check criteria!
                </Button>
              </HStack>
            </div>
          </div>
          <div className='md:w-1/2 w-full h-[450px] flex items-center justify-center rounded-lg overflow-hidden'>
            <img
              src='/about.svg'
              alt='Pastor Umo Eno and Disabled Student'
              className='object-fit block w-full h-full'
            />
          </div>
        </section>
      </ContainerWrap>
    </div>
  );
}
