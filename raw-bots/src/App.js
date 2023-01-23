import React,{useState,useEffect} from 'react';
import './App.css';
import BotCollection from './Components/BotCollection/BotCollection';

let url ="https://inquisitive-chebakia-3a58f5.netlify.app"




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
