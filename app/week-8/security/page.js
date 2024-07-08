'use client'
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context.js";
import React, { useState } from "react";
import Link from "next/link.js";

export default function Page(){

    const [meal, setMeal] = useState('');
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
        <main>
            {user?(
                <div>
                    <button className="text-lg text-emerald-700 font-thin border-2 border-blue-700 hover:invert mt-4 rounded-lg hover:bg-blue-300" onClick={()=>(signOut())}>Sign Out</button>
                    <NewItem></NewItem>
                    <div className="flex">
                        <ItemList mealFunction={setMeal}></ItemList>
                        <MealIdeas meal={meal}></MealIdeas>
                    </div>
                </div>
                ):
                (<div className="text-center ">
                    <p className="text-xl mb-4">
                       Hi, this is login Page.
                    </p>
                    <button className="border-black border-2 rounded-lg p-1" onClick={()=>(signIn())}>Sign In</button>
                    <br></br>
                    <Link className="text-xl mb-4 text-amber-600 hover:invert" href={"../week-8"}>Go Back to the Main Page</Link>
                </div>)}
        </main>
    );
}