import React from "react";

const Goal = ({ data, setgoalId }) => {
   const { _id, goal, createdAt } = data;
   return (
      <div className=" w-full md:w-5/12 text-md shadow-lg hover:shadow-xl p-4    bg-gray-800 rounded relative">
         <div className="absolute right-3 top-3" onClick={()=>setgoalId(_id)}>
            <svg
               className="w-4 h-4 text-emerald-300 cursor-pointer  hover:animate-pulse"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
               />
            </svg>
         </div>
         <p className="text-emerald-200 font-light">{goal}</p>
         <p className="text-gray-300 text-sm">{createdAt}</p>
      </div>
   );
};

export default Goal;
