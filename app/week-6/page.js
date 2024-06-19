'use client'
import ItemList from "./item-list";
import NewItem from "./new-item.js";


export default function Page(){
    return(
        <main>
            <NewItem></NewItem>
            <ItemList></ItemList>
        </main>
    );
}