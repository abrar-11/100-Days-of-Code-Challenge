import React, { useState, useEffect } from "react";
import { loginUser,resetAll } from "../features/authSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { isLoading, isError, message, isSuccess, user } = useSelector(
      (state) => state.auth
   );

   const [form, setform] = useState({
      email: "",
      password: "",
   });

   const { email, password } = form;

   useEffect(() => {
      if (isError) {
         toast.error(message);

      }

      if (isSuccess || user) {
         toast.info("Login Successfully");

         setTimeout(() => {
            navigate("/");
         }, 1000);
      }
   }, [isSuccess, isError, message]);

   const updateValue = (e) => {

      setform((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const formSubmit = (e) => {
      e.preventDefault();

      dispatch(resetAll())
      dispatch(
         loginUser({
            email,
            password,
         })
      );
   };

   return (
      <div className="bg-gray-900 w-screen h-screen">
         <div className="container flex items-center justify-center w-100 h-full">
            <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 hover:shadow-xl hover:rounded-md">
               <div className="header mb-12">
                  <h1 className="text-sky-500 text-4xl">Welcome Back!</h1>
                  <p className="text-sky-300 text-sm mt-2">
                     Please Enter your Details.
                  </p>
               </div>
               <div className="mb-4">
                  <label
                     className="block text-sky-400 text-sm font-medium mb-2"
                     htmlFor="username"
                  >
                     Email
                  </label>
                  <input
                     className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
                     id="email"
                     type="email"
                     name="email"
                     value={email}
                     onChange={updateValue}
                     placeholder="email"
                     autoComplete="off"
                  />
               </div>
               <div className="mb-6">
                  <label
                     className="block text-sky-400 text-sm font-medium mb-2"
                     htmlFor="password"
                  >
                     Password
                  </label>
                  <input
                     className="shadow appearance-none border rounded border-gray-700  w-full py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline  bg-gray-800"
                     id="password"
                     type="password"
                     name="password"
                     value={password}
                     onChange={updateValue}
                     placeholder="******************"
                     autoComplete="off"
                  />
               </div>
               <div className="flex items-center justify-between">
                  <button
                     className="bg-sky-500 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                     type="button"
                     onClick={(e) => formSubmit(e)}
                  >
                     Sign In
                  </button>
                  <a
                     className="inline-block align-baseline font-medium text-sm text-sky-500 hover:text-sky-600"
                     href="#"
                  >
                     Forgot Password?
                  </a>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
