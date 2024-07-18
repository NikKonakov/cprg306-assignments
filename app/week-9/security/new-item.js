"use client"
import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {setDoc, getDoc, doc} from "firebase/firestore";
import { db } from "../_utils/firebase";




export default function NewItem({user, setNewItemAdded, newItemAdded}){
    const [render, setRender] = useState(false);
    let [name, setName] = useState("");
    let [quantity, setQuantity] = useState(1);
    let [categoryArrayIndex, setCategory] = useState(0);
    const categoryArray = ["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"]
    const arrayIndexToLeft = () => {
        if (categoryArrayIndex > 0) {
            setCategory(categoryArrayIndex - 1);
        }
    }

    const showUser = (user) => {
        console.log(user)
    }

    const arrayIndexToRight = () => {
        if (categoryArrayIndex < categoryArray.length - 1) {
            setCategory(categoryArrayIndex + 1);
        }
    }

    // async function getUUID(user, uuid){
    //     console.log("USER=" + JSON.stringify(user, null, 4))
    //     console.log("USER_ID=" + user["user"]["uid"])
    //     uuid = uuidv4();
        
    // }

    const generateUuid = async (user) => {
        let uuid = uuidv4();
        // console.log(`UUID: ${uuid}`)
        let newUuid = uuid.replace(/-/g,"");
        const docRef = doc(db, "users", user.uid, "items", newUuid);//, user.uid, "items", uuid
        const docSnap = await getDoc(docRef);
        // console.log("DOCSNAP="+docSnap.exists())
        
        if (!docSnap.exists()){
            console.log(`New UUID: ${newUuid}`)
            // console.log(`Recursion Has Finished`)
            return(newUuid);
        } else{
            await generateUuid(user);
        }
    };

    const handleSubmit = async (user, newItemAdded) => {
        if (name != ""){
            let newUuid = await generateUuid(user);
            // console.log(`SUBMIT: ${newUuid}`);
            const item = {
                name: name,
                quantity: quantity,
                category: categoryArray[categoryArrayIndex],
                id: newUuid
            };
            // console.log(`ITEM: ${JSON.stringify(item, null, 4)}`);
            // console.log(doc(db, "users", user["user"]["uid"], "items", newUuid));
            const docRef = doc(db, "users", user.uid, "items", newUuid);//, user.uid, "items", uuid
            setDoc(docRef, item)
            setName("");
            setQuantity(1);
            setCategory(0);
            setNewItemAdded(true);
        }
    }
    return(
    <>
        <div class="mt-4">
            {render ? (
            <><div className="border-2 rounded-lg border-black w-1/12 text-center font-extralight text-yellow-500 bg-black hover:text-yellow-300 active:text-white" onClick={()=>setRender(false)}><p>Hide</p></div>
            <button onClick={()=>(showUser(user))}>Get USER</button>
            <br />
            <form>
                <div class="flex items-center">
                    <p class="font-thin">Item Name: </p>
                    <input class="ml-4 font-thin border-style:solid border-2 border-black rounded-lg" placeholder="Enter item's name..."type="text" value={name} onChange={(event) => setName(event.target.value)} required></input>
                </div>
                <div class="flex items-center">
                    <p class="font-thin">Quantity: </p>
                    <input class="ml-4 font-thin text-center border-style:solid border-2 border-black rounded-lg"type="number" min={1} max={99} value={quantity} onChange={() => (setQuantity())} required></input>
                </div>
                <div class="flex items-center">
                    <input class="flex items-center border-style:solid border-2 border-black rounded-lg font-thin text-center"type="text" value={categoryArray[categoryArrayIndex]} onChange={() => (setCategory())} readOnly></input>
                    <button class="border-4 border-style:solid border-purple-300 mr-4 hover:border-purple-600 hover:font-bold bg-inherit active:border-purple-900 rounded-lg"type="button"onClick={arrayIndexToLeft}>Go Left</button>
                    <button class="border-4 border-style:solid border-purple-300 mr-4 hover:border-purple-600 hover:font-bold bg-inherit active:border-purple-900 rounded-lg" type="button" onClick={arrayIndexToRight}>Go Right</button>
                </div>
                <div className="bg-gray-200 p-1 border-style:solid border-2 border-black hover:border-green-700 hover:animate-pulse active:animate-ping hover:font-light active:border-red-800 active:bg-purple-500 rounded-lg text-center bg-gradient-to-br from-purple-800 to-teal-300 w-5/12 font-extralight" onClick={(()=>(handleSubmit(user, setNewItemAdded, newItemAdded)))}>
                    <button>Submit</button>
                </div>
            </form></>
            ):(
                <div className="border-2 rounded-lg border-black w-1/12 text-center font-extralight text-yellow-500 bg-black hover:text-yellow-300 active:text-white" onClick={()=>setRender(true)}><p>Show</p></div>
                )}
        </div>
    </>
    );
}
