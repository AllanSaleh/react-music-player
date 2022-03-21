import { useState } from "react";
import "./styles/app.scss";
import TrackInfo from "./components/TrackInfo";
import Player from "./components/Player";
import data from "./data";

function App() {
  const [tracks, setTracks] = useState(data());
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  return (
    <div className="App">
      <TrackInfo currentTrack={currentTrack} />
      <Player />
    </div>
  );
}

export default App;
