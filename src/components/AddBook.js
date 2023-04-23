import React from 'react'
import "./AddBook.css"
import { useState } from 'react';
import axios from 'axios';

export default function AddBook({setToggle1}) {

  const [title, setTitle] = useState("");
  const [ISBN, setISBN] = useState("");
  const [author, setAuthor] = useState("");
  const [pdate, setPdate] = useState("");
  const [pname, setPname] = useState("");
  const [desc, setDesc] = useState("");

  const submitHandeler = ()=>{
    const userid= localStorage.getItem("myid")
    axios.post("https://bookstore-zm39.onrender.com/upload",{userid,title,ISBN,author,pdate,pname,desc})
    .then((res)=>{
        window.alert("new book added sucesfully")
      setToggle1(true)
    }).catch((err)=>{
        console.log(err)
        window.alert("something went wrong")

    })
  }

  return (
    <div className='addbook-main'>
        <div className='booklist-btn' onClick={()=>{setToggle1(true)}}>Show book List</div>
        <div className='add-title'>
            <h1>Add Book</h1>
            <p>Create new book</p>
            </div>
        <div className='addbookinput'><input placeholder='Title of the book' onChange={(e)=>{setTitle(e.target.value)}}/></div>
        <div className='addbookinput'><input placeholder='ISBN' onChange={(e)=>{setISBN(e.target.value)}}/></div>
        <div className='addbookinput'><input placeholder='Author' onChange={(e)=>{setAuthor(e.target.value)}}/></div>
        <div className='addbookinput'><input placeholder='describe this book' onChange={(e)=>{setDesc(e.target.value)}}/></div>
        <div className='addbookinput'><input placeholder='Published date' onChange={(e)=>{setPdate(e.target.value)}}/></div>
        <div className='addbookinput'><input placeholder='Punlisher of this book' onChange={(e)=>{setPname(e.target.value)}}/></div>
        <div className='submit-btn' onClick={submitHandeler}>Submit</div>
      
    </div>
  )
}
