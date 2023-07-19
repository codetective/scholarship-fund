import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { MdFileUpload } from "react-icons/md";

export default function Apply() {
  const navigate = useNavigate();
  const ref = useRef();
  const [page, setPage] = useState("page-1");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    formOfDisability: "",
    programmeOfStudy: "",
    certificateOfOrigin: "",
    birthCertificate: "",
    admissionLetter: "",
    feeSchedule: "",
    letterOfAttestation: "",
    feeReceipt: "",
    picture: "",
  });

  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    formOfDisability,
    programmeOfStudy,
    certificateOfOrigin,
    birthCertificate,
    admissionLetter,
    feeSchedule,
    letterOfAttestation,
    feeReceipt,
    picture,
  } = formData;

  const disabilities = [
    "ADHD", // Attention-Deficit/Hyperactivity Disorder
    "AIDS", // Acquired Immunodeficiency Syndrome
    "Albinism",
    "Amputation",
    "Anxiety Disorders",
    "Arthritis",
    "Asperger Syndrome",
    "Asthma",
    "Autism Spectrum Disorder",
    "Blindness",
    "Brain Injury",
    "Cancer",
    "Cerebral Palsy",
    "Chronic Fatigue Syndrome",
    "Deafness",
    "Depression",
    "Developmental Disabilities",
    "Diabetes",
    "Down Syndrome",
    "Dyslexia",
    "Eating Disorders",
    "Epilepsy",
    "Fibromyalgia",
    "Glaucoma",
    "Heart Conditions",
    "Hemophilia",
    "HIV",
    "Huntington's Disease",
    "Intellectual Disability",
    "Learning Disabilities",
    "Lupus",
    "Mental Illness",
    "Migraine",
    "Multiple Sclerosis",
    "Muscular Dystrophy",
    "Neurological Disorders",
    "Obsessive-Compulsive Disorder (OCD)",
    "Orthopedic Impairments",
    "Paraplegia",
    "Parkinson's Disease",
    "Post-Traumatic Stress Disorder (PTSD)",
    "Quadriplegia",
    "Schizophrenia",
    "Scoliosis",
    "Sensory Processing Disorder",
    "Speech and Language Disorders",
    "Spina Bifida",
    "Spinal Cord Injury",
    "Stroke",
    "Tourette Syndrome",
    "Visual Impairment",
    "Wheelchair dependence",
    // Add more disabilities here as needed
  ];
  
  const universityPrograms = [
    "Accounting",
    "Aerospace Engineering",
    "African Studies",
    "Agricultural Economics",
    "Agricultural Engineering",
    "Agricultural Science",
    "American Studies",
    "Animal Science",
    "Anthropology",
    "Applied Mathematics",
    "Applied Physics",
    "Arabic Studies",
    "Archaeology",
    "Architecture",
    "Art Education",
    "Art History",
    "Asian Studies",
    "Astronomy",
    "Aviation Management",
    "Biochemistry",
    "Bioinformatics",
    "Biological Engineering",
    "Biology",
    "Biomedical Engineering",
    "Biotechnology",
    "Broadcasting",
    "Business Administration",
    "Business Analytics",
    "Business Economics",
    "Chemical Engineering",
    "Chemistry",
    "Child Development",
    "Chinese Studies",
    "Civil Engineering",
    "Classical Studies",
    "Cognitive Science",
    "Communication Studies",
    "Comparative Literature",
    "Computer Engineering",
    "Computer Science",
    "Construction Management",
    "Criminal Justice",
    "Criminology",
    "Culinary Arts",
    "Dance",
    "Data Science",
    "Dentistry",
    "Digital Media",
    "Earth Sciences",
    "East Asian Studies",
    "Ecology",
    "Economics",
    "Education",
    "Electrical Engineering",
    "Electronic Engineering",
    "Elementary Education",
    "Engineering Management",
    "English Language and Literature",
    "Environmental Engineering",
    "Environmental Science",
    "Ethnic Studies",
    "European Studies",
    "Fashion Design",
    "Film Studies",
    "Finance",
    "Fine Arts",
    "Food Science",
    "Forensic Science",
    "French Studies",
    "Game Design",
    "Gender Studies",
    "Genetics",
    "Geography",
    "Geology",
    "German Studies",
    "Global Studies",
    "Graphic Design",
    "Health Administration",
    "History",
    "Horticulture",
    "Hospitality Management",
    "Human Resources",
    "Human Services",
    "Industrial Design",
    "Industrial Engineering",
    "Information Systems",
    "Information Technology",
    "Interior Design",
    "International Business",
    "International Relations",
    "Italian Studies",
    "Japanese Studies",
    "Jewish Studies",
    "Journalism",
    "Kinesiology",
    "Landscape Architecture",
    "Languages and Linguistics",
    "Latin American Studies",
    "Law",
    "Liberal Arts",
    "Library Science",
    "Literature",
    "Management",
    "Marine Biology",
    "Marketing",
    "Materials Engineering",
    "Materials Science",
    "Mathematics",
    "Mechanical Engineering",
    "Media Studies",
    "Medicine",
    "Meteorology",
    "Microbiology",
    "Middle Eastern Studies",
    "Military Science",
    "Modern Languages",
    "Music",
    "Nanotechnology",
    "Natural Resource Management",
    "Neuroscience",
    "Nursing",
    "Nutrition",
    "Occupational Therapy",
    "Oceanography",
    "Operations Management",
    "Organizational Leadership",
    "Painting",
    "Paleontology",
    "Pharmacy",
    "Philosophy",
    "Photography",
    "Physical Education",
    "Physical Therapy",
    "Physics",
    "Physiology",
    "Plant Science",
    "Political Science",
    "Pre-Medical Studies",
    "Psychology",
    "Public Health",
    "Public Policy",
    "Public Relations",
    "Radiology",
    "Robotics Engineering",
    "Russian Studies",
    "Sociology",
    "Software Engineering",
    "Spanish Studies",
    "Sports Management",
    "Statistics",
    "Sustainability Studies",
    "Systems Engineering",
    "Theater",
    "Urban Planning",
    "Veterinary Medicine",
    "Video Game Development",
    "Visual Arts",
    "Wildlife Conservation",
    "Zoology",
  ];
  
  function onChange(e) {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value,
    })
  }

  async function onFormSubmit() {}

  return (
    <section className="max-w-screen-lg mx-auto my-10 px-3 lg:px-0">
      <h1 className="text-black font-semibold text-3xl">Scholarship Form</h1>

      {page === "page-1" && (
        <div>
          <div className="flex items-center justify-between space-x-1 max-w-screen-md mx-auto mt-10">
            <div className="py-1 px-3 rounded-full bg-[#00563B] text-white">
              <p>1</p>
            </div>

            <div className="h-[1px] bg-[#495057]  w-full"></div>

            <div className="py-1 px-3 rounded-full bg-[#D6BFA9] text-[#341901]">
              <p>2</p>
            </div>

            <div className="h-[1px] bg-[#495057] rounded-full w-full"></div>

            <div className="py-1 px-3 rounded-full bg-[#D6BFA9] text-[#341901]">
              <p>3</p>
            </div>
          </div>

          <form>
            <div className="bg-[#FBE7D5] text-[#01100B] p-5 w-full text-center mt-10 rounded-lg">
              <p>
                This form is strictly for people with disabilities. Please fill
                out the fields correctly to enable us process your application
                promptly.
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-5 md:flex-row">
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={onChange}
                placeholder="First Name"
                className="py-2 px-8 w-full rounded"
              />
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={onChange}
                placeholder="Last Name"
                className="py-2 px-8 w-full rounded"
              />
            </div>

            <div className="mt-5 flex flex-col gap-5 md:flex-row">
              <input
                type="text"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={onChange}
                ref={ref}
                onFocus={() => (ref.current.type = "date")}
                onBlur={() => (ref.current.type = "text")}
                placeholder="Date of Birth"
                className="py-2 px-8 w-full rounded"
              />
              <select
                name="gender"
                id="gender"
                value={gender}
                onChange={onChange}
                placeholder="Gender"
                className="py-2 px-8 w-full rounded"
              >
                <option value="" selected disabled className="text-gray-500">
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="male">Female</option>
              </select>
            </div>

            <select
              name="formOfDisability"
              id="formOfDisability"
              value={formOfDisability}
              onChange={onChange}
              className="mt-5 py-2 px-8 w-full rounded"
            >
              <option value="" selected disabled>Form of Disability</option>
              {disabilities.map((disability, index) => (
                <option key={index} value={disability}>{disability}</option>
              ))}
            </select>

            <select
              name="programmeOfStudy"
              id="programmeOfStudy"
              value={programmeOfStudy}
              onChange={onChange}
              className="mt-5 py-2 px-8 w-full rounded"
            >
              <option value="" selected disabled>
                Programme of Study
              </option>
              {universityPrograms.map((program, index) => (
                <option key={index} value={program}>{program}</option>
              ))}
            </select>
          </form>

          <div className="mt-10 flex justify-between items-center gap-2 flex-col md:flex-row">
            <button
              onClick={() => navigate(-1)}
              className="text-center w-full md:w-auto border border-[#FF7900] text-[#FF7900] py-3 px-20 rounded"
            >
              Back
            </button>
            <button
              onClick={() => {
                setPage("page-2");
                window.scroll(0,0)
              }}
              className="text-center w-full md:w-auto border border-[#FF7900] bg-[#FF7900] text-white py-3 px-20 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {page === "page-2" && (
        <div>
          <div className="flex items-center justify-between space-x-1 max-w-screen-md mx-auto mt-10">
            <div className="py-3 px-3 rounded-full bg-[#00563B] text-white">
              <TiTick />
            </div>

            <div className="h-[1px] bg-[#495057]  w-full"></div>

            <div className="py-1 px-3 rounded-full bg-[#00563B] text-white">
              <p>2</p>
            </div>

            <div className="h-[1px] bg-[#495057] rounded-full w-full"></div>

            <div className="py-1 px-3 rounded-full bg-[#D6BFA9] text-[#341901]">
              <p>3</p>
            </div>
          </div>
          <form>
            <div className="bg-[#FBE7D5] text-[#01100B] p-5 w-full text-center my-10 rounded-lg">
              <p>
                This form is strictly for people with disabilities. Please fill
                out the fields correctly to enable us process your application
                promptly.
              </p>
            </div>

            {/* Item */}
            <label htmlFor="certificateOfOrigin">
              Upload Your Local Government Certificate Of Origin
            </label>
            <div className="border rounded w-full py-2 px-8 mt-2 mb-5">
              <input type="file" id="certificateOfOrigin" value={certificateOfOrigin} onChange={onChange} className="hidden" />
              <label
                htmlFor="certificateOfOrigin"
                className="text-[#95A48C] flex items-center gap-2 font-medium"
              >
                <MdFileUpload size={25} />
                <span>Use a PDF And JPEG</span>
              </label>
            </div>

            {/* Item */}
            <label htmlFor="birthCertificate">
              Birth Certificate/Age Declaration
            </label>
            <div className="border rounded w-full py-2 px-8 mt-2 mb-5">
              <input type="file" id="birthCertificate" value={birthCertificate} onChange={onChange} className="hidden" />
              <label
                htmlFor="birthCertificate"
                className="text-[#95A48C] flex items-center gap-2 font-medium"
              >
                <MdFileUpload size={25} />
                <span>Use a PDF And JPEG</span>
              </label>
            </div>

            {/* Item */}
            <label htmlFor="admissionLetter">
              Jamb Admission Letter/School Notification Admission Letter
            </label>
            <div className="border rounded w-full py-2 px-8 mt-2 mb-5">
              <input type="file" id="admissionLetter" value={admissionLetter} onChange={onChange} className="hidden" />
              <label
                htmlFor="admissionLetter"
                className="text-[#95A48C] flex items-center gap-2 font-medium"
              >
                <MdFileUpload size={25} />
                <span>Use A PDF And JPEG</span>
              </label>
            </div>

            {/* Item */}
            <label htmlFor="feeSchedule">Schedule Of School Fees Payment</label>
            <div className="border rounded w-full py-2 px-8 mt-2 mb-5">
              <input type="file" id="feeSchedule" value={feeSchedule} onChange={onChange} className="hidden" />
              <label
                htmlFor="feeSchedule"
                className="text-[#95A48C] flex items-center gap-2 font-medium"
              >
                <MdFileUpload size={25} />
                <span>Use A PDF And JPEG</span>
              </label>
            </div>

            {/* Item */}
            <label htmlFor="letterOfAttestation">
              Letter Of Attestation By Department HOD
            </label>
            <div className="border rounded w-full py-2 px-8 mt-2 mb-5">
              <input type="file" id="letterOfAttestation" value={letterOfAttestation} onChange={onChange} className="hidden" />
              <label
                htmlFor="letterOfAttestation"
                className="text-[#95A48C] flex items-center gap-2 font-medium"
              >
                <MdFileUpload size={25} />
                <span>Use A PDF And JPEG</span>
              </label>
            </div>

            {/* Item */}
            <label htmlFor="feeReceipt">
              School Fees Payment Receipt (Session/Semester Pressiding)
            </label>
            <div className="border rounded w-full py-2 px-8 mt-2 mb-5">
              <input type="file" id="feeReceipt" value={feeReceipt} onChange={onChange} className="hidden" />
              <label
                htmlFor="feeReceipt"
                className="text-[#95A48C] flex items-center gap-2 font-medium"
              >
                <MdFileUpload size={25} />
                <span>Use A PDF And JPEG</span>
              </label>
            </div>

            {/* Item */}
            <label htmlFor="picture">
              Full Picture Of Beneficiary Showing The Type Of Disability
            </label>
            <div className="border rounded w-full py-2 px-8 mt-2 mb-5">
              <input type="file" id="picture" value={picture} onChange={onChange} className="hidden" />
              <label
                htmlFor="picture"
                className="text-[#95A48C] flex items-center gap-2 font-medium"
              >
                <MdFileUpload size={25} />
                <span>Use A PDF And JPEG</span>
              </label>
            </div>
          </form>

          <div className="mt-10 flex gap-2 justify-between flex-col md:flex-row items-center">
            <button
              onClick={() => {
                setPage("page-1");
                window.scroll(0,0)
              }}
              className="text-center w-full md:w-auto border border-[#FF7900] text-[#FF7900] py-3 px-20 rounded"
            >
              Back
            </button>
            <button
              onClick={onFormSubmit}
              className="text-center w-full md:w-auto border border-[#FF7900] bg-[#FF7900] text-white py-3 px-20 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
