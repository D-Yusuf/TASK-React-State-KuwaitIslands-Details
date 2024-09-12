import { useContext, useState } from "react";
import Island from "./Island";
import IslandsContext from "../IslandsContext";

export default function IslandList({setIsland}) {
  const [query, setQuery] = useState("");
  const [islands] = useContext(IslandsContext)
  // console.log(islands)
  let islandsArray = islands
    .filter((island) => island.name.toLowerCase().includes(query.toLowerCase()))
    .map((island) => <Island onClick={()=>setIsland(island)} island={island} />);
  return (
    <div>
      <input
        className="search"
        placeholder="Search for an island"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="islandList">{islandsArray}</div>
    </div>
  );
}
