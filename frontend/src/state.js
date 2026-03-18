import { useState } from "react"
import './state.css'

const State=()=>
{
    const[apple,setApple]=useState("Apple")

const handlechange=()=>{
setApple(apple === "Apple" ? "Banana" : "Apple");
}



return(

<div className="apple">
    <div> 
        <button id="button"  onClick={handlechange}>
        <p>{apple}</p></button></div>
</div>
)

}
export default State

