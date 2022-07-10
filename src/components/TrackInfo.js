const TrackInfo = ({ currentTrack, isPlaying }) => {
  return (
    <div className="track-info-container">
      <img
        alt={currentTrack.name}
        src={currentTrack.cover}
        className={`image-rotate ${isPlaying && "image-rotate-start"}`}
      />
      <h2>{currentTrack.name}</h2>
      <h3>{currentTrack.artist}</h3>
    </div>
  );
};

export default TrackInfo;
