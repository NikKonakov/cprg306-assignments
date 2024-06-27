'use client'
import React, { useState, useEffect } from "react";

export default function MealIdeas({meal}){

    const [recepies, setRecepies] = useState([]);

    useEffect(() => {
        let active = true;

        const fetchData = async () => {
            console.log(`Loading data for meal '${meal}'`)
            setRecepies([])
            if (meal) {
                try {
                    const response = await fetch(
                        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`);
                    if (!response.ok){
                        console.log(`HTTP error! Status: '${response.status}'`);
                    }
                    const data = await response.json();
                    setRecepies(data.meals)
                } catch (e) {
                    console.log(`fetchMealIdeas:Catched an error - ${e.message}`);
                }
            }
        };

        fetchData();
        return () => {
            active = false;
        };
    }, [meal])

    return(
        <div>
            {
                recepies.map((recipe) => (
                <div key={recipe.idMeal}>
                    <p>Name: {recipe.strMeal}</p>
                    <p>Recipe ID: {recipe.idMeal}</p>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
                </div>))
            }
        </div>
    );
}