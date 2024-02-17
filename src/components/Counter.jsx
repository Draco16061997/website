import React, { useState } from "react";


const Counter = function(){

    const [count, setCount]= useState(0)

    function increment(){
        setCount(count +1)
        console.log(count)
      }
    
      function dec (){
        if (count >0){
          setCount(count-1)
          console.log(count)
        }
    
    
      }


    return (
        <div>
            <h1>{count}</h1>

            <button onClick= {increment} > Increment</button>
            <button onClick= {dec} > Decriment </button>


        </div>




    )
}

export default Counter;