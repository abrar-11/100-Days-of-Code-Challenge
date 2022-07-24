import React from "react";
import Audience from "./Audience";
import Button from "./Button";
import Employee from "./Employee";

const index = () => {
   return (
      <div className="py-10 lg:w-9/12 mx-auto ">
         {/* Hero Title and Sub title section */}
         <div className="text-center space-y-5 ">
            <h1 className="text-5xl font-semibold text-gray-800">
               We Help you to Grow Your BUSINESS
            </h1>
            <p className="text-sm  ">
               Yet bed any for travelling assistance indulgence unpleasing. Not
               thoughts all exercise blessing. Indulgence way everything joy
               alteration boisterous the attachment.
            </p>

            <Button />
            <div className="charts relative pt-6   flex-column sm:flex-row  sm:flex space-y-6 sm:space-y-0 sm:space-x-8 "   >


               {/* Our Audience Chart */}

               <Audience />
               

               {/* EMployee Section */}
               <Employee/>



            </div>
         </div>
      </div>
   );
};

export default index;
