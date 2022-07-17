import axios from 'axios'
const api_url = '/api/user/' 

// User Registration 

const register = async(userData)=>{
    const response = await axios.post(api_url, userData)

    // console.log("Register User response: ",response)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}

// User Login 
const login = async(userData)=>{
    const response = await axios.post(api_url+'login', userData)

    // console.log("Login User response: ",response)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}

const logOut = () =>{
    localStorage.removeItem('user');
}

const authService = {register,login,logOut}

export default authService