const LibraryTrack = ({ track }) => {
  return (
    <div className="library-track">
      <img alt={track.name} src={track.cover} />
      <h3>{track.name}</h3>
      <h4>{track.artist}</h4>
    </div>
  );
};

export default LibraryTrack;
