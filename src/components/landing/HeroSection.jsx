import Container from '../../atoms/Container';
import Button from '../../atoms/Button';
import Hero from '../../assets/images/hero.jpg';
import Scholar from '../../assets/images/scholar.jpg';

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

            <Button className='hover:bg-green-900 md:hover:bg-white md:hover:text-green-500 md:bg-[#FF7900] md:border-[#FF7900] md:text-[#ffffff] bg-green-500'>
                  Apply Now!
            </Button>
          </div>
        </div>
        <div className='w-1/2 h-[450px] bg-black flex items-center justify-center rounded-lg overflow-hidden'>
          <img src={Hero} alt="Pastor Umo Eno and Disabled Student" className='object-fit block' />
        </div>
      </section>
      <div className="text-center mt-5 mb-15">
        <h1 className='text-4xl text-center text-[#00563B]'>Over 1000 people to benefit</h1>
      </div>
      <div className='mt-20'>
        <h1 className="text-center font-bold text-[#01100B] text-4xl mt-5">Scholarship Benefits</h1>
        <p className='text-center text-2xl mt-5 font-medium'>Through the Akwa Ibom State Scholarship Fund, we aim to provide financial assistance to<br /> deserving students with disabilities, enabling them to pursue their dreams and <br /> aspirations in higher education. The benefits of this scholarship include:</p>
      </div>
      <section className='mt-20 mx-20'>
        <div className='flex'>
          <div className='w-[50%] items-center rounded-lg mt-[50px]'>
            <img src={Scholar} alt="Pastor Umo Eno and Disabled Student" className='' />
          </div>

          <div  className='justify-center flex-initial ml-[100px] font-medium w-[50%]'>
            <div>
              <h3 className='text-[#FF7900] text-[25px]'>Tuition Coverage:</h3>
              <p className='text-[#01100B] text-[25px]'>The scholarship fund covers a significant<br /> portion of tuition fees, lightening the financial<br /> burden on students and their families.</p>
            </div>
            <div>
              <h3 className='text-[#FF7900] text-[25px]'>Stipend for Living Expenses:</h3>
              <p className='text-[#01100B] text-[25px]'>In addition to tuition coverage, selected<br /> recipients will receive a stipend to assist with<br /> their living expenses, allowing them to focus on their studies.</p>
            </div>
            <div>
              <h3 className='text-[#FF7900] text-[25px]'>Skill Developmenmt Opportunities:</h3>
              <p className='text-[#01100B] text-[25px]'>Recipients of the scholarship will have access<br /> to various skill development programs, <br />workshops, and training sessions, enhancing<br /> their overall personal and professional growth.</p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center mt-[60px]'>
          <Button className='hover:bg-green-900 md:hover:bg-white md:hover:text-green-500 md:bg-[#FF7900] md:border-[#FF7900] md:text-[#ffffff] bg-green-500'>
                  Apply Now!
            </Button>
      </div>

      <section>
        
      </section>
    </Container>
  );
}
