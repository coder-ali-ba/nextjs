type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};



async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
  
  return (
    <div>
      <h1>Hello This is Classroom Page</h1>
      <ul>
        {users.map((user: User) => {
            return <li key={user.id}><h1>{user.name}</h1><h2>{user.username}</h2></li>;
        })}
      </ul>
    </div>
  );
}

export default page;
