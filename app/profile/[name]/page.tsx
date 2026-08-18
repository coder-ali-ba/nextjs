import React from 'react'

type profileProps ={
  params: Promise<{name: string}>
}

async function page({params}: profileProps) {
   const pageParams = await params
   const userName = pageParams.name
  
  const users = [
        {
            id: 12,
            name: "Umair",
            email: "umairDev@gmial.com",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ab dolorum nobis ducimus voluptatum voluptates suscipit delectus assumenda numquam earum!"
        },
        {
            id: 123,
            name: "Abdullah",
            email: "abdul@gmial.com",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ab dolorum nobis ducimus voluptatum voluptates suscipit delectus assumenda numquam earum!"
        },
        {
            id: 1234,
            name: "Mehfooz",
            email: "salik@gmial.com",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ab dolorum nobis ducimus voluptatum voluptates suscipit delectus assumenda numquam earum!"
          },
        ]
        const currentUser = users.find(user=>user.name.toLocaleLowerCase() === userName.toLocaleLowerCase())

        if(!currentUser){
          return(
            <div>
              <h1>User Not Found </h1>
            </div>
          )
        }
    
  return (
    <div>
      <h1>{currentUser?.name}</h1>
      <h3>{currentUser?.email}</h3>
      <h4>{currentUser?.bio}</h4>
    </div>
  )
}

export default page
