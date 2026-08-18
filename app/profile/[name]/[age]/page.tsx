import React from 'react'

type profileAgeProps = { 
    params: Promise<{name: string , age:number}>
}

async function page({params}: profileAgeProps) {
    const profileprams = await params
    const userName = profileprams.name
    const userAge = profileprams.age
     const users = [
        {
            id: 12,
            name: "Abdullah",
            age: 12,
            email: "umairDev@gmial.com",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ab dolorum nobis ducimus voluptatum voluptates suscipit delectus assumenda numquam earum!"
        },
        {
            id: 123,
            name: "Abdullah",
            age: 23,
            email: "abdul@gmial.com",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ab dolorum nobis ducimus voluptatum voluptates suscipit delectus assumenda numquam earum!"
        },
        {
            id: 1234,
            name: "Abdullah",
            age: 34,
            email: "salik@gmial.com",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ab dolorum nobis ducimus voluptatum voluptates suscipit delectus assumenda numquam earum!"
          },
        ]
        const currentUser = users.find(user=>user.name.toLocaleLowerCase() === userName.toLocaleLowerCase() && user.age == userAge)

        if(!currentUser){
          return(
            <div>
              <h1>User Not Found </h1>
            </div>
          )
        }
  return (
    <div>
      <h1>{currentUser.name}</h1>
      <h1>{currentUser.age}</h1>
      <h1>{currentUser.bio}</h1>
    </div>
  )
}

export default page
