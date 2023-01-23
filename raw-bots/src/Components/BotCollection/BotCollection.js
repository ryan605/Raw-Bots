
import React from "react"



function BotCollection ({newBot}){
    
    const bots = newBot.map(
        (value, index) =>{
           return (
            <div className="col-3" key={index}>
            <div className="card h-10">
                <img className="card-img-top" src={value.avatar_url} alt="bot" />
                <div className="card-body">
                <h5 className="bot-name">{value.name}</h5>
                <h5 className="bot-phrase">{value.catchphrase}</h5>
                <p className="bot-health">{value.health}</p> <span> <p className="bot-damage">{value.damage}</p></span>              
                </div>
            </div>
     </div>
           )
        }
    )
    return(
        <div className="row">
          {bots}
        </div>
      
    )
}
export default BotCollection