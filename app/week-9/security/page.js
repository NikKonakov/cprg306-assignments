'use client'
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context.js";
import React, { useState } from "react";
import Link from "next/link.js";
import items from "./items.json";


export default function Page(){

    const [meal, setMeal] = useState('');
    const [newItemAdded, setNewItemAdded] = useState(false);
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

    // function getUserDetails(){
    //     console.log(user)
    // }

    // async function createNewUser(){
    //     const docRef = doc(db, "users", user.uid);
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    //     } else {
    //         setDoc(docRef,{
    //             EMAIL: user.email,
    //             DNAME: user.displayName
    //         }); 
    //     // docSnap.data() will be undefined in this case
    //     console.log("No such document!\nCreating a new one");
    //     }
    // }

    // async function importShoppingList(){
    //     items.forEach(item => {
    //         var docRef = doc(db, "users", user.uid, "items", item.id);
    //         setDoc(docRef,{
    //             id: item.id,
    //             category: item.category,
    //             name: item.name,
    //             quantity: item.quantity
    //         });   
    //     });
    // }

    // async function createDocument(){
    //     setDoc(doc(db, "users", "testUser"), {
    //         name: "Test",
    //         status: "Admin",
    //         state: "Unknown",
    //         uid: user.uid +"123TEstingPurpast"
    //       })
    //     console.log("New document to the DB has been created")
    // }


    return(
        <main>
            {user?(
                <div>
                    <button className="text-lg text-emerald-700 font-thin border-2 border-blue-700 hover:invert mt-4 rounded-lg hover:bg-blue-300" onClick={()=>(signOut())}>Sign Out</button>
                    <NewItem 
                    newItemAdded={newItemAdded}
                    setNewItemAdded={setNewItemAdded}
                    user={user} 
                    />
                    {/* <button className="border-2 rounded-xl border-black" onClick={()=>getUserDetails()}>Print User Details</button>
                    <p>{user.uid}</p>
                    <button className="border-2 rounded-xl border-black" onClick={()=>createDocument()}>Create a new document in firebase</button>
                    <br></br>
                    <button className="border-2 rounded-xl border-black" onClick={()=>(createNewUser())}>Create a new User in the database</button>
                    <br></br>
                    <button className="border-2 rounded-xl border-black" onClick={()=>(importShoppingList())}>Import JSON</button> */}
                    <div className="flex">
                        <ItemList
                        mealFunction={setMeal} 
                        user={user} 
                        setNewItemAdded={setNewItemAdded}
                        newItemAdded={newItemAdded}
                        />
                        <MealIdeas 
                        meal={meal}
                        />
                    </div>
                </div>
                ):
                (<div className="text-center ">
                    <p className="text-xl mb-4">
                       Hi, this is login Page.
                    </p>
                    <button className="border-black border-2 rounded-lg p-1" onClick={()=>(signIn())}>Sign In</button>
                    <br></br>
                    <Link className="text-xl mb-4 text-amber-600 hover:invert" href={"../week-9"}>Go Back to the Main Page</Link>
                </div>)}
        </main>
    );
}