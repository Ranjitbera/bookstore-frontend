
import React, { useState } from 'react'
import "./Main.css"
import Card from './Card'
import BooksRecord from './BooksRecord'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Main({setToggle1}) {
  const nav1 = useNavigate()
const[toggle2,setToggle2] = useState(true)

const [data,setData] = useState([])
const [record,setRecord] = useState({})


useEffect(() => {
  const userid = localStorage.getItem("myid")
  console.log(userid)
  axios.post("https://bookstore-zm39.onrender.com/mybook",{userid})
      .then((res) => {
          setData(res.data)
      }).catch((err) => {
          console.log(err)
          window.alert("something went wrong")

      })
}, []);
console.log(data);

const logoutHandeler = () =>{
  const newToken=localStorage.getItem("mytoken")
  axios.post("https://bookstore-zm39.onrender.com/logout",{newToken})
      .then((res)=>{
        if(res.status==200){
          window.alert("logout sucessfully")
          localStorage.clear()
          nav1("/")
          
         }
      }).catch((err)=>{
          console.log(err)
          window.alert("error in signout")

      })
}

  return (
    <>{toggle2?
        <>
    <div>
    <div className='main-main'>
        <h1>Books List</h1>
        <button onClick={logoutHandeler}>Logout</button>

    </div>
    <div className='addnewbook-btn' onClick={()=>setToggle1(false)}>
        + Add new book
    </div>
    </div>
    <div className='main-lower'>

      {
        data.map((data)=>{
          return <Card data={data} setToggle2={setToggle2} setRecord={setRecord}/>
        })
      }
    
    </div>
    </>:
    

    <BooksRecord setToggle2={setToggle2} record={record}/>}
    </>
   
  )
}
