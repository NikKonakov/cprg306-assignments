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
                    if (data.meals != null){
                        setRecepies(data.meals)}
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
        <div className="flex-1 w-96">
            {recepies.length > 0 &&
            
            <div className="flex-1  overflow-y-scroll h-screen p-4 border-2 border-black rounded-xl bg-black">
                <p className="text-3xl font-thin text-center text-yellow-700">List of fetched Recepies</p>
                <p className="font-extralight pl-4 text-yellow-500">Scroll me!</p>
                {
                    recepies.map((recipe) => (
                    <div className="border-2 rounded-sm border-yellow-950 m-4 bg-inherit flex flex-col " key={recipe.idMeal} >
                        <p className="font-light text-xl text-yellow-700 text-center">Name: {recipe.strMeal}</p>
                        <p className="font-extralight text-yellow-500">Recipe ID: {recipe.idMeal}</p>
                        <img className="" src={recipe.strMealThumb} alt={recipe.strMeal}></img>
                    </div>))
                }
            </div>}
        </div>
    
    );
}