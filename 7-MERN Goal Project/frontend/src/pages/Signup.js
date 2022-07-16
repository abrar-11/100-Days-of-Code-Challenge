import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {

   const [passwordNotMatched, setPasswordNotMatched] = useState(false)
   const [form, setform] = useState({
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
   });

   const {full_name, email, password, confirm_password}  = form
   const updateValue = (e)=>{
      setform((prevState)=>({
         ...prevState,
         [e.target.name] : e.target.value,
      }))
   }


   const formSubmit = (e)=>{
      e.preventDefault()

     password !== confirm_password?setPasswordNotMatched(true):setPasswordNotMatched(false)
      
 
   }
   return (
      <div className="bg-gray-900 w-screen h-screen">
         <div className="container flex items-center justify-center w-10/12 mx-auto h-full">
            <form class="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 hover:shadow-xl hover:rounded-md">
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
               <div class="mb-4">
                  <label
                     class="block text-sky-400 text-sm font-medium mb-2"
                     for="full_name"
                  >
                     Full Name
                  </label>
                  <input
                     class="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
                     id="full_name"
                     type="text"
                     name="full_name"
                     value={full_name}
                     onChange={updateValue}
                     placeholder="Enter your full name here."
                     autocomplete="off"
                  />
               </div>

               <div class="mb-4">
                  <label
                     class="block text-sky-400 text-sm font-medium mb-2"
                     for="username"
                  >
                     Email
                  </label>
                  <input
                     class="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
                     id="email"
                     type="email"
                     name="email"
                     value={email}
                     onChange={updateValue}
                     placeholder="email"
                     autocomplete="off"
                  />
               </div>

               <div class="mb-4">
                  <label
                     class="block text-sky-400 text-sm font-medium mb-2"
                     for="password"
                  >
                     Password
                  </label>
                  <input
                     class="shadow appearance-none border rounded border-gray-700  w-full py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline  bg-gray-800"
                     id="password"
                     type="password"
                     name="password"
                     value={password}
                     onChange={updateValue}
                     placeholder="******************"
                     autocomplete="off"
                  />
               </div>

               <div class="mb-6">
                  <label
                     class="block text-sky-400 text-sm font-medium mb-2"
                     for="password"
                  >
                     Confirm Password
                  </label>
                  <input
                     class="shadow appearance-none border rounded border-gray-700  w-full py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline  bg-gray-800"
                     id="confirm_password"
                     type="password"
                     name="confirm_password"
                     value={confirm_password}
                     onChange={updateValue}
                     placeholder="******************"
                     autocomplete="off"
                  />
                  {passwordNotMatched && ( <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span>Password Not Matched!</p>)}
               </div>

               <div class="flex items-center justify-between">
                  <button
                     class="bg-sky-500 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                     type="submit"
                     onClick={(e)=>formSubmit(e)}
                  >
                     Sign In
                  </button>
                  <a
                     class="inline-block align-baseline font-medium text-sm text-sky-500 hover:text-sky-600"
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
