const LibraryTrack = ({ track, setCurrentTrack }) => {
  const trackSelectHandler = () => {
    setCurrentTrack(track);
  };
  return (
    <div className="library-track" onClick={trackSelectHandler}>
      <img alt={track.name} src={track.cover} />
      <div className="track-details">
        <h3>{track.name}</h3>
        <h4>{track.artist}</h4>
      </div>
    </div>
  );
};

export default LibraryTrack;
