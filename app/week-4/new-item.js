"use client"
import React, {useState} from "react"

export function NewItem(){
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
            alert(`Object has been created!\n{\n   Name: ${item.name}\n   Quantity: ${item.quantity}\n   Category: ${item.category}\n};`);
            name = "";
            quantity = 1;
            categoryArrayIndex = 0;
        }
    }
    return(
    <div class="m-4">
        <form>
            <div class="flex items-center">
                <p>Item Name: </p>
                <input class="ml-4" placeholder="Enter item's name..."type="text" value={name} onChange={(event) => setName(event.target.value)} required></input>
            </div>
            <div class="flex items-center">
                <p>Quantity: </p>
                <input class="ml-4"type="number" min={1} max={99} value={quantity} onChange={(event) => setQuantity(event.target.value)} required></input>
            </div>
            <div class="flex items-center">
                <input class="flex items-center bg-red-100"type="text" value={categoryArray[categoryArrayIndex]} onChange={(event) => setCategory(event.target.value)} readOnly></input>
                <button class="border-4 border-style:solid border-purple-300 mr-4 hover:border-purple-600 hover:font-bold bg-inherit active:border-purple-900"type="button"onClick={arrayIndexToLeft}>Go Left</button>
                <button class="border-4 border-style:solid border-purple-300 mr-4 hover:border-purple-600 hover:font-bold bg-inherit active:border-purple-900" type="button" onClick={arrayIndexToRight}>Go Right</button>
            </div>
            <div>
                <button class="bg-gray-200 ml-12 p-1 border-style:solid border-2 border-black hover:border-red500 hover:font-bold active:border-red-800 active:bg-purple-500" onClick={(event) => handleSubmit(event.target.onClick)}>Submit</button>
            </div>
        </form>
    </div>
    );
}

export default NewItem;