'use client'
import ItemList from "./item-list";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas";
import React, { useState } from "react";

export default function Page(){

    const [meal, setMeal] = useState('');

    return(
        <main>
            <NewItem></NewItem>
            <div className="flex">
                <ItemList mealFunction={setMeal}></ItemList>
                <MealIdeas meal={meal}></MealIdeas>
            </div>
        </main>
    );
}