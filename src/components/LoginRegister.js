import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from "axios"
import "./LoginRegister.css"
export default function LoginRegister() {
    const navigate1 = useNavigate()
    const [toggle,setToggle] = useState(false);

    const[username,setusername] =useState("")
    const[password,setPassword] =useState("")
    const[cpassword,setCpassword] =useState("")

 const loginHandler = ()=>{
     axios.post("https://bookstore-zm39.onrender.com/signin",{username,password})
        .then((res)=>{
            console.log(res.data.data);
            console.log(res.data)
            localStorage.setItem("mytoken",res.data.data);
            localStorage.setItem("myid",res.data.userId);
            window.alert("login sucesfull")
            navigate1("/home");
        }).catch((err)=>{
            console.log(err)
            window.alert("invalid credentials")

        })
}
const registerHandler = ()=>{
    axios.post("https://bookstore-zm39.onrender.com/register",{username,password,cpassword})
       .then((res)=>{
           console.log(res.data.data);
           window.alert("registration sucesfull")
            setToggle(false)
       }).catch((err)=>{
           console.log(err)
           window.alert("username already exist")

       })
    
}
    


  return (<>
  { !toggle &&
  <div className='login-main'>
        <div className='login-form'>
            <h2>Member Login</h2>
            <div className='login-username'>
                 <input placeholder='username' type='name' onChange={(e)=>{setusername(e.target.value)}}/>
            </div>
           <div className='login-password'>
                <input placeholder='password' type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
           </div>
            
            <div className='login-btn'>
                <button id='btn' onClick={loginHandler}>Login</button>
            </div>
            <div className='login-footer'>
                <span>Not Have an account?</span>
                <button className='r-btn' onClick={()=>{setToggle(true)}}>Register</button>
            </div>

        </div>
      
    </div>
}
    { toggle &&
    <div className='register-main'>
        <div className='register-form'>
            <h2>Member Login</h2>
            <div className='login-username'>
                 <input placeholder='username' type='name' onChange={(e)=>{setusername(e.target.value)}}/>
            </div>
           <div className='login-password'>
                <input placeholder='password' type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
           </div>
           <div className='login-cpassword'>
                <input placeholder='Confirm password' type='password' onChange={(e)=>{setCpassword(e.target.value)}}/>
           </div>
            
            <div className='login-btn'>
                <button id='btn' onClick={registerHandler}>Register</button>
            </div>
            <div className='login-footer'>
                <span>Already registerd?</span>
                <button className='r-btn' onClick={()=>{setToggle(false)}}>Login</button>
            </div>

        </div>
      
    </div>}
  </>
   
  )
}
