import React from "react";
import "./style.css";

function ActorCard(props) {
 return (
  <div className="card" onClick={() => props.clickactors(props.id)}>
     <div className="card">
       <div className="img-container">
         <img alt={props.name} src={props.image} />
       </div>
     </div>
   </div>
 );
}

export default ActorCard;