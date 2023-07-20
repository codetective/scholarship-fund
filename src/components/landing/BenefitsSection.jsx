import Button from "../../atoms/Button";

export default function BenefitsSection() {
    return (
        <div className="bg-[#F9D6C2] py-10" id="benefits">
        <div className="mt-20 px-3 xl:p-0 max-w-[1100px] mx-auto">
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
    )
}