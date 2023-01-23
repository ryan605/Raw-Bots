import React,{useState,useEffect} from 'react';
import './App.css';
import BotCollection from './Components/BotCollection/BotCollection';
import BotCollectionItem from './Components/BotCollection/BotCollectionItem';


let BotUrl = "http://localhost:3000/bots"

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
