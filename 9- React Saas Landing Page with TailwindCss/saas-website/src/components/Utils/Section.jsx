import React from "react";

const Section = ({btn, title, desc, btn2 }) => {

   return (
      <div className="lg:w-5/12 space-y-10  lg:pb-10">
         <button className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded shadow shadow-emerald-200 ">
            {btn}
         </button>

         <h1 className="text-4xl">{title}</h1>
         <p>{desc}</p>

         <button className="shadow-md rounded px-7 py-3 text-xs font-medium bg-emerald-500  text-white uppercase hover:shadow-lg ">
            {btn2}
         </button>


      </div>
   );
};

export default Section;
