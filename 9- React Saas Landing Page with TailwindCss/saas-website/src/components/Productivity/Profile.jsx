import React from "react";
import avatar2 from "../../assets/employee-avatar-2.svg";

import { ChatIcon, HeartIcon, LightningBoltIcon, StatusOnlineIcon } from '@heroicons/react/outline'

const Profile = () => {
   return (
      <div className="w-full lg:w-6/12  flex-column md:flex-row md:flex md:justify-between md:items-center md:h-96 md:space-x-5 space-y-4">
         <div className=" md:w-6/12 shadow-sm md:shadow-md rounded-md h-5/6 p-10 bg-white  flex-column items-center justify-center space-y-4">
            <div class="relative  h-16 ">
            
               <img
                  class="w-16 h-16 rounded-full mx-auto"
                  src={avatar2}
                  alt=""
               />
            </div>

            <div className="text-center">
               <h1 className="font-medium">John Smith</h1>
               <p className="text-xs">Nataile Quinn</p>
            </div>

            <div className="flex justify-center space-x-4">
               <div className="text-center">
                  <HeartIcon  className="w-5 h-5 mx-auto"/>

                  <span className="text-xs">682.1k</span>
               </div>
               <div className="text-center ">
                 

                 <ChatIcon className="w-5 h-5 mx-auto"/>

                  <span className="text-xs">1,862</span>
               </div>
            </div>
         </div>

         <div className=" md:w-6/12 h-full flex-column justify-evenly space-y-5">
            <div className="p-4  bg-white shadow-sm md:shadow-md rounded flex items-center"> 
               <div className="w-14">
                  <LightningBoltIcon className="w-10 h-10 mr-3  text-emerald-500 bg-emerald-100 rounded-full p-2"/>
               </div>

               <div className=" space-y-2">
                  <p className="text-[0.8rem] text-gray-600">
                     An email bounced back to ($94.00) Amy Sanders
                  </p>

                  <p className="text-blue-700 text-xs ">Update Email Here</p>
               </div>
            </div>
            <div className="p-10 bg-white shadow-sm md:shadow-md rounded h-4/6 md:w-48">
               <div class="relative  h-16 ">
               <StatusOnlineIcon className="w-14 h-14 mx-auto text-orange-500 bg-orange-100 rounded-full p-2" />
               </div>

               <div className="text-center">
                  <h1 className="font-medium">23.8K</h1>
                  <p className="text-xs">Reach</p>
               </div>

               <div className="flex justify-center space-x-4">
                  <div className="">
                    
                  

                     <span className="text-xs">11.5%</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Profile;
