export default function GovernorSection() {
    return(
        <section className="bg-[#C3DFB3] lg:my-32 py-5 relative">
        <div className=" py-20 lg:pl-20 flex max-w-[1100px] mx-auto">
          <div className="lg:w-[50%] hidden lg:block"></div>
          <p className="text-[#01100B] text-4xl font-medium text-center">A compassionate Governor creating an atmosphere of Inclusive Leadership</p>
        </div>
        <div className="px-3 xl:px-0 lg:absolute max-w-[1100px] lg:-top-20 lg:right-0 left-0 mx-auto">
          <img src="/governor.svg" alt="His Excellency Pastor Umo Eno" className="w-full lg:w-auto" />
        </div>
      </section>
    )
}