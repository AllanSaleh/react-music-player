const TrackInfo = ({ currentTrack }) => {
  return (
    <div className="track-info-container">
      <img alt={currentTrack.name} src={currentTrack.cover} />
      <h2>{currentTrack.name}</h2>
      <h3>{currentTrack.artist}</h3>
    </div>
  );
};

export default TrackInfo;
