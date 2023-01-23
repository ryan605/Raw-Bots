import React from "react";

function BotCollectionItem ({robot}){
    const bot = robot.map((robot, index)=>{  
        return(
            <div className="mb-5 col-2 p-1"key={index}>
            <div className="card h-100">
                <img className="card-img-top" src={robot.avatar_url} alt="bot" />
                <div className="card-body">
                <h5 className="bot-name">{robot.name}</h5>
                <h5 className="bot-phrase">{robot.catchphrase}</h5>
                <p className="bot-health">{robot.health +" health"}</p> <span> <p className="bot-damage">{robot.damage +" health"}</p></span>              
                </div>
            </div>
     </div>
        )
    })
    return (
        <div className="row"style={{backgroundColor:"lightgreen"}}>
        {bot}
        </div>
    )
    
}
export default BotCollectionItem