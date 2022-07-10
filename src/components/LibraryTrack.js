const LibraryTrack = ({
  track,
  setCurrentTrack,
  audioRef,
  isPlaying,
  tracks,
  setTracks,
}) => {
  const trackSelectHandler = async () => {
    await setCurrentTrack(track);
    const newTracks = tracks.map((song) => {
      if (song.id === track.id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setTracks(newTracks);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      className={`library-track ${track.active ? "selected" : ""}`}
      onClick={trackSelectHandler}
    >
      <img alt={track.name} src={track.cover} />
      <div className="track-details">
        <h3>{track.name}</h3>
        <h4>{track.artist}</h4>
      </div>
    </div>
  );
};

export default LibraryTrack;
