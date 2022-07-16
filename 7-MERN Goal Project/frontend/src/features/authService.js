import axios from 'axios'
const api_url = '/api/user/' 


const register = async(userData)=>{
    const response = await axios.post(api_url, userData)

    console.log("Register User response: ",response)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}


const authService = {register}

export default authService