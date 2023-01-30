import { useState,useEffect } from "react";

const Lists = () => {
    const [lists,setList]=useState([
        {name:"name", age:526,id:1 },
        {name:"name2",age:897654,id:2},
        {name:"name3",age:8974,id:3}     
])
const handleDelete=(id)=>{
    const newLists=lists.filter(list=>list.id!==id)
    setList(newLists)
}
const[name,setName]=useState("name")
useEffect(()=>{
    console.log("first")
},[name])
useEffect(()=>{
    console.log(lists)
})

    return ( 
      
        <div className="lists">
        {lists.map((list)=>(
            <div key={list.id}>
                <h1>Name:{list.name}</h1>
                <p>age:{list.age}</p>
                <button onClick={()=>handleDelete(list.id)}>Delete list</button>

                <button onClick={()=>setName("none")}>Change</button>
                <p>{name}</p>
              
            </div>
        ))}
        </div>
        
     );
}
 
export default Lists;