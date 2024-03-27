import React from 'react';
import clientPromise from "../lib/mongodb";
import { revalidatePath } from 'next/cache';
import SubmitButton from './SubmitButton';

const AddUserForm = () => {
    const addUser=async(formData: FormData)=>{
        "use server"

        //await new Promise((resolve)=>setTimeout(resolve, 3000))
        let user;
        try {
            const client = await clientPromise;
            const db = client.db("test");
            user = await db
                .collection("users")
               .insertOne({name:formData.get("name"), age:formData.get("age")})
            revalidatePath("/users")
            
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <div className="max-w-xs my-12 mx-auto text-red">
    
        <form className="flex flex-col text-red" action={addUser}>
          <label htmlFor="name">ENTER NAME</label>
          <input
            type="text"
            name="name"
            id="name"
            className="text-black"
            required
          ></input>
  
          <label htmlFor="age">ENTER AGE</label>
          <input
            type="number"
            name="age"
            id="age"
            className="text-black"
            required
          ></input>
        <SubmitButton></SubmitButton>
        </form>
      </div>
    );
};

export default AddUserForm;