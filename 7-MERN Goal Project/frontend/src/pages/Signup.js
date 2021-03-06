import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser, resetAll } from "../features/authSlice";

const Signup = () => {
   const { isLoading, isError, message, isSuccess ,user} = useSelector(
      (state) => state.auth
   );
   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
     if(isError) {
      toast.error(message)
     }

     if(isSuccess || user){
      toast.info("Registered Successfully")

         setTimeout(() => {
            navigate('/')
         },1000)
     }
   }, [user,isError,isSuccess,message])
   

   const [passwordNotMatched, setPasswordNotMatched] = useState(false);
   const [form, setform] = useState({
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
   });



   const { full_name, email, password, confirm_password } = form;

   
   const updateValue = (e) => {
      setform((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const formSubmit = (e) => {
      e.preventDefault();

      if (password !== confirm_password) {
         setPasswordNotMatched(true);
      } else {
         setPasswordNotMatched(false);
         dispatch(
            registerUser({
               name: full_name,
               email,
               password,
            })
         );
      }
   };
   return (
      <div className="bg-gray-900 w-screen h-screen">
         <div className="container flex items-center justify-center w-10/12 mx-auto h-full">
            <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 hover:shadow-xl hover:rounded-md">
               <div className="header mb-8">
                  <h1 className="text-sky-500 text-2xl md:text-4xl ">
                     Welcome to Sprint Goal{" "}
                  </h1>
                  <h1 className="text-sky-200 text-xl md:text-2xl">
                     Create new account{" "}
                     <span className="text-emerald-300 text-4xl">.</span>{" "}
                  </h1>

                  <p className="text-sky-500 text-sm mt-2 md:mt-6">
                     Already A Member?{" "}
                     <Link to="/Login" className="text-sky-200">
                        Log In
                     </Link>{" "}
                  </p>
               </div>
               <div className="mb-4">
                  <label
                     className="block text-sky-400 text-sm font-medium mb-2"
                     htmlFor="full_name"
                  >
                     Full Name
                  </label>
                  <input
                     className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
                     id="full_name"
                     type="text"
                     name="full_name"
                     value={full_name}
                     onChange={updateValue}
                     placeholder="Enter your full name here."
                     autoComplete="off"
                  />
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

               <div className="mb-4">
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

               <div className="mb-6">
                  <label
                     className="block text-sky-400 text-sm font-medium mb-2"
                     htmlFor="password"
                  >
                     Confirm Password
                  </label>
                  <input
                     className="shadow appearance-none border rounded border-gray-700  w-full py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline  bg-gray-800"
                     id="confirm_password"
                     type="password"
                     name="confirm_password"
                     value={confirm_password}
                     onChange={updateValue}
                     placeholder="******************"
                     autoComplete="off"
                  />
                  {passwordNotMatched && (
                     <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <span className="font-medium">Oops!</span> Password Not
                        Matched!
                     </p>
                  )}
               </div>

               <div className="flex items-center justify-between">
                  <button
                     className="bg-sky-500 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                     type="submit"
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

export default Signup;
