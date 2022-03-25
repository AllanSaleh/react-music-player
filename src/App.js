import { useState } from "react";
import "./styles/app.scss";
import TrackInfo from "./components/TrackInfo";
import Player from "./components/Player";
import data from "./data";

function App() {
  const [tracks, setTracks] = useState(data());
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <TrackInfo currentTrack={currentTrack} />
      <Player
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
