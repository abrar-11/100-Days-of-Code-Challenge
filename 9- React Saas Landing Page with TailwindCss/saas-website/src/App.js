import React from "react";
import { Hero, Network, Partners, Productivity } from "./components";
import Header from "./layouts/Header";

const App = () => {
   return (
      <>
         {" "}
         <div className="bg-gradient-to-r min-h-screen pb-60">
            <div className="container mx-auto w-9/12 max-w-6xl ">
               {/*=========  Header Section========= */}
               <Header />

               {/*=========  Hero Section========= */}
               <Hero />

               {/*=========  Partners Section========= */}
               <Partners/>


                {/*=========  Productivity Section========= */}
                <Productivity/>


               {/*=========  Network Section========= */}
                <Network/>

            </div>
         </div>
      </>
   );
};

export default App;
