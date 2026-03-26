import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";


const Card = ({player,setCoin , coin, selectedPlayers,setSelectedPlayers}) => {
    const [isSelected,setisSelected] = useState(false);
    console.log(player.price)
    const handleChoosePlayer = () =>{
const price = parseInt(player.price);
         let newCoin = coin - player.price;
        if (newCoin >=0){
            setCoin(coin - player.price);
        }else {
             alert("not enough coin to purchase this player");
            return
        };
           
            
        alert(`${player.player_name} is selected`);
        setisSelected(true);
        setSelectedPlayers([...selectedPlayers,player])
            
        
    };
  return (
                   <div className="card bg-base-100 shadow-sm">
              <figure>
        <img
          src={player.player_image}
          alt="Shoes" />
      </figure>
      
      <div className="card-body">
        <h2 className="card-title"> <FaUser />
        {player.player_name}</h2>
        <div className="flex justify-between items-center gap-2">
           <div className="flex justify-between items-center gap-2">
             <FaFlag />
            <p>{player.player_country}</p>
           </div>
            <button className='btn'>{player.player_role}</button>
        </div>
         <div className="divider"></div>
         <h2 className='font-bold'>Rating({player.rating})</h2>
         <div className="flex justify-between gap-4  font-bold">
            <p>{player.batting_style}</p>
            <p className='text-right'>{player.bowling_style}</p>
         </div>
        
        <div className="card-actions justify-between items-center">
            <p className='font-semibold'>Price : ${player.price}</p>
          <button className="btn" onClick={handleChoosePlayer}
          disabled ={isSelected? true : false}
          >
            {isSelected === true ? "Selected" :"Choose Player"}</button>
        </div>
      </div>
    </div>
  )
}

export default Card