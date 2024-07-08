"use client"
import React, {useState} from "react";
import { appendItemsArray } from "./item-list";



export default function NewItem(){
    const [render, setRender] = useState(false);
    var [name, setName] = useState("");
    var [quantity, setQuantity] = useState(1);
    var [categoryArrayIndex, setCategory] = useState(0);
    const categoryArray = ["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"]
    const arrayIndexToLeft = () => {
        if (categoryArrayIndex > 0) {
            setCategory(categoryArrayIndex - 1);
        }
    }
    const arrayIndexToRight = () => {
        if (categoryArrayIndex < categoryArray.length - 1) {
            setCategory(categoryArrayIndex + 1);
        }
    }
    const handleSubmit = () => {
        if (name != ""){
            const item = {
                name: name,
                quantity: quantity,
                category: categoryArray[categoryArrayIndex]
            };
            console.log(`A new object has been created, with name: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`);
            appendItemsArray(item);
            console.log(`${item.name}, has been added to the array.`)
            setName("");
            setQuantity(1);
            setCategory(0);
        }
    }
    return(
    <>
        <div class="mt-4">
            {render ? (
            <><div className="border-2 rounded-lg border-black w-1/12 text-center font-extralight text-yellow-500 bg-black hover:text-yellow-300 active:text-white" onClick={()=>setRender(false)}><p>Hide</p></div>
                <form>
                <div class="flex items-center">
                    <p class="font-thin">Item Name: </p>
                    <input class="ml-4 font-thin border-style:solid border-2 border-black rounded-lg" placeholder="Enter item's name..."type="text" value={name} onChange={(event) => setName(event.target.value)} required></input>
                </div>
                <div class="flex items-center">
                    <p class="font-thin">Quantity: </p>
                    <input class="ml-4 font-thin text-center border-style:solid border-2 border-black rounded-lg"type="number" min={1} max={99} value={quantity} onChange={(event) => setQuantity(event.target.value)} required></input>
                </div>
                <div class="flex items-center">
                    <input class="flex items-center border-style:solid border-2 border-black rounded-lg font-thin text-center"type="text" value={categoryArray[categoryArrayIndex]} onChange={(event) => setCategory(event.target.value)} readOnly></input>
                    <button class="border-4 border-style:solid border-purple-300 mr-4 hover:border-purple-600 hover:font-bold bg-inherit active:border-purple-900 rounded-lg"type="button"onClick={arrayIndexToLeft}>Go Left</button>
                    <button class="border-4 border-style:solid border-purple-300 mr-4 hover:border-purple-600 hover:font-bold bg-inherit active:border-purple-900 rounded-lg" type="button" onClick={arrayIndexToRight}>Go Right</button>
                </div>
                <div className="bg-gray-200 p-1 border-style:solid border-2 border-black hover:border-green-700 hover:animate-pulse active:animate-ping hover:font-light active:border-red-800 active:bg-purple-500 rounded-lg text-center bg-gradient-to-br from-purple-800 to-teal-300 w-5/12 font-extralight" onClick={(event) => handleSubmit(event.target.onClick)}>
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
