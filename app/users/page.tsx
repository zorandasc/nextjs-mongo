import React from 'react';
import AddUserForm from '../components/AddUserForm';
import UsersList from "../components/UsersList"
import clientPromise from "../lib/mongodb";

const page = async() => {
    let users:any;
    try {
        const client = await clientPromise;
        const db = client.db("test");
        users = await db
            .collection("users")
            .find({})
            .toArray();
        
        users= JSON.parse(JSON.stringify(users))
        
    } catch (e) {
        console.error(e);
    }

    return (
        <main className='text-center pt-16 px-5'>
            <AddUserForm></AddUserForm>
            <h1 className='text-5xl font-semibold mb-7'>SVI KORISNICI</h1>
            <UsersList users={users}></UsersList>
        </main>   
        
        );
};

export default page;