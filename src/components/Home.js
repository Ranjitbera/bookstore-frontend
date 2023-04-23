import React, { useState } from 'react'
import Main from './Main'
import AddBook from './AddBook'

export default function Home() {
    const [toggle1,setToggle1] = useState(true)
  return (
    <div>
        {toggle1?
            <Main setToggle1={setToggle1}/>:<AddBook setToggle1={setToggle1}/>
        }
    </div>
  )
}
