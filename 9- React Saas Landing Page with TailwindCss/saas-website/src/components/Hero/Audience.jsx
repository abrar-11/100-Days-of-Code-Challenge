import React from "react";
import pieChart from "../../assets/pie-chart.svg";
const Audience = () => {
  // md:-mt-16 md:-ml-5
   return (
      <div className="w-full md:w-80 h-fit  lg:w-6/12 bg-dark-2 p-6 shadow-md rounded-lg space-y-10 ">
         <h1>Audience</h1>
         {/* Apex Pie Chart */}

         <div>
            <img src={pieChart} alt="Audient Chart" className="mx-auto" />
         </div>

         <div className="flex justify-between ">
            <div className="flex items-center jsutify-start flex-wrap">
               <p className="w-3 h-3 rounded-full mr-1 bg-blue-500 "></p>
               <span className="text-xs">55%</span>
               <span className="w-full text-start text-[0.56rem] md:text-xs text-light ">20-25 year</span>
            </div> 
            <div className="flex items-center flex-wrap">
               <p className="w-3 h-3 rounded-full mr-1 bg-gray-200 "></p>
               <span className="text-xs">20%</span>
               <span className="w-full text-start text-[0.56rem] md:text-xs text-light">26-35 year</span>
            </div>
            <div className="flex items-center flex-wrap">
               <p className="w-3 h-3 rounded-full mr-1 bg-emerald-500 "></p>
               <span className="text-xs">17%</span>
               <span className="w-full text-start text-[0.56rem] md:text-xs text-light ">36-45 year</span>
            </div>
            <div className="flex items-center flex-wrap">
               <p className="w-3 h-3 rounded-full mr-1 bg-yellow-400 "></p>
               <span className="text-xs">8%</span>
               <span className="w-full text-start text-[0.56rem] md:text-xs text-light ">46-60 year</span>
            </div>
         </div>
      </div>
   );
};

export default Audience;
