import React,{useState, useEffect} from "react"


let BotUrl = "http://localhost:3000/bots"


function BotCollection (){

    const [bot, setBot] = useState([])

    useEffect(() =>{
        fetch(BotUrl)
           .then((response) =>response.json())
           .then((data) =>{
            setBot(data)
           })
    },[])
    

    
    return(
        <div className="col-3 p-1">
            <div className="card h-100">
                <img className="card-img-top" src={bot.avatar_url} alt="bot" />
                <div className="card-body">
                <h5 className="bot-name">{bot.name}</h5>
                <h5 className="bot-phrase">{bot.catchphrase}</h5>
                <p className="bot-health">{bot.health}</p> <span> <p className="bot-damage"> {bot.damage}</p></span>              
                </div>
            </div>
     </div>
    )
}
export default BotCollection