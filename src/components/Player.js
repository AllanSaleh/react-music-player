import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentTrack }) => {
  const audioRef = useRef(null);
  const playSongHandler = () => {
    console.log(audioRef.current);
  };
  return (
    <div className="player-container">
      <div className="duration-bar">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
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
      <audio ref={audioRef} src={currentTrack.audio} />
    </div>
  );
};

export default Player;
