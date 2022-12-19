import React from "react";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase";



const Home = () => {

  const addTodo = async (e) => {
    e.preventDefault();
    console.log("fuck you")
    try {
      const docRef = await addDoc(collection(db, "todos"), {fuck: "me"});
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  return(
    <div>
      <button onClick={addTodo}>Default</button>;
    </div>
  )
}
export default Home;