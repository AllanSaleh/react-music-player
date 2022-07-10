const TrackInfo = ({ currentTrack, isPlaying }) => {
  return (
    <div className="track-info-container">
      <img
        alt={currentTrack.name}
        src={currentTrack.cover}
        className={`${isPlaying && "image-rotate"}`}
      />
      <h2>{currentTrack.name}</h2>
      <h3>{currentTrack.artist}</h3>
    </div>
  );
};

export default TrackInfo;
