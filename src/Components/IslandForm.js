import { useContext, useState } from "react";
import IslandsContext from "../IslandsContext";

export default function IslandForm({ island, setIsland }) {
  const [islands, setIslands] = useContext(IslandsContext)
  const [fullname, setFullname] = useState(0)
  const [phone, setPhone] = useState(0)
  function confirmBooking(){
    if(window.confirm(`Are you sure you want to book to ${island.name} with the Name: ${fullname}, phone: ${phone}`)){
      setIslands(prevState=>{
        return prevState.map(_island=>{
          if(_island.name === island.name){
            const newVisitorCount = _island.visitors + 1
            return {..._island, visitors: newVisitorCount}
          }
          return _island
        })
      })
    }
  }
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input onChange={(e)=> setFullname(e.target.value)} placeholder="Type Full Name" />
      <input onChange={(e)=> setPhone(e.target.value)} type="tel" placeholder="Type Phone Number" />
      <button className="book" onClick={confirmBooking}>
        Book for today!
      </button>
    </div>
  );
}
