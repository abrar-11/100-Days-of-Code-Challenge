import React from "react";
import Slack from "../../assets/slack.svg";
import Google from "../../assets/google.svg";
import Deloitte from "../../assets/deloitte.svg";
import Ibm from "../../assets/ibm.svg";
import Samsung from "../../assets/samsung.svg";

const index = () => {
   return (
      <div className="py-10 lg:w-9/12 mx-auto space-x-5 space-y-2 flex justify-center sm:justify-around items-center flex-wrap">
         <div className="logo-container w-1/4 sm:w-2/12 text-center">
            <img src={Slack} alt="Slack Logo" />
         </div>
         <div className="logo-container w-1/4 sm:w-2/12">
            <img src={Google} alt="Google Logo" />
         </div>
         <div className="logo-container w-1/4 sm:w-2/12">
            <img src={Deloitte} alt="Deloitte Logo" />
         </div>
         <div className="logo-container w-1/4 sm:w-2/12">
            <img src={Ibm} alt="Ibm Logo" />
         </div>
         <div className="logo-container w-1/4 sm:w-2/12">
            <img src={Samsung} alt="Samsung Logo" />
         </div>
      </div>
   );
};

export default index;
