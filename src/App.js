import React, { useState } from 'react';
import Postlist from './components/PostList';

import './styles/App.css'

function App() {
  
  const [post, setPost] = useState([
    {id: 1, title: "JS", body: "js langvage" },
    {id: 2, title: "C++", body: "C++ langvage" },
    {id: 3, title: "Python", body: "Pytjon langvage" },
    {id: 4, title: "React", body: "R langvage" },
    {id: 5, title: "C#", body: "C# langvage" }


  ])
  const [post2, setPost2] = useState([
    {id: 1, title: "hhh", body: "js langvage" },
    {id: 2, title: "34r", body: "C++ langvage" },
    {id: 3, title: "efrerf", body: "Pytjon langvage" },
    {id: 4, title: "efref", body: "R langvage" },
    {id: 5, title: "erfer", body: "C# langvage" }


  ])



  return (
    <div className="App">

<div className='input'>
      <input placeholder='enter' >
      
      </input>
     </div>

      <div className='lists'>
      <Postlist posts={post} title={"test titlref"}/>
      <Postlist posts={post2} title={"test title2 "}/>
      <Postlist posts={post} title={"sdsdf"}/>




      </div>
      <a className ="link"  href='#'>link</a>
     

      
      

    </div>
  );
}

export default App;
