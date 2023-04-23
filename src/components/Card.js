import React from 'react'
import "./Card.css"
export default function Card({setToggle2,data, setRecord}) {
  return (
    <div className='card-main' onClick={()=>{setToggle2(false)
    setRecord(data)}}>
        <div className='header'>
            img not available
            </div>
        <div className='book-tittle'>{data.title}</div>
        <div className='book-author'>{data.author}</div>
        <div className='book-desc'>{data.desc}</div>
    </div>
  )
}
