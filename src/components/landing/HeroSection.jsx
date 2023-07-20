import Button from "../../atoms/Button";
export default function HeroSection() {
  return (
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
  );
}
