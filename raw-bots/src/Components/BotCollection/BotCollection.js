
import React,{useState} from "react"
import BotCollectionItem from "./BotCollectionItem"



function BotCollection ({newBot}){

    const [robot, setRobot] = useState([])
    console.log(robot)
    function handleClick(index){
        
        setRobot([...robot, index])
    }


    const bots = newBot.map(
        (value, index) =>{
           return (
            <div className="col-2" key={index}onClick={()=>handleClick(value)}>
            <div className="card h-10">
                <img className="card-img-top" src={value.avatar_url} alt="bot" />
                <div className="card-body">
                <h5 className="bot-name">{value.name}</h5>
                <h5 className="bot-phrase">{value.catchphrase}</h5>
                <p className="bot-health">{value.health+` health`}</p> <span> <p className="bot-damage">{value.damage+` damage`}</p></span>              
                </div>
            </div>
     </div>
           )
        }
    )
    return(
        <>
        <BotCollectionItem robot={robot}/>
        <div className="row">
          {bots}
        </div>
        </>
      
    )
}
export default BotCollection