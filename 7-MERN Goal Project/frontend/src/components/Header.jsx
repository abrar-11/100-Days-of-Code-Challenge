import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div className="bg-gray-900 fixed top-0 text-gray-100 font-light w-screen">
         <div className="container w-10/12 mx-auto  py-5 flex items-center justify-between">
            <div className="logo flex items-center">
               <svg
                  class="w-6 h-6 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
               </svg>
               Sprint Goal
            </div>

            <div className="auth space-x-3">
                <Link to="/" >Login </Link>
                <Link to="/signup" >Signup</Link>
            </div>
         </div>
      </div>
   );
};

export default Header;
