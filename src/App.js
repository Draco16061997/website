import React, { useState } from 'react';


function App() {
  

  const [likes, setlikes] = useState(0)


  const [value, setValue] = useState('text')

  function increment(){
    setlikes(likes +1)
    console.log(likes)
  }

  function dec (){
    if (likes >0){
      setlikes(likes-1)
      console.log(likes)
    }


  }


  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick= {increment} > Increment</button>
      <button onClick= {dec} > Decriment </button>
      <h1>{value}</h1>
      <input 
        type='text' 
        value={value}
        onChange={event => setValue(event.target.value)}
        />


     



    </div>
  );
}

export default App;
