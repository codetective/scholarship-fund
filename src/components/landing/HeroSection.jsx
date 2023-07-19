import Container from "../../atoms/Container";
import Button from "../../atoms/Button";
import Hero from "../../assets/images/hero.jpg";
import Scholar from "../../assets/images/scholar4.jpeg";

export default function HeroSection() {
  return (
    <Container className="">
      <section className="flex px-3 xl:px-0 flex-col md:flex-row items-center mt-20 max-w-screen-lg mx-auto mb-10">
        <div className="md:w-1/2 text-center md:text-left w-full flex items-center mb-10 md:mb-0 justify-center pt-[100px] md:pr-10">
          <div>
            <h1 className="text-6xl font-bold text-[#00563B]">
              <span className="text-[#FF7900]">AKSG 2023</span> Educational
              Intervention Fund
            </h1>
            <p className="my-8 text-2xl font-medium text-[#01100B]">
              For Students Living With Disability
            </p>

            <Button className="hover:bg-green-900 md:hover:bg-white md:hover:text-green-500 md:bg-[#FF7900] md:border-[#FF7900] md:text-[#ffffff] bg-green-500">
              Apply Now!
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-[450px] bg-black flex items-center justify-center rounded-lg overflow-hidden">
          <img
            src={Hero}
            alt="Pastor Umo Eno and Disabled Student"
            className="object-fit block"
          />
        </div>
      </section>

      <div className="bg-[#F9D6C2] py-10">
        <div className="mt-20">
          <h1 className="text-center font-bold text-[#01100B] text-4xl mt-5">
            Scholarship Benefits
          </h1>
          <p className="text-center text-2xl mt-5 font-medium">
            Through the Akwa Ibom State Scholarship Fund, we aim to provide
            financial assistance to
            <br /> deserving students with disabilities, enabling them to pursue
            their dreams and <br /> aspirations in higher education. The
            benefits of this scholarship include:
          </p>
        </div>
        <section className="mt-20 px-3 xl:px-0 max-w-screen-lg mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-[50%] overflow-hidden items-center rounded-lg mt-[50px] mb-5 md:mb-5">
              <img
                src={Scholar}
                alt="Pastor Umo Eno and Disabled Student"
                className=""
              />
            </div>

            <div className="justify-center flex-initial md:ml-[100px] font-medium lg:w-[50%]">
              <div className="mb-5">
                <h3 className="text-[#FF7900] text-[25px]">
                  Tuition Coverage:
                </h3>
                <p className="text-[#01100B] text-[25px]">
                  The scholarship fund covers a significant portion of tuition fees, lightening the financial burden on students and their families.
                </p>
              </div>
              <div className="mb-5">
                <h3 className="text-[#FF7900] text-[25px]">
                  Stipend for Living Expenses:
                </h3>
                <p className="text-[#01100B] text-[25px]">
                  In addition to tuition coverage, selected recipients will receive a stipend to assist with their living expenses, allowing them to focus on their
                  studies.
                </p>
              </div>
              <div>
                <h3 className="text-[#FF7900] text-[25px]">
                  Skill Developmenmt Opportunities:
                </h3>
                <p className="text-[#01100B] text-[25px]">
                  Recipients of the scholarship will have access to various skill development programs, workshops, and training sessions, enhancing their overall personal and professional growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center mt-[60px]">
          <Button className="hover:bg-green-900 md:hover:bg-white md:hover:text-green-500 md:bg-[#FF7900] md:border-[#FF7900] md:text-[#ffffff] bg-green-500">
            Apply Now!
          </Button>
        </div>
      </div>

      <section className="bg-mage mx-auto" style={{backgroundSize: "co"}}>
        <div className="max-w-screen-lg mx-auto">
        <h1 className="text-center font-bold text-[#01100B] text-4xl  pt-10">
          About Scholarship
        </h1>
        <p className="text-[#341901] text-[21px] mt-10 ml-[50px] mr-[50px]">
          We are thrilled to introduce the Akwa Ibom State Scholarship Fund, an
          educational intervention initiative designed specifically for students
          with disabilities pursuing higher education in Akwa Ibom State.
          Approved by the esteemed Governor, Pastor Umo Eno, this scholarship
          fund is a testament to his passion for empowering young future leaders
          and ensuring equal opportunities for all. <br />
          <br /> Inspired by Excellence and Impact We firmly believe that every
          student, regardless of their challenges, has the potential to excel
          and make a lasting impact. The Governor&apos;s unwavering support
          stems from his recognition of the remarkable passion and drive
          exhibited by these young individuals. We are committed to fostering an
          inclusive environment where students with disabilities can thrive
          academically, personally, and professionally.
        </p>
        </div>
      </section>
    </Container>
  );
}
