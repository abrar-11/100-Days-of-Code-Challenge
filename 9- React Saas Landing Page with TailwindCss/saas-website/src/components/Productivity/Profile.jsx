import React from "react";
import avatar2 from "../../assets/employee-avatar-2.svg";
const Profile = () => {
   return (
      <div className="w-5/12 flex justify-between items-center">
         <div className="w-6/12 shadow-md rounded-md h-5/6 p-10 bg-white  flex items-center justify-center flex-column">
            <div class="relative w-16 h-16 ">
               <img
                  class="w-full h-full rounded-full mx-auto"
                  src={avatar2}
                  alt=""
               />
               {/* <span class="bottom-0 left-0 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
            </div>
         </div>
      </div>
   ); 
};

export default Profile;
