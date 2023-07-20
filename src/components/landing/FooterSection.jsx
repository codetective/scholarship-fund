import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <section>
      <div className="max-w-[1100px] mx-auto px-3 xl:px-0">
        <ul className="py-20">
          <li className="flex items-center gap-3 mb-3">
            <FaFacebook size={20} />
            <span>aksscholarship/facebook.com</span>
          </li>
          <li className="flex items-center gap-3">
            <img src="/email.svg" alt="" />
            <span>aksscholarship@info.com</span>
          </li>
        </ul>
       
      </div>
        <div className="md:flex md:items-center gap-5 pb-5 w-full max-w-[1100px] mx-auto px-3 xl:px-0">
          <Link className="font-medium text-[#01100B] block">
            &copy; 2023 AKSG Educational Intervention Funds
          </Link>
          <Link className="font-medium text-[#01100B] block">Terms of Service</Link>
          <Link className="font-medium text-[#01100B] block">Privacy Policy</Link>
          <div className="bg-black h-[1px] w-[40%] hidden lg:block"></div>
        </div>
    </section>
  );
}
