import Filter from "@/app/components/Filter";



async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
  
  return (
    <div>
      <h1>Hello This is Classroom Page</h1>
      <Filter users={users}/>
    </div>
  );
}

export default page;
