import React from 'react'
import Card from "../../../UI/Card"


const AvailablePlayers = ({players ,setCoin , coin, selectedPlayers, setSelectedPlayers}) => {
    console.log(players,"players")
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
            players.map((player,ind) => {
               
                return (<Card player={player} key = {ind} setCoin = {setCoin} coin = {coin} selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers}/>) ;

            })
        }
      </div>

  

  

    </div>
 
  )
}

export default AvailablePlayers