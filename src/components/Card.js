import { useEffect, useState } from "react";
function Card({name,domains,web,state }){
    function openLinkInNewTab(event){
        window.open(web, "_blank");
    }
  return(
      <div className="card">
        <div className="incard1">
         <h3>{name}</h3>
         <p>{state}</p>
        </div>
         <div className="incard">
         <p id="incard2">{domains}</p>
         <p onClick={openLinkInNewTab} id="incard3">Official Website</p>
         </div>
      </div>
  )

}
export default Card;