// app/routes/users/index.tsx
import { Link } from "@remix-run/react";


export default function UsersIndex() {
  // Example static users list
  

  return (
    <div>
      <h1>Users List</h1>
      {/* Link to the new user form */}
      <Link to="/new" className="underline text-blue-700">Create a New User</Link>

      {/* Render the list of users */}
      
    </div>
  );
}
