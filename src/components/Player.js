import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player-container">
      <h1>Player</h1>
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
        <FontAwesomeIcon icon={faPlay} className="play" size="2x" />
        <FontAwesomeIcon icon={faAngleRight} className="next-track" size="2x" />
      </div>
    </div>
  );
};

export default Player;
