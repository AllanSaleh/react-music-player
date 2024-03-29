import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  currentTrack,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  tracks,
  setTracks,
}) => {
  const [trackInfo, setTrackInfo] = useState({
    currentTime: 0,
    duration: 0,
    trackPlayedPercentage: 0,
  });
  const [volume, setVolume] = useState(100);
  const [showVolumeBar, setShowVolumeBar] = useState(false);

  const libraryUpdateHandler = (nextPrev) => {
    const newTracks = tracks.map((song) => {
      if (song.id === nextPrev.id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setTracks(newTracks);
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedTrackPlayedPercentage = Math.round((current / duration) * 100);
    setTrackInfo({
      ...trackInfo,
      currentTime: current,
      duration,
      trackPlayedPercentage: roundedTrackPlayedPercentage,
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

  const skipTrackHandler = async (direction) => {
    const currentTrackIndex = tracks.findIndex(
      (track) => track.id === currentTrack.id
    );
    if (direction === "skip-forward") {
      await setCurrentTrack(tracks[(currentTrackIndex + 1) % tracks.length]);
      libraryUpdateHandler(tracks[(currentTrackIndex + 1) % tracks.length]);
    }
    if (direction === "skip-back") {
      if ((currentTrackIndex - 1) % tracks.length === -1) {
        await setCurrentTrack(tracks[tracks.length - 1]);
        libraryUpdateHandler(tracks[tracks.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentTrack(tracks[(currentTrackIndex - 1) % tracks.length]);
      libraryUpdateHandler(tracks[(currentTrackIndex - 1) % tracks.length]);
    }
    if (isPlaying) audioRef.current.play();
  };

  const trackEndHandler = async () => {
    const currentTrackIndex = tracks.findIndex(
      (track) => track.id === currentTrack.id
    );
    await setCurrentTrack(tracks[(currentTrackIndex + 1) % tracks.length]);
    if (isPlaying) audioRef.current.play();
  };

  const volumeChangeHandler = (e) => {
    setVolume(e.target.value);
  };

  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);
  
  return (
    <div className="player-container">
      <div className="duration-bar">
        <p>{formatTime(trackInfo.currentTime)}</p>
        <div
          className="track-bar"
          style={{
            background: `linear-gradient(to right, ${currentTrack.color[0]},${currentTrack.color[1]})`,
          }}
        >
          <input
            type="range"
            min={0}
            value={trackInfo.currentTime}
            max={trackInfo.duration || 0}
            onChange={dragHandler}
          />
          <div
            className="animate-track-bar"
            style={{
              transform: `translateX(${trackInfo.trackPlayedPercentage}%)`,
            }}
          />
        </div>
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
          icon={isPlaying ? faPause : faPlay}
          className="play"
          size="2x"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          className="next-track"
          size="2x"
          onClick={() => skipTrackHandler("skip-forward")}
        />
        <div className="volume">
          <FontAwesomeIcon
            icon={faVolumeDown}
            onClick={() => setShowVolumeBar(!showVolumeBar)}
          />
          <div
            className={`volume-bar ${showVolumeBar ? "volume-bar-active" : ""}`}
          >
            <div className="volume-slider">
              <input
                type="range"
                min={0}
                value={volume}
                max={100}
                onChange={volumeChangeHandler}
                style={{
                  background: `linear-gradient(to right, ${currentTrack.color[0]},${currentTrack.color[1]})`,
                }}
              />
              <div
                className="animate-volume-slider"
                style={{
                  transform: `translateX(${volume}%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={currentTrack.audio}
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        onEnded={trackEndHandler}
      />
    </div>
  );
};

export default Player;
