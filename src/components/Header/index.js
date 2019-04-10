import React from "react";


function Header(props){
   return(
       <div className="jumbotron" id="jumbo">
           <div className="container">
               <h1>Clicky Game</h1>

               <h2>Score: {props.children} </h2>

               <h2>Top Score: {props.children}</h2>
           </div>

       </div>
   )
}

export default Header;