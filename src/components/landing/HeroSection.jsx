// import Container from '../../atoms/Container';
import Button from "../../atoms/Button";
// import Hero from "../../assets/images/hero.jpg";
// import Scholar from "../../assets/images/scholar4.jpeg";

export default function HeroSection() {
  return (
    <section>
      <section className="flex px-3 xl:px-0 flex-col md:flex-row items-center md:mt-20 max-w-[1100px] mx-auto mb-10">
        <div className="md:w-1/2 text-center md:text-left w-full flex items-center mb-10 md:mb-0 justify-center pt-[100px] md:pr-10">
          <div className="heading-font">
            <h1 className="text-5xl md:text-6xl font-bold text-[#00563B]">
              <span className="text-[#FF7900]">2023 Akwa Ibom State</span> Education
              Intervention Fund
            </h1>
            <p className="my-8 text-base md:text-2xl font-medium text-[#01100B]">
            For Undergraduate Students With Disability in Higher institution
            </p>

            <Button className="hover:bg-green-900 md:hover:bg-white md:hover:text-green-500 md:bg-[#FF7900] md:border-[#FF7900] md:text-[#ffffff] bg-green-500">
              Apply Now!
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-[450px] flex items-center justify-center rounded-lg overflow-hidden">
          <img
            src="/about.svg"
            alt="Pastor Umo Eno and Disabled Student"
            className="object-fit block w-full h-full"
          />
        </div>
      </section>
      <div className="bg-[#F9D6C2] py-10" id="benefits">
        <div className="mt-20 px-3 max-w-[1100px] mx-auto">
          <h1 className="text-center font-bold text-[#01100B] text-4xl mt-5">
            Intervention Benefits
          </h1>
          <p className="text-[#01100B] text-center text-lg md:text-2xl mt-5 font-medium">
            Through the Akwa Ibom State Education Intervention Fund, Governor
            Umo Eno aims to provide financial assistance to deserving students
            with disabilities, enabling them to pursue their dreams and
            aspirations in higher education. The benefits of this scholarship
            include:
          </p>
        </div>
        <section className="mt-20 px-3 xl:px-0 max-w-screen-lg mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-[50%] overflow-hidden items-center rounded-lg mt-[50px] mb-5 md:mb-5">
              <img
                src="/about.svg"
                alt="Pastor Umo Eno and Disabled Student"
                className=""
              />
            </div>

            <div className="justify-center flex-initial md:ml-[100px] font-medium lg:w-[50%]">
              <div className="mb-5">
                <h3 className="text-[#FF7900] text-lg md:text-xl">
                  Tuition Coverage:
                </h3>
                <p className="text-[#01100B] text-lg md:text-xl">
                  The education intervention fund covers a significant portion
                  of tuition fees, lightening the financial burden on students
                  and their families.
                </p>
              </div>
              <div className="mb-5">
                <h3 className="text-[#FF7900] text-lg md:text-xl">
                  Stipend for Living Expenses:
                </h3>
                <p className="text-[#01100B] text-lg md:text-xl">
                  In addition to tuition coverage, selected recipients will
                  receive a stipend to assist with their living expenses,
                  allowing them to focus on their studies.
                </p>
              </div>
              <div>
                <h3 className="text-[#FF7900] text-lg md:text-xl">
                  Skill Developmenmt Opportunities:
                </h3>
                <p className="text-[#01100B] text-lg md:text-xl">
                  Recipients of the intervention fund will have access to
                  various skill development programs, workshops, and training
                  sessions, enhancing their overall personal and professional
                  growth.
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

      <section
      id="about"
        className="pb-20 pt-24 bg-[url('/scholar2.svg')] mx-auto"
        style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
      >
        <div className="max-w-screen-lg mx-auto px-3 xl:px-0">
          <h1 className="text-center font-bold text-[#01100B] text-4xl">
            About Scheme
          </h1>
          <p className="text-[#341901] text-base md:text-2xl mt-10 ">
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
            The Governor&apos;s unwavering support stems from his recognition of the
            remarkable passion and drive exhibited by these young individuals.
            We are committed to fostering an inclusive environment where
            students with disabilities can thrive academically, personally, and
            professionally.
          </p>
        </div>
      </section>

      <section className="py-10 bg-[#D6BFA9] text-[#01100B] md:mt-20">
        <div className="px-3 xl:px-0 max-w-[1100px] mx-auto flex flex-col gap-10 lg:flex-row">
          <div className="">
            <h1 className="text-center font-semibold text-4xl mb-5">Criteria for Fund</h1>
            <p className="text-center">Eligibility criteria for beneficiaries for beneficiaries of His Excellency, Umo Eno 2023 students with disabilities education intervention funds.</p>
            <div className="mt-5">
              <ul>
                <li className="flex gap-2 items-center text-[#01100B] text-sm mb-2">
                  <img src="check.svg" alt="check" />
                  <span>Must be a Student in a Tertiary Institution in Akwa Ibom</span>
                </li>
                <li className="flex gap-2 items-center text-[#01100B] text-sm mb-2">
                  <img src="check.svg" alt="check" />
                  <span>Must have verifiable document to prove Studentship</span>
                </li>
                <li className="flex gap-2 items-center text-[#01100B] text-sm mb-2">
                  <img src="check.svg" alt="check" />
                  <span>Must Submit Local Government of Origin Document</span>
                </li>
                <li className="flex gap-2 items-center text-[#01100B] text-sm mb-2">
                  <img src="check.svg" alt="check" />
                  <span>Must be a Student with Disability with verifiable proof</span>
                </li>
                <li className="flex gap-2 items-center text-[#01100B] text-sm mb-2">
                  <img src="check.svg" alt="check" />
                  <span>Must have corresponding info across all Submitted Documents and School Credentials</span>
                </li>
                <li className="flex gap-2 items-center text-[#01100B] text-sm">
                  <img src="check.svg" alt="check" />
                  <span>Applicants must have uploaded proof of disability</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:-translate-y-[20%] w-full md:w-auto">
            <img src="/criteria.svg" alt="Pastor Umo ENo with student" className="w-full"/>
          </div>
        </div>
      </section>

      <section className="bg-[#C3DFB3] my-32 py-5 relative">
        <div className=" py-20 lg:pl-20 flex max-w-[1100px] mx-auto">
          <div className="lg:w-[50%] hidden lg:block"></div>
          <p className="text-[#01100B] text-4xl font-medium text-center">A compassionate Governor creating an atmosphere of Inclusive Leadership</p>
        </div>
        <div className="px-3 xl:px-0 lg:absolute max-w-[1100px] lg:-top-20 lg:right-0 left-0 mx-auto">
          <img src="/governor.svg" alt="His Excellency Pastor Umo Eno" className="w-full lg:w-auto" />
        </div>
      </section>
    </section>
  );
}
