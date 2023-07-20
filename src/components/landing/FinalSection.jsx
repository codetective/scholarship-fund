import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";

export default function FinalSection() {
    const navigate = useNavigate();
  return (
    <section className="bg-[#FBE7D5] py-20">
      <div className="mx-auto max-w-[1100px] text-center px-3">
        <p className="text-3xl text-center font-medium mb-10">Providing Equal Opportunities and Accessibility to Education</p>
        <Button onClick={() => navigate("/apply")} className="hover:bg-green-900 md:hover:bg-white md:hover:text-green-500 md:bg-[#FF7900] md:border-[#FF7900] md:text-[#ffffff] bg-green-500">
          Apply Now!
        </Button>
      </div>
    </section>
  );
}
