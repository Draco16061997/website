import React, { useState } from "react";

import logo from "./react.png"


const Postitem = (props)=>{

    return (
        <div className='post'>
            <div className='post__content'>

                <strong>{props.post.id}. {props.post.title}</strong>
                 <div>
                    {props.post.body}
                 </div>
            </div>
            <div className='post__btns'>
                     <button onClick={()=> alert("CLICED")}>Delete</button>
                     <a className ="link"  href='https://www.youtube.com'>link</a>
                     <img className="logo" src={logo}/>

             </div>
            

        </div>

    )
}

export default Postitem;