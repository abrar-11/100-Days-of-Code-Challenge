import React from "react";
import avatar1 from "../../assets/employee-avatar-1.png";
import avatar2 from "../../assets/employee-avatar-2.png";
import avatar3 from "../../assets/employee-avatar-3.png";
import avatar4 from "../../assets/employee-avatar-4.png";
import ProfileCard from "./ProfileCard";

const employee_data = [
   {
      avatar: avatar1,
      name: "Jenny Jones",
      role: "MD",
      color: "emerald",
      status: "Active",
      per: "50%",
   },
   {
      avatar: avatar2,
      name: "Tyrone Wilson",
      role: "Dr",
      color: "emerald",
      status: "Active",
      per: "70%",
   },
   {
      avatar: avatar3,
      name: "Jorge Hawk",
      role: "DP",
      color: "red",
      status: "Active",
      per: "75%",
   },
   {
      avatar: avatar4,
      name: "Jenny Jonnes",
      role: "MD",
      color: "emerald",
      status: "Active",
      per: "80%",
   },
   {
      avatar: avatar1,
      name: "Jenny Jones",
      role: "MD",
      color: "yellow",
      status: "Active",
      per: "64%",
   },
];

const Employee = () => {
   return (
      <div className=" mt-10 md:mt-0 w-full lg:w-6/12  bg-dark-2 p-2 md:p-6 shadow-xl rounded-lg space-y-10 hide_scrollbar">
         <div className="flex justify-between items-center">
            <h1>Employee</h1>
            <button className="shadow-md rounded px-7 py-3 text-xs font-medium bg-emerald-500  text-white uppercase hover:shadow-lg ">
               Invite
            </button>
         </div>

         <div className="overflow-x-scroll hide_scrollbar">
            <div className="flex justify-between text-start  font-medium text-[0.75rem] mb-5 ">
               <div className="w-6/12 md:w-4/12">Name</div>
               <div className="w-1/12 hidden md:block">Role</div>
               <div className="w-6/12 md:w-4/12">Compliance</div>
               <div className="w-2/12 hidden md:block">Status</div>
            </div>

            <div className="space-y-2">
               {employee_data.map((emp,index) => {
                  return (
                     <ProfileCard
                        avatar={emp.avatar}
                        name={emp.name}
                        role={emp.role}
                        color={emp.color}
                        status={emp.status}
                        per={emp.per}
                        kery = {index}
                     />
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Employee;
