import React from 'react'
import navImg from '../../assets/logo.png';
import dollarImg from '../../assets/dollar 1.png';

export const Navber = ({coin}) => {
  return (
    <div className="navbar container mx-auto ">
  <div className="flex-1">
    <a className=" text-xl">
      <img className="w-[60px] h-[60px]" src={navImg} alt=""/>
    </a>
  </div>
  <div className="flex items-center">
    <button className="flex justify-between items-center gap-2 font-bold text-xl ">
      {coin} Coins
      <img src={dollarImg} alt=''/>
    </button>
    
  </div>
</div>
  )
}
