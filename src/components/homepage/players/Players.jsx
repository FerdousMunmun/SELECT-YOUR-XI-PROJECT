import React, { use, useState } from 'react'
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';

 "./components/A"

const Players = ({playersPromise , setCoin ,coin}) => {
    const players = use(playersPromise);
    console.log(players)
    const [selectedType, setselectedType] = useState("available");
    console.log(selectedType,"selectedType");
    const [selectedPlayers,setSelectedPlayers] = useState([]);
  return (
    <div className='container mx-auto my-[60px]'>
      <div className="flex justify-between gap-4 items-center mb-[20px]">
        {selectedType==="available" ? <h2 className='font-bold text-3xl'>Avaiable Players</h2>
        :<h2 className='font-bold text-3xl'>Selected Players(2/6)</h2>}
        
        <div className="">
           <button 
           onClick={() => setselectedType("available")}
           className={`btn ${selectedType==="available" ? "bg-[#E7FE29]" : ""}  mr-2 rounded-r-none rounded-l-xl`}>Available</button>
        <button 
         onClick={() => setselectedType("selected")}
        className=  {`btn ${selectedType==="selected" ? "bg-[#E7FE29]" : ""}  mr-2 rounded-l-none rounded-r-xl`}>Selected(0)</button>
        </div>

       
      </div>
      
       {selectedType==="available" ? ( <AvailablePlayers players={players} setCoin = {setCoin} coin = {coin} setSelectedPlayers = {setSelectedPlayers}/>) :(<SelectedPlayers selectedPlayers = {selectedPlayers}/>
       )}
    </div>
  );
};

export default Players