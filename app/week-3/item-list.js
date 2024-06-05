import Item from "./item.js";

let items =[
{
  name: "milk, 4 L 🥛",
  quantity: 1,
  category: "dairy",
},
{
  name: "bread 🍞",
  quantity: 2,
  category: "bakery",
},
{
  name: "eggs, dozen 🥚",
  quantity: 2,
  category: "dairy",
},
{
  name: "bananas 🍌",
  quantity: 6,
  category: "produce",
},
{
  name: "broccoli 🥦",
  quantity: 3,
  category: "produce",
},
{
  name: "chicken breasts, 1 kg 🍗",
  quantity: 1,
  category: "meat",
},
{
  name: "pasta sauce 🍝",
  quantity: 3,
  category: "canned goods",
},
{
  name: "spaghetti, 454 g 🍝",
  quantity: 2,
  category: "dry goods",
},
{
  name: "toilet paper, 12 pack 🧻",
  quantity: 1,
  category: "household",
},
{
  name: "paper towels, 6 pack",
  quantity: 1,
  category: "household",
},
{
  name: "dish soap 🍽️",
  quantity: 1,
  category: "household",
},
{
  name: "hand soap 🧼",
  quantity: 4,
  category: "household",
},
]


const item1 = {
  name: "milk, 4 L 🥛",
  quantity: 1,
  category: "dairy",
};
 
const item2 = {
  name: "bread 🍞",
  quantity: 2,
  category: "bakery",
};
 
const item3 = {
  name: "eggs, dozen 🥚",
  quantity: 2,
  category: "dairy",
};
 
const item4 = {
  name: "bananas 🍌",
  quantity: 6,
  category: "produce",
};
 
const item5 = {
  name: "broccoli 🥦",
  quantity: 3,
  category: "produce",
};
 
const item6 = {
  name: "chicken breasts, 1 kg 🍗",
  quantity: 1,
  category: "meat",
};
 
const item7 = {
  name: "pasta sauce 🍝",
  quantity: 3,
  category: "canned goods",
};
 
const item8 = {
  name: "spaghetti, 454 g 🍝",
  quantity: 2,
  category: "dry goods",
};
 
const item9 = {
  name: "toilet paper, 12 pack 🧻",
  quantity: 1,
  category: "household",
};
 
const item10 = {
  name: "paper towels, 6 pack",
  quantity: 1,
  category: "household",
};
 
const item11 = {
  name: "dish soap 🍽️",
  quantity: 1,
  category: "household",
};
 
const item12 = {
  name: "hand soap 🧼",
  quantity: 4,
  category: "household",
};



function ItemList() {
  // <Item name={item1.name} quantity={item1.quantity} category={item1.category}></Item>
  // items.forEach(function(name, quantity, category){
  // return(<Item name={name} quantity={quantity} category={category}></Item>)
  // });
  return (
    <div>
      {items.map((item) => (
        <Item name={item.name} category={item.category} quantity={item.quantity} />
      ))}
    </div>
  );
}

export default ItemList