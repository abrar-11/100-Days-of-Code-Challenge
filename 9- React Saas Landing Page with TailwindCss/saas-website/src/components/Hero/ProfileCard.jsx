import React from "react";


const colorsClasses = {
    'emerald': 'bg-emerald-600',
    'red':'bg-red-600',
    'yellow':'bg-yellow-600'
}

const ProfileCard = ({avatar,name,role,color,status,per}) => {
    let bg_color = colorsClasses[color]
   return (
      <>
         <div className="flex justify-between text-start text-xs  p-3 rounded shadow items-center bg-dark-2 ">
            <div className="w-6/12 md:w-4/12 flex items-center">
               <img
                  class="w-6 h-6 rounded-full"
                  src={avatar}
                  alt="Rounded avatar"
               />
               <p className="ml-2">{name}</p>
            </div>
            <div className="w-1/12 hidden md:block">{role}</div>
            <div className="w-6/12 md:w-4/12">
               {" "}
               <div class="w-full bg-gray-300 rounded-full h-1.5 ">
                  <div
                     class={`${bg_color} h-1.5 rounded-full `}
                     style={{ width: per }}
                  ></div>
               </div>
            </div>
            <div className="w-2/12 hidden md:block">{status}</div>
         </div>

         {/* Card End */}
      </>
   );
};

export default ProfileCard;
