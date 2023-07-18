export default function HeroSection() {
  return (
    <section className="flex">
      <div className="w-1/2 flex items-center justify-center px-20">
        <div>
          <h1 className="text-6xl font-bold text-blue-600">
            Free <span className="text-orange-400">scholarship</span> for every
            bright student
          </h1>
          <p className="my-8 text-sm">
            Get free scholarships for every level of education that every
            student who achievement for a bright future you can get it from
            school
          </p>

          <div className="shadow-lg rounded-lg p-2 flex justify-between">
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="w-full outline-none focus:ring-0"
            />
            <button
              type="button"
              className="py-3 px-4 rounded-lg bg-blue-600 text-white"
            >
              Submission
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 h-[570px] w-1/2 rounded-bl-3xl"></div>
    </section>
  );
}
