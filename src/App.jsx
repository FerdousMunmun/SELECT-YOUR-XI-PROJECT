
import { Suspense } from 'react';
import './App.css';
import Players from './components/homepage/players/Players';
import { useState } from 'react';
import { Navber } from './components/Navber/Navber';
import Banner from './components/homepage/Banner/Banner';
const fetchPlayers = async() => {
  const res = await fetch("/players.json")
  return res.json()
}
function App() {
  
const playersPromise = fetchPlayers()
const [coin,setCoin] = useState (500000);
  return (
    <>
    <Navber coin = {coin}/>
    <Banner/>
<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
  
    <Players playersPromise = {playersPromise} setCoin = {setCoin} coin = {coin}/>
</Suspense>
    

    </>
  )
}

export default App
