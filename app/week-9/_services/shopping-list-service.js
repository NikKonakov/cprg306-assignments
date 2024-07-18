import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, setDoc, doc, query } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const q = query(
    collection(db, "users", user.uid, "items"),
    where("quantity", ">", 1)
)

async function checkAndCreateUser(user){
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data()); //For testing
    } else {
        setDoc(docRef,{
            EMAIL: user.email,
            DNAME: user.displayName
        }); 
    // docSnap.data() will be undefined in this case
    console.log("No such document!\nCreating a new one");
    }
}

async function getItems(user){
    checkAndCreateUser(user) //Authentification
    const docRef = doc(db, "users", user.uid, "items");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Items:", docSnap.data());
    }else {
        console.log("No data found")
    }
}

async function addItem(user, item){
    const docRef = doc(db, "users", user.uid, "items", newUuid);
    console.log("Adding new Item")
    addDoc(docRef,{
        quantity: item.quantity,
        name: item.name,
        category: item.category,
        id: item.id
    })
}

export {addItem, getItems}; 