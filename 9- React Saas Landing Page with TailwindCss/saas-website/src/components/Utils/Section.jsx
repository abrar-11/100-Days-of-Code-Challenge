import React from "react";

const Section = () => {
   const { btn, title, desc, btn2 } = {
      btn: "Boost Your Work",
      title: "Boost Your Productivity",
      desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode. Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.",
      btn2: "Explore Features",
   };
   return (
      <div className="lg:w-5/12 space-y-10">
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
