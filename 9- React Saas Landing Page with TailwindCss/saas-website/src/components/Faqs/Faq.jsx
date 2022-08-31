import React, { useState } from "react";

const Faq = ({ question, answer }) => {
   const [isOpen, setisOpen] = useState(false);

   return (
      <div class="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
         <div class="bg-dark-2  shadow rounded p-6 transition   mb-2">
            <div class="flex items-center justify-between ">
               <div>
                  <h2 class="text-sm font-normal leading-none text-gray-100 ">
                     {question}
                  </h2>
               </div>
               <button
                  data-menu
                  class="px-1 py-1.5 rounded  focus:outline-none   cursor-pointer"
                  onClick={() => setisOpen(!isOpen)}
               >
                  {isOpen ? (
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-emerald-400"
                        onClick={() => setisOpen(!isOpen)}
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                        />
                     </svg>
                  ) : (
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-emerald-400"
                        onClick={() => setisOpen(!isOpen)}
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                        />
                     </svg>
                  )}
               </button>
            </div>
            <ul class={isOpen ? "block transition  " : "hidden transition  "}>
               <li>
                  <p class="text-sm leading-normal text-gray-200 mt-4 lg:w-96">
                     {answer}
                  </p>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Faq;
