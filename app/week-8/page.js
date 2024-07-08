'use client'
import Link from "next/link.js";
import { useUserAuth } from "./_utils/auth-context.js";
import { createContext, useEffect } from "react";
export default function Page(){

    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
   
    async function signIn(){
        try{
            console.log(user);
            await gitHubSignIn();
        }
        catch(error){
            console.log(error)
        }

    }

    async function signOut(){
            
        try{
            await firebaseSignOut();
        }
        catch(error){
            console.log(error)
        }
    }


    return(
        // Display some of the user's information
        <div>
            {user?(
            <div className="text-center">
                <p className="text-4xl m-8">
                Welcome, {user.displayName} ({user.email})
                </p>
                <Link className="text-2xl text-amber-500 hover:invert hover:border-2 hover:bg-blue-800 hover:border-amber-600 rounded-lg m-4 p-2" href="./week-8/security">You can access Shopping List</Link>
                <br></br>
                <button className="border-black border-2 rounded-lg p-2 m-4 hover:invert hover:bg-white" onClick={()=>(signOut())}>Sign Out</button>
            </div>
            ):(
            <div className="text-center ">
                <p className="text-3xl mb-4">You are on the main page</p>
                <p className="text-xl mb-4">
                   Hi, this is login Page.
                </p>
                <button className="border-black border-2 rounded-lg p-1" onClick={()=>(signIn())}>Sign In</button>
            </div>
        )}
        </div>
        
    );
}

