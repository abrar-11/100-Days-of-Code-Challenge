import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Goal from "../components/Goal";
import GoalForm from "../components/GoalForm";
import { addGoal, deleteGoal, getAllGoals, resetAll } from "../features/goalSlice";

const Dashboard = () => {
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.auth);
   const { goals, isLoading, isError, message } = useSelector(
      (state) => state.goals
   );

   const [goalId, setgoalId] = useState(null);

   useEffect(() => {
      console.log("im running");
      dispatch(getAllGoals());
   },[])

 

   useEffect(() => {
      if (isError) {
         console.log(message);
      }

      return () => {
         dispatch(resetAll());
      };
   }, [user, isError, message, dispatch]);

   const handleDelete = ()=>{

      if(goalId){
         dispatch(deleteGoal(goalId));
         setgoalId(null)
      }
   }

   return (
      <div className="bg-gray-900 max-w-screen min-h-screen text-white pt-28 ">
         <div className="container w-10/12 mx-auto ">

            <div class={`bg-gray-900 bg-opacity-70 ${goalId? 'flex':'hidden'} justify-center items-center absolute z-50 top-0 right-0 bottom-0 left-0`} >
               <div class="bg-gray-900  px-16 py-14 rounded-md text-center shadow-lg" >
                  <h1 class="text-md mb-4 font-normal text-gray-200">
                     Do you Want to Delete this goal?
                  </h1>
                  <button class="bg-emerald-500 px-4 py-2 rounded-md text-sm text-white" onClick={()=>setgoalId(null)}>
                     Cancle
                  </button>
                  <button class="bg-red-500 px-7 py-2 ml-2 rounded-md text-sm text-white font-normal" onClick={
                     handleDelete
                  }>
                     Ok
                  </button>
               </div>
            </div>




            <GoalForm />

            {/* Goal Cards */}

            <div className="flex flex-wrap justify-center gap-5  mx-auto">
               {goals.length > 0 ? (
                  goals.map((goal) => {
                     return <Goal data={goal} setgoalId={setgoalId} />;
                  })
               ) : (
                  <h1>you Dn't have any goal yet..</h1>
               )}
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
