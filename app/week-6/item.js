export default function Item({name, quantity, category}){
    return(
    <div>
        <h2>Name: {name}</h2>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
    </div>
    );
}
