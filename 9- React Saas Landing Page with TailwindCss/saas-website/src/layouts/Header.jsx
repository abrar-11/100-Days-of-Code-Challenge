import React, { useState } from "react";
import logo from "../assets/logo.svg";
const Header = () => {
   const [isNavbar, setisNavbar] = useState(true);
   return (
      <div className="flex items-center justify-between py-5">
         <div className="logo flex items-center space-x-3">
            <img src={logo} alt="" />{" "}
            <span className="font-bold  text-gray-800">TECHIYON</span>
         </div>

         <div className="space-x-8 flex-grow text-center  text-xs font-medium uppercase text-gray-500 hidden lg:block">
            <a href="#hero" className="hover:text-gray-600">
               Grow
            </a>
            <a href="#productivity" className="hover:text-gray-600">
               Productivity
            </a>
            <a href="#pricing" className="hover:text-gray-600">
               Pricing
            </a>
            <a href="#contact" className="hover:text-gray-600">
               Contact us
            </a>
         </div>

         <div className="space-x-4 hidden lg:block">
            <button className="shadow-md rounded px-7 py-3 text-xs font-medium text-gray-800 uppercase hover:shadow-lg ">
               Log In
            </button>
            <button className="shadow-md rounded px-7 py-3 text-xs font-medium bg-emerald-500  text-white uppercase hover:shadow-lg ">
               Sign up
            </button>
         </div>

         <div
            className=" lg:hidden select-none cursor-pointer"
            onClick={() => setisNavbar(!isNavbar)}
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth={2}
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
               />
            </svg>
         </div>

         <div
            className={`${
               !isNavbar ? "-right-full " : "right-0"
            } w-screen md:w-80 h-screen bg-gray-100 fixed z-40 top-0 right-0 transition duration-200 ease-out flex justify-center items-center`}
         >
            <div
               className=" lg:hidden absolute top-9 right-9 select-none cursor-pointer"
               onClick={() => setisNavbar(!isNavbar)}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M6 18L18 6M6 6l12 12"
                  />
               </svg>
            </div>

            <div className="space-y-8 flex flex-col   text-center  text-xs font-medium uppercase text-gray-500 ">
               <a href="#hero" className="hover:text-gray-600">
                  Grow
               </a>
               <a href="#productivity" className="hover:text-gray-600">
                  Productivity
               </a>
               <a href="#pricing" className="hover:text-gray-600">
                  Pricing
               </a>
               <a href="#contact" className="hover:text-gray-600">
                  Contact us
               </a>

               <div className="space-x-4">
                  <button className="shadow-md rounded px-7 py-3 text-xs font-medium text-gray-800 uppercase hover:shadow-lg ">
                     Log In
                  </button>
                  <button className="shadow-md rounded px-7 py-3 text-xs font-medium bg-emerald-500  text-white uppercase hover:shadow-lg ">
                     Sign up
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
