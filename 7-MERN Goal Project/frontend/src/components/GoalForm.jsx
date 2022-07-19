import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../features/goalSlice";

const GoalForm = () => {
   const dispatch = useDispatch();
   const [goalText, setgoalText] = useState("");



   const updateValue = (e) => {
      setgoalText(e.target.value);
   };

   const formSubmit = (e) => {
      e.preventDefault();

      if (goalText.trim()) {
         dispatch(addGoal(goalText));
         setgoalText("");
      }
   };

   return (
      <form className="mb-4 md:w-5/12 mx-auto ">
         <label
            className="block text-sky-400 text-lg font-medium mb-7"
            htmlFor="full_name"
         >
            Create Your Goals 
         </label>
         <input
            className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 "
            id="full_name"
            type="text"
            name="goal"
            value={goalText}
            onChange={updateValue}
            placeholder="Enter your goal here.. "
            autoComplete="off"
         />

         <button
            className="relative inline-flex w-full   items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 my-5 md:my-7"
            type="submit"
            onClick={(e) => formSubmit(e)}
         >
            <span className="relative px-5 py-2 w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
               Add Goal
            </span>
         </button>
      </form>
   );
};

export default GoalForm;
