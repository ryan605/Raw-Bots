import React from "react";

function BotCollectionItem ({avatar_url, name, catchphrase, health, damage}){
    return(
        <div className="col-3 p-1">
        <div className="card h-100">
            <img className="card-img-top" src={avatar_url} alt="bot" />
            <div className="card-body">
            <h5 className="bot-name">{name}</h5>
            <h5 className="bot-phrase">{catchphrase}</h5>
            <p className="bot-health">{health}</p> <span> <p className="bot-damage">{damage}</p></span>              
            </div>
        </div>
 </div>
    )
}
export default BotCollectionItem