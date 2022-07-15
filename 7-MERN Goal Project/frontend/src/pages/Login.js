import React from "react";

const Login = () => {
   return (
      <div className="bg-gray-900 w-screen h-screen">
         <div className="container flex items-center justify-center w-100 h-full">
         
            <form class="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 hover:shadow-xl hover:rounded-md">
            <div className="header mb-12">
            <h1 className="text-sky-500 text-4xl">Welcome Back!</h1>
            <p className="text-sky-300 text-sm mt-2">Please Enter your Details.</p>
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
                     placeholder="email"
                     autocomplete="off"
                  />
               </div>
               <div class="mb-6">
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
                     placeholder="******************"
                     autocomplete="off"
                  />
                  
               </div>
               <div class="flex items-center justify-between">
                  <button
                     class="bg-sky-500 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                     type="button"
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

export default Login;
