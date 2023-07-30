import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer id="footer" className="">
      <div className="max-w-[1100px] mx-auto px-3 xl:px-0">
        <ul className="py-20">
          <li className="flex items-center gap-3">
            <img src="/email.svg" alt="mail logo" />
            <a href="mailto:info@educationfundswd.com.ng">
              info@educationfundswd.com.ng
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-[#FBE7D5] py-5">
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-5 w-full max-w-[1100px] mx-auto px-3 xl:px-0 ">
          <Link className="font-medium text-[#01100B] block">
            &copy; 2023 AKSG Educational Intervention Funds
          </Link>
          <Link className="font-medium text-[#01100B] block">Terms of Service</Link>
          <Link className="font-medium text-[#01100B] block">Privacy Policy</Link>
          {/* <div className="bg-black h-[1px] w-[40%] hidden lg:block"></div> */}
        </div>
      </div>
    </footer>
  );
}
