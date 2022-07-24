import React from "react";
import Audience from "./Audience";
import Button from "./Button";

const index = () => {
   return (
      <div className="py-10 lg:w-8/12 mx-auto">
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
            <div className="charts relative" >

            
               {/* Our Audience Chart */}

               <Audience />
            </div>
         </div>
      </div>
   );
};

export default index;
