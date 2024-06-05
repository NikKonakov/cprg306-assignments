function Item({name, quantity, category}){
    return (
            <div className="border-4 border-style:solid border-blue-300 rounded-lg w-1/6 p-1">
            <ul className="text-indigo-600 hover:font-bold">{name}</ul>
            <li className="text-red-500 hover:text-red-900 hover:font-bold hover:font-serif">Buy {quantity} in {category}</li>
            </div>
        );
}

export default Item;
/* class Item {
    constructor(name, quantity, category){
        this.name = name
        this.quantity = quantity
        this.category = category
    }
} */

// function DisplayAsList (item){
//     return (
//     <div>
//     <li>{item.name}</li>
//     <li>Quantity: {item.quantity}</li>
//     <li>Category: {item.category}</li>
//     </div>
//     );
            
// }