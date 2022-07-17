import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";

const App = () => {

   const { user } = useSelector((state) => state.auth);


   return (
      <>
         <Router>
            <Header />
            <Routes>
               <Route path="/login" element={user?<Dashboard />:<Login />} />
               <Route path="/signup" element={user?<Dashboard />:<Signup />} />
               <Route path="/" element={user?<Dashboard />:<Login/>} />
            </Routes>
         </Router>

         <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
         />
      </>
   );
};

export default App;
