import React from "react";

const index = () => {
   return (
      <div className="py-10  mx-auto   flex justify-center sm:justify-around items-center flex-wrap  overflow-hidden ">
         <h1 className="text-center text-2xl text-gray-700 font-semibold  w-full py-10 lg:py-16" id="pricing">
            Our Pricing Policy
         </h1>
         <div className="flex flex-col lg:flex-row wrap justify-center items-center lg:items-start lg:space-x-5  w-full space-y-10 lg:space-y-0">

            {/* Price Card Start */}
            <div className=" rounded-lg border border-gray-100 w-full sm:w-7/12 lg:w-4/12 ">
               <div className="p-5 border-b text-left">
                  <p className="text-sm text-gray-500">Basic Package</p>

                  <p className="font-medium text-4xl text-gray-700">$29</p>
               </div>

               <div className="space-y-4 my-5 p-5">
                  <p className="text-gray-500">WHAT'S INCLUDED</p>

                  <p className="text-sm">60 Unique Screens</p>
                  <p className="text-sm">Apps source file</p>
                  <p className="text-sm">400+ Free fonts</p>
                  <p className="text-sm">Color source</p>
                  <p className="text-sm">Icon included</p>
                  <p className="text-sm">All Sketch, Figma Files</p>
               </div>
               <button
                  type="button"
                  class="text-white bg-sky-500 uppercase hover:bg-sky-600 focus:ring-4 focus:outline-none  w-full focus:ring-sky-300 font-medium text-sm px-5 py-5 text-center inline-flex items-center group transition ease-in-out"
               >
                  Get Started
                  <svg
                     ariaHidden="true"
                     class="ml-auto -mr-1 w-5 h-5 "
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                     ></path>
                  </svg>
               </button>
            </div>

            {/* Price Card End */}
 
             {/* Price Card Start */}
             <div className=" rounded-lg border border-gray-100 w-full sm:w-7/12 lg:w-4/12  ">
               <div className="p-5 border-b text-left">
                  <p className="text-sm text-gray-500">Basic Package</p>

                  <p className="font-medium text-4xl text-gray-700">$29</p>
               </div>

               <div className="space-y-4 my-5 p-5 border-b ">
                  <p className="text-gray-500">WHAT'S INCLUDED</p>

                  <p className="text-sm">60 Unique Screens</p>
                  <p className="text-sm">Apps source file</p>
                  <p className="text-sm">400+ Free fonts</p>
                  <p className="text-sm">Color source</p>
                  <p className="text-sm">Icon included</p>
                  <p className="text-sm">All Sketch, Figma Files</p>
               </div>


               <div className="space-y-4 p-5 text-left">
               <p className="text-sm">HTML 5</p>
                  <p className="text-sm">Frontend Support</p>
                  <p className="text-sm">Web Source</p>
               </div>



               <button
                  type="button"
                  class="text-white bg-emerald-500 uppercase hover:bg-emerald-600 focus:ring-4 focus:outline-none  w-full focus:ring-emerald-300 font-medium  text-sm px-5 py-5 text-center inline-flex items-center group transition ease-in-out  z-10 "
               >
                  Get Started
                  <svg
                     ariaHidden="true"
                     class="ml-auto -mr-1 w-5 h-5 "
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                     ></path>
                  </svg>
               </button>
            </div>

            {/* Price Card End */}
         </div>
      </div>
   );
};

export default index;
