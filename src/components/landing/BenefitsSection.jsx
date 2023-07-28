import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import ContainerWrap from "../../atoms/ContainerWrap";

export default function BenefitsSection() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F9D6C2]" id="benefits">
      <ContainerWrap>
        <div className="py-20">
          <div className=" px-3 xl:p-0 mx-auto">
            <h1 className="text-center font-bold text-[#01100B] text-2xl md:text-3xl">
              Intervention Benefits
            </h1>
            <p className="text-[#01100B] text-center text-md md:text-lg mt-4 font-medium">
              Through the Akwa Ibom State Education Intervention Fund, Governor
              Umo Eno aims to provide financial assistance to deserving students
              with disabilities, enabling them to pursue their dreams and
              aspirations in higher education. The benefits of this scholarship
              include:
            </p>
          </div>
          <section className="mt-10 px-3 xl:px-0 max-w-screen-lg mx-auto">
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
                  <h2 className="text-[#FF7900] text-lg font-semibold pb-2 md:text-xl">
                    Tuition Coverage:
                  </h2>
                  <p className="text-[#01100B] text-md md:text-[18px]">
                    The education intervention fund covers a significant portion
                    of tuition fees, lightening the financial burden on students
                    and their families.
                  </p>
                </div>
                <div className="mb-5">
                  <h2 className="text-[#FF7900] font-semibold pb-2 text-lg md:text-xl">
                    Stipend for Living Expenses:
                  </h2>
                  <p className="text-[#01100B] text-md md:text-[18px]">
                    In addition to tuition coverage, selected recipients will
                    receive a stipend to assist with their living expenses,
                    allowing them to focus on their studies.
                  </p>
                </div>
                <div>
                  <h2 className="text-[#FF7900] font-semibold pb-2 text-lg md:text-xl">
                    Skill Developmenmt Opportunities:
                  </h2>
                  <p className="text-[#01100B] text-md md:text-[18px]">
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
            <Button
              onClick={() => {
                navigate("/apply");
              }}
              className="hover:bg-transparent hover:text-orange-500 border-2 bg-[#FF7900] border-[#FF7900] text-white"
            >
              Apply Now!
            </Button>
          </div>
        </div>
      </ContainerWrap>
    </section>
  );
}
