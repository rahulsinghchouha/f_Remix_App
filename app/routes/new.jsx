import { redirect } from "@remix-run/node";
import prisma from "../db";

//action function to handle the form submission

export const action = async ({ request }) => {
    const formData = await request.formData(); //extract form data from the request
    const email = formData.get("email"); //get the email
    const name = formData.get("name"); //get the name

    console.log("Email , name ",email,name);
  // Basic validation
  
    //create a new user in the database

    await prisma.user.create({
        data: {
            email,
            name,
        },

    })
    //redirect to the users list page after creating the user

    return redirect("/users");

}

//component for rendering the form
export default function NewUser() {
    return (
        <form method="post" className="flex flex-col justify-center items-center ">
            <label>
                Email:
                <input type="email" name="email" required className="border-2 border-blue-500"/>
            </label>
            <br/>
            <br/>
            
            <label>
                Name:
                <input type="text" name="name" required className="border-2 border-blue-500"/>
            </label>
            <br/>
            <br/> <br/>
            <button type="submit" className="bg-blue-500 text-white font-bold py-1 px-2 rounded -ml-[%8]">Create User</button>
        </form>

    )
}


