import React from "react";
import { Hero, Partners } from "./components";
import Header from "./layouts/Header";

const App = () => {
   return (
      <>
         {" "}
         <div className="bg-gradient-to-r from-emerald-50 via-gray-50 to-emerald-100 min-h-screen">
            <div className="container mx-auto w-10/12 max-w-6xl ">
               {/*=========  Header Section========= */}
               <Header />

               {/*=========  Hero Section========= */}
               <Hero />

               {/*=========  Partners Section========= */}
               <Partners/>
            </div>
         </div>
      </>
   );
};

export default App;
