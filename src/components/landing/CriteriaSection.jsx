export default function CriteriaSection() {
    return (
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
    )
}