import Item from "./item.js";
import ItemList from "./item-list.js";
import styles from "../styles/globals.css"

export default function Page(){
    return(
    <main class="bg-blue-100 pl-20 pt-8 ">
        <h1 class="font-bold text-4xl text-blue-700 mb-4">Shopping List</h1>
        <ul class="font-bold text-2xl text-indigo-800 mb-8">List Items</ul>
        <ItemList></ItemList>
    </main>
    );
}