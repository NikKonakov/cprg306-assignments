"use client"
import React, { useState } from 'react';
import Item from "./item";
import data from "./items.json";


let items_array = [];

//Updates and adds everything to the array from JSON file
data.forEach(item => {
    items_array.push(item);
});

export function appendItemsArray(item) {
    items_array.push(item);
};



export default function ItemList(){
    let [sortBy="name", setSortBy] = useState();
    const sortChanger = () => {
        if (sortBy == "name"){
            items_array.sort((a,b) => a.category.localeCompare(b.category));
            console.log(`Changed the sorting logic to: category, Check: ${sortBy}`);
            setSortBy("category");
            setRender(items_array);
            console.log(items_array);
        } else {
            items_array.sort((a,b) => a.name.localeCompare(b.name));
            console.log(`Changed the sorting logic to: name, Check: ${sortBy}`);
            console.log(items_array);
            setRender(items_array);
            setSortBy("name");
        }
        return sortBy;
    }
    const [render, setRender] = useState(items_array);
    
    return( 
        <div className="ml-8">
            <p className="text-4xl font-thin mt-4 ml-6">You are sorting by: {sortBy}</p>
            <div onClick={(event) => sortChanger(event.target.onClick)} className="border-solid bg-gradient-to-br rounded-xl border-2 w-1/4 border-gradient-to-br  text-center from-indigo-800 font-thin hover:text-black hover:font-bold mb-2 mt-2">Change Sorting</div>
            {render.map((item) => (
                <div className="border-solid border-indigo-300 rounded-xl border-2 w-1/4 text-center bg-gradient-to-tr from-indigo-600 to-blue-100  hover:text-red-500 mb-2 font-thin">
                    <Item name={item.name} category={item.category} quantity={item.quantity}></Item>
                </div>
            ))}
        </div>
    );
}