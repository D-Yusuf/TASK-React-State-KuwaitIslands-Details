
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import IslandForm from './Components/IslandForm';
import IslandList from './Components/IslandList';
import islands from './data/islands';
import IslandsContext from './IslandsContext';

function App() {
  const [island, setIsland] = useState({})
  const [islandsCopy, setIslands] = useState([...islands])
  // let island = {
  //   name: "Boubyan",
  //   img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg"
  // }
// useEffect(()=>console.log(island), [island])
  return (

    <div>
      <Header />
      <IslandsContext.Provider value={[islandsCopy, setIslands]}>
        <div className="homePage">
          <IslandList setIsland={setIsland} />
          <IslandForm island={island} />
        </div>
      </IslandsContext.Provider>
    </div>
  );
}

export default App;
