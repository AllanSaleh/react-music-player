import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentTrack, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);
  const [trackInfo, setTrackInfo] = useState({ currentTime: 0, duration: 0 });
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const timeUpdateHandler = (e) => {
    setTrackInfo({
      ...trackInfo,
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };
  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  return (
    <div className="player-container">
      <div className="duration-bar">
        <p>{formatTime(trackInfo.currentTime)}</p>
        <input type="range" />
        <p>{formatTime(trackInfo.duration)}</p>
      </div>
      <div className="player-controllers">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="previous-track"
          size="2x"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          icon={faPlay}
          className="play"
          size="2x"
        />
        <FontAwesomeIcon icon={faAngleRight} className="next-track" size="2x" />
      </div>
      <audio
        ref={audioRef}
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        src={currentTrack.audio}
      />
    </div>
  );
};

export default Player;
