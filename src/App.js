import React, { useState } from 'react';
// import Postlist from './components/PostList';
import Users from './components/Users';
import './styles/App.css'

function App() {
  
  // const [post] = useState([
  //   {id: 1, title: "JS", body: "js langvage" },
  //   {id: 2, title: "C++", body: "C++ langvage" },
  //   {id: 3, title: "Python", body: "Pytjon langvage" },
  //   {id: 4, title: "React", body: "R langvage" },
  //   {id: 5, title: "C#", body: "C# langvage" }


  // ])
  // const [post2] = useState([
  //   {id: 1, title: "hhh", body: "js langvage" },
  //   {id: 2, title: "34r", body: "C++ langvage" },
  //   {id: 3, title: "efrerf", body: "Pytjon langvage" },
  //   {id: 4, title: "efref", body: "R langvage" },
  //   {id: 5, title: "erfer", body: "C# langvage" }


  // ])
  const [value, setValue] = useState("test")


  return (
    <div className="App">

<div className='input'>
      <input placeholder='enter' 
      value={value}
      onChange={event =>setValue(event.target.value)}>
      
      </input>
     </div>

      <div className='lists'>
      {/* <Postlist posts={post} title={value}/> */}
      <Users/>
      
      </div>

      
     
      
   

      
     

      
      

    </div>
  );
}

export default App;
