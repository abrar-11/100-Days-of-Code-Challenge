import React from "react";
import {
   Hero,
   Network,
   Partners,
   Pricing,
   Productivity,
   Faqs,
   Footer,
} from "./components";
import Header from "./layouts/Header";

const App = () => {
   return (
      <>
         {" "}
         <div className="bg-dark min-h-screen text-light">
            <div className="container mx-auto w-9/12 max-w-6xl ">
               {/*=========  Header Section========= */}
               <Header />

               {/*=========  Hero Section========= */}
               <Hero />

               {/*=========  Partners Section========= */}
               <Partners />

               {/*=========  Productivity Section========= */}
               <Productivity />

               {/*=========  Network Section========= */}
               <Network />

               {/*=========  Network Section========= */}
               <Pricing />

               <Faqs/>
            </div>

            {/*=========  Footer Section========= */}
            <Footer />
         </div>
      </>
   );
};

export default App;
