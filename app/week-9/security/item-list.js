"use client"
import React, { useState, useEffect } from 'react';
import Item from "./item";
// import data from "./items.json";
import { getDocs, query, collection } from 'firebase/firestore';
import { db } from '../_utils/firebase';
// import {fetchMealIdeas} from "./meal-ideas.js";



const items_array = [];



// const q = query(collection(db, "users", user["user"]["uid"], "items"))
// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//     console.log(doc.data());
//     items_array.push(doc.data());
// })
//Updates and adds everything to the array from JSON file


// export function appendItemsArray(item) {
//     items_array.push(item);
// };


export default function ItemList({user, mealFunction, setNewItemAdded, newItemAdded}){
    let [sortBy="name", setSortBy] = useState();
    const [render, setRender] = useState(items_array);
    // console.log(`IL-USER: ${user}`)
    // console.log(`IL-MEALFUNC: ${mealFunction}`)
    const getIngredientID = (id) => {
        console.log("Item ID: ",id);
        items_array.forEach(item => {
            if (item.id == id){
                var text = item.name
                // console.log(`Selecting item: ${text.slice(0,text.indexOf(","))}`)
                if(text.indexOf(",")!=-1){
                    mealFunction(text.slice(0,text.indexOf(",")).toLowerCase());
                }else{
                    mealFunction(text.toLowerCase());
                }
            } 
        });
    }

    
    

    const sortChanger = () => {
        if (sortBy == "name"){
            items_array.sort((a,b) => a.category.localeCompare(b.category));
            console.log(`Changed the sorting logic to: category, Check: ${sortBy}`);
            setSortBy("category");
            setRender(items_array);
            // console.log(items_array);
        } else {
            items_array.sort((a,b) => a.name.localeCompare(b.name));
            console.log(`Changed the sorting logic to: name, Check: ${sortBy}`);
            console.log(items_array);
            setRender(items_array);
            setSortBy("name");
        }
        return sortBy;
    }

    useEffect(()=>{
        async function listAllData(user){
            const q = query(collection(db, "users", user.uid, "items"))
            const querySnapshot = await getDocs(q);
            items_array.splice(0, items_array.length);
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                items_array.push(doc.data());
            })
            setRender(items_array)
        }
        console.log(`Started useEffect code`)
        // console.log(user)
        let active = true;
        listAllData(user);
        setNewItemAdded(false)
        console.log(`USE EFFECT: ${newItemAdded}`)
        return () => {
            active = false;
        };
    },[newItemAdded])

    
    return( 
            <div className="flex-2 mr-8">
                <p className="text-4xl font-thin">You are sorting by: {sortBy}</p>
                <div onClick={() => (sortChanger())} className="border-solid bg-gradient-to-br rounded-xl border-2  border-gradient-to-br  text-center from-indigo-800 font-thin hover:text-black hover:font-bold mb-2 mt-2">Change Sorting</div>
                
                <ul>
                    {render.map((item) => (
                        // eslint-disable-next-line react/jsx-key
                        <li key={item.id}>
                            <div className="border-solid border-indigo-300 rounded-xl border-2 text-center bg-gradient-to-tr from-indigo-600 to-blue-100 mb-2 font-thin">
                                <Item name={item.name} category={item.category} quantity={item.quantity}></Item>
                                <button onClick={() => getIngredientID(item.id)} className="border-2 rounded-lg padding-1 bg-gradient-to-r from-indigo-950 to-blue-700 text-cyan-200 border-indigo-950 hover:text-red-500">I want to make a meal of it!</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    );
}