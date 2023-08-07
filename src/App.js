import "./App.css";
import Shows from './components/Shows'
import Data from './Data'
import React,{ useState } from "react";


const App = () => {

  
  const [shows, setshows] = useState(Data)
  
  function removeShow(id){
    const newShows = shows.filter(show => show.id !== id)
    setshows(newShows)
  }
  
  if (shows.length===0){
    return(
      <div className="refresh">
        <h2>No Shows Left</h2>
        <button className="btn-white" onClick={()=>setshows(Data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className="container">
      <h2 className="title">My Watchlist</h2>
      <Shows Shows={shows} removeShow={removeShow}></Shows>
    </div>
  );
}

export default App;
