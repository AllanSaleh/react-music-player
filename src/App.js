import { useState, useRef } from "react";
import "./styles/app.scss";
import TrackInfo from "./components/TrackInfo";
import Player from "./components/Player";
import data from "./data";
import Library from "./components/Library";
import Navbar from "./components/Navbar";

function App() {
  const [tracks, setTracks] = useState(data());
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const audioRef = useRef(null);
  return (
    <div className={`App ${libraryStatus ? "library-active-animation" : ""}`}>
      <Navbar
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <TrackInfo currentTrack={currentTrack} isPlaying={isPlaying} />
      <Player
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        tracks={tracks}
        setTracks={setTracks}
      />
      <Library
        tracks={tracks}
        setTracks={setTracks}
        setCurrentTrack={setCurrentTrack}
        audioRef={audioRef}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
