import React from "react";
import { Hero } from "./components";
import Header from "./layouts/Header";

const App = () => {
   return (
      <>
         <div className="container mx-auto w-10/12 max-w-6xl">

          {/*=========  Header Section========= */}
            <Header/>

            {/*=========  Hero Section========= */}
            <Hero/>
         </div>
      </>
   );
};

export default App;
