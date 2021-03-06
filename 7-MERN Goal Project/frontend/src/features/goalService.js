import axios from "axios";
const api_url = "/api/goals/";

const addGoal = async (goal, token) => {
   const response = await axios.post(
      api_url,
      { goal },
      {
         headers: {
            Authorization: "Bearer " + token,
         },
      }
   );

   return response.data;
};

// Get user goals
const getAllGoals = async (token) => {

   const response = await axios.get(api_url, {
      headers: {
         Authorization: "Bearer " + token,
      },
   });

   return response.data;
};

// Delete user goals
const deleteGoal = async (id,token) => {

   const response = await axios.delete(`${api_url}${id}`, {
      headers: {
         Authorization: "Bearer " + token,
      },
   });

   return response.data;
};

const goalService = { addGoal,getAllGoals ,deleteGoal};

export default goalService;
