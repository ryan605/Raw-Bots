import React,{useState,useEffect} from 'react';
import BotCollection from '../BotCollection/BotCollection';


let BotUrl = "https://row-bots-ryan605.vercel.app/bots"

function App({}){

  const [newBots, setBot] = useState([])
    useEffect(() =>{
        fetch(BotUrl)
           .then((response) =>response.json())
           .then((data) =>{
            setBot(data)
           })
    },[])    
  return (
    <div>
      <BotCollection newBot ={newBots}/>
    </div>
  );
}

export default App;
