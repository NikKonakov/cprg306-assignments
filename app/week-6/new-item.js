"use client"
import React, {useState} from "react";
import { appendItemsArray } from "./item-list";



export default function NewItem(){
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
    <div class="ml-12 mt-8">
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
            <div>
                <button class="bg-gray-200 ml-12 p-1 border-style:solid border-2 border-black hover:border-red500 hover:font-bold active:border-red-800 active:bg-purple-500 rounded-lg" onClick={(event) => handleSubmit(event.target.onClick)}>Submit</button>
            </div>
        </form>
    </div>
    );
}
