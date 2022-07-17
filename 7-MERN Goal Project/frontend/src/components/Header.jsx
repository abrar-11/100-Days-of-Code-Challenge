import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser, resetAll } from "../features/authSlice";

const Header = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { user } = useSelector((state) => state.auth);

   // Log out 
   const logOut = ()=>{
      dispatch(logOutUser());
      dispatch(resetAll());
      navigate('/login')

   }
   return (
      <div className="bg-gray-900 fixed top-0 text-gray-100 font-light w-screen">
         <div className="container w-10/12 mx-auto  py-5 flex items-center justify-between">
            <div className="logo flex items-center">
               <svg
                  className="w-6 h-6 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
               </svg>
               Sprint Goal
            </div>

            <div className="auth space-x-3">
               {!user ? (
                  <>
                     <Link to="/login">Login </Link>

                     <Link to="/signup">Signup</Link>
                  </>
               ) : (
                  <button onClick={logOut}>Log out</button>
               )}
            </div>
         </div>
      </div>
   );
};

export default Header;
