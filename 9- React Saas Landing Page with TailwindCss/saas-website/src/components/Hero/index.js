import React from "react";
import Audience from "./Audience";
import Button from "./Button";
import Employee from "./Employee";

const index = () => {
   return (
      <div className="py-10 x-auto " id="hero">
         {/* Hero Title and Sub title section */}
         <div className="text-center space-y-5 ">
            <h1 className="text-3xl lg:text-6xl font-semibold text-emerald w-full md:w-8/12 mx-auto drop-shadow-lg leading-loose">
               We Help you to <span className="text-emerald-500">Grow</span>{" "}
               Your BUSINESS
            </h1>
            <p className="text-sm   w-full md:w-8/12 mx-auto">
               Yet bed any for travelling assistance indulgence unpleasing. Not
               thoughts all exercise blessing. Indulgence way everything joy
               alteration boisterous the attachment.
            </p>

            <Button />
            <div className="charts relative pt-6   flex flex-col lg:flex-row  space-y-6 lg:space-y-0 lg:space-x-8 items-center overflow-hidden ">
               {/* Our Audience Chart */}

               <Audience />

               {/* EMployee Section */}
               <Employee />
            </div>
         </div>
      </div>
   );
};

export default index;
