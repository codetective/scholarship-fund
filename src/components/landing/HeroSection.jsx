import Container from '../../atoms/Container';
import Button from '../../atoms/Button';
import Hero from '../../assets/images/hero.jpg'

export default function HeroSection() {
  return (
    <Container className=''>
      <section className='flex items-center mt-20'>
        <div className='md:w-1/2 flex items-center justify-center pt-[100px] md:pr-10'>
          <div>
            <h1 className='text-6xl font-bold text-[#00563B]'>
            <span className='text-[#FF7900]'>AKSG 2023</span> Educational Intervention Fund 
            </h1>
            <p className='my-8 text-2xl font-medium text-[#01100B]'>
            for Students Living With Disability
            </p>

            <Button className='hover:bg-green-900 md:hover:bg-white md:hover:text-green-500 md:bg-[#FF7900] md:border-[#FF7900] md:text-[#01100B] bg-green-500'>
                  Apply Now!
            </Button>
          </div>
        </div>
        <div className='w-1/2 h-[450px] bg-black flex items-center justify-center rounded-lg overflow-hidden'>
          <img src={Hero} alt="Pastor Umo Eno and Disabled Student" className='object-fit block' />
        </div>
      </section>
      <div className="text-center mt-5">
        <h1 className='text-4xl text-center text-[#00563B]'>Over 1000 people to benefit</h1>
      </div>
    </Container>
  );
}
