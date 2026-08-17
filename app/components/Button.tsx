"use client"

import React from 'react'

function Button() {
  return (
    <button className='bg-green-950 p-3 text-center text-white' onClick={()=>{
        alert("Button Clicked")
      }}>Click Meee</button>
  )
}

export default Button
