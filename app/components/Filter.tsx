"use client"
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};
import React, { useState } from 'react'

function Filter({users}: {users: User[]}) {
    
    const [searchTerm , setSearchTerm]= useState("")

    const filteredUsers = users.filter(user=>{
      return user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    })
   
  return (
    <div>
      <input type="text"
       value={searchTerm}
       onChange={(e)=>setSearchTerm(e.target.value)}
       className='bg-gray-500 text-amber-50 outline-none border-none'
      />
      <ul>
        {filteredUsers.map((user: User)=>{
          return(
            <li key={user.id}>{user.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Filter
