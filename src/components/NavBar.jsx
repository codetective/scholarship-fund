/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
export default function Header() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <header className="bg-transparent absolute top-0 right-0 left-0 z-40">
      <div className="flex justify-between px-3 py-5 max-w-6xl mx-auto items-center">
        <div>
          <h1 className="font-bold text-4xl text-blue-500 cursor-pointer">
            Raise<span className="text-orange-500">Me</span>
          </h1>
        </div>
        <div className="flex items-center space-x-20">
          <ul className="hidden sm:flex space-x-7">
            <li
              className={`cursor-pointer py-3 text-sm font-medium  border-b-[3px]  ${
                pathMatchRoute("/about")
                  ? "text-black border-b-red-500"
                  : "text-white border-b-transparent"
              }`}
              onClick={() => navigate("/about")}
            >
              About
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-medium border-b-[3px] ${
                pathMatchRoute("/participant")
                  ? "text-black border-b-red-500"
                  : "text-white border-b-transparent"
              }`}
              onClick={() => navigate("/participant")}
            >
              Participant
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-medium border-b-[3px] ${
                pathMatchRoute("/category")
                  ? "text-black border-b-red-500"
                  : "text-white border-b-transparent"
              }`}
              onClick={() => navigate("/category")}
            >
              Category
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-medium border-b-[3px] ${
                pathMatchRoute("/contact")
                  ? "text-black border-b-red-500"
                  : "text-white border-b-transparent"
              }`}
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
          </ul>
          <ul className="hidden sm:flex items-center space-x-2">
            <li className="py-3 px-4 text-white border rounded-xl font-semibold">
              Sign Up
            </li>
            <li className="py-3 px-4 bg-orange-400 text-white rounded-xl font-semibold">
              Sign In
            </li>
          </ul>
        </div>
        {/* Mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center py-3">
          {toggle ? (
            <MdClose
              onClick={() => setToggle(!toggle)}
              className="w-[28px] h-[28px] text-white object-contain cursor-pointer transition duration-200 ease-in-out z-[100]"
            />
          ) : (
            <MdMenu
              onClick={() => setToggle(!toggle)}
              className="w-[28px] h-[28px] object-contain cursor-pointer transition duration-200 ease-in-out z-[100]"
            />
          )}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } flex-col p-6 bg-gradient-to-r from-gray-600 via-gray-700 to-black absolute top-3  -right-4 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition duration-200 ease-in-out`}
          >
            <ul className="flex justify-end items-start flex-col ">
              <li
                className={`cursor-pointer py-3 text-sm font-semibold  border-b-[3px]  ${
                  pathMatchRoute("/about")
                    ? "text-black border-none"
                    : "text-gray-400 border-b-transparent"
                }`}
                onClick={() => {
                  navigate("/about");
                  setToggle(false);
                }}
              >
                About
              </li>
              <li
                className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                  pathMatchRoute("/participant")
                    ? "text-black border-none"
                    : "text-gray-400 border-b-transparent"
                }`}
                onClick={() => {
                  navigate("/participant");
                  setToggle(false);
                }}
              >
                Participant
              </li>
              <li
                className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                  pathMatchRoute("/category")
                    ? "text-black border-none"
                    : "text-gray-400 border-b-transparent"
                }`}
                onClick={() => {
                  navigate("/category");
                  setToggle(false);
                }}
              >
                Category
              </li>
              <li
                className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                  pathMatchRoute("/contact")
                    ? "text-black border-none"
                    : "text-gray-400 border-b-transparent"
                }`}
                onClick={() => {
                  navigate("/contact");
                  setToggle(false);
                }}
              >
                Contact
              </li>
            </ul>
            <ul className="flex items-center space-x-2">
              <li className="py-3 px-4 border rounded-xl font-semibold">
                Sign Up
              </li>
              <li className="py-3 px-4 bg-orange-400 text-white rounded-xl font-semibold">
                Sign In
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
