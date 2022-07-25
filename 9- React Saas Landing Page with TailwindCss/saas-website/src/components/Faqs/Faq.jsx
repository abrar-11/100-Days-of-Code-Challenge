import React, { useState } from "react";

const Faq = ({question,answer}) => {
   const [isOpen, setisOpen] = useState(false);

   return (
      <div class="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
         <div class="bg-white  shadow rounded p-6 transition   mb-2">
            <div class="flex items-center justify-between ">
               <div>
                  <h2 class="text-sm font-normal leading-none text-gray-800 ">
                  {question}
                  </h2>
               </div>
               <button
                  data-menu
                  class="px-1 py-1.5 rounded  focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                  onClick={() => setisOpen(!isOpen)}
               >
                  {isOpen ? (
                     <img
                        onClick={() => setisOpen(!isOpen)}
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-2-svg1.svg"
                        alt="dropdown"
                     />
                  ) : (
                     <img
                        onClick={() => setisOpen(!isOpen)}
                        class="transform rotate-180"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-2-svg1.svg"
                        alt="dropdown"
                     />
                  )}
               </button>
            </div>
            <ul class={isOpen ? "block transition  " : "hidden transition  "}>
               <li>
                  <p class="text-sm leading-normal text-gray-600 mt-4 lg:w-96">
                   {answer}
                  </p>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Faq;
