import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { PlayAudioProper } from "../util";

const Player = ({
  audioRef,
  currentTrack,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  tracks,
  setTracks,
}) => {
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
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setTrackInfo({ ...trackInfo, currentTime: e.target.value });
  };
  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const skipTrackHandler = (direction) => {
    const currentTrackIndex = tracks.findIndex(
      (track) => track.id === currentTrack.id
    );
    if (direction === "skip-forward") {
      setCurrentTrack(tracks[(currentTrackIndex + 1) % tracks.length]);
    }
    if (direction === "skip-back") {
      if ((currentTrackIndex - 1) % tracks.length === -1) {
        setCurrentTrack(tracks[tracks.length - 1]);
        PlayAudioProper(isPlaying, audioRef);
        return;
      }
      setCurrentTrack(tracks[(currentTrackIndex - 1) % tracks.length]);
    }
    PlayAudioProper(isPlaying, audioRef);
  };
  useEffect(() => {
    const newTracks = tracks.map((song) => {
      if (song.id === currentTrack.id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setTracks(newTracks);
  }, [currentTrack]);
  return (
    <div className="player-container">
      <div className="duration-bar">
        <p>{formatTime(trackInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          value={trackInfo.currentTime}
          max={trackInfo.duration || 0}
          onChange={dragHandler}
        />
        <p>{trackInfo.duration ? formatTime(trackInfo.duration) : "0:00"}</p>
      </div>
      <div className="player-controllers">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="previous-track"
          size="2x"
          onClick={() => skipTrackHandler("skip-back")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          icon={isPlaying ? faPause : faPlay}
          className="play"
          size="2x"
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          className="next-track"
          size="2x"
          onClick={() => skipTrackHandler("skip-forward")}
        />
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
