import { json } from "@remix-run/node"; //import json utility for return json response
import prisma from "../db"; //import prisma for db interaaction
import { useLoaderData } from "@remix-run/react";

//define a loader function to fetch users from database name should be loader for recognize in remix

export const loader = async () =>{
    //fetch all user from database using prisma
    
    const users = await prisma.user.findMany(); 
    
    return json(users); //return the fetch user as json

};

//default export of the user component
export default function Users(){

const users = useLoaderData(); //get the user data return from the loader
console.log("users",users);
//render the user data

return(
    <div>
        <h1>User List</h1>
            <ul>
                                {   users && users.length > 0 &&
                    users.map((user,index)=>{
                       return(<li key={index}>
                           
                        {user.name} -  {user.email}
                           
                        </li>)
                    })
                }
    </ul>
    </div>

)
}







