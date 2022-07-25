import React from "react";
import Section from "../Utils/Section";
import BarGraphSection from "./BarGraphSection";

const index = () => {
   return (
      <div className="py-10  mx-auto   flex justify-center sm:justify-around items-center flex-wrap  overflow-hidden" id="network">
         {/* Boost Your Productivity */}
         <Section
            btn="Boost Your Network"
            title="Boost Your Network"
            desc="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode. Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as."
            btn2="Explore More"
         />

         {/* Profile Section */}

         <BarGraphSection />
      </div>
   );
};

export default index;
