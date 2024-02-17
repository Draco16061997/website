import React from "react";
import Postitem from "./PostItem"



const Postlist = ({posts, title}) =>{

    return(
        <div>
            <div className="title">
            <h1 >{title}</h1>
            </div>
            
            
         {posts.map((post)=>
         <Postitem post = {post} key={post.id}/>)}
        
            
        </div>
    )
}

export default Postlist;