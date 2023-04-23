import React from 'react'
import "./BooksRecord.css"
export default function BooksRecord({setToggle2,record}) {
  return (
    <div className='record-main'>
    <div onClick={()=>{setToggle2(true)}}  className='booklist-btn'>Show Book List</div>
    <div className='add-title'><h1>Book's Record</h1>
    <p>view book's info</p>
    </div>
    <div className='record-info'>1 Title:  {record.title}</div>
    <div className='record-info'>2 Author: {record.author}</div>
    <div className='record-info'>3 ISBN: {record.ISBN}</div>
    <div className='record-info'>4 Publisher: {record.pname}</div>
    <div className='record-info'>5 Published Date: {record.pdata}</div>
    <div className='record-info'>6 Description: {record.desc}</div>
    <div className='record-btn'><span className='delete-btn'>Delete Book</span><span className='edit-btn'>Edit Book</span></div>
    </div>
  )
}
