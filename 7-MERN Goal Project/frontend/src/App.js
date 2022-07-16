import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";

const App = () => {
   return (
      <>
         <Router>
            <Header />
            <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/" element={<Dashboard />} />
            </Routes>
         </Router>

         <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
      </>
   );
};

export default App;
