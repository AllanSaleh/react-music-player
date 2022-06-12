import LibraryTrack from "./LibraryTrack";

const Library = ({
  tracks,
  setTracks,
  setCurrentTrack,
  audioRef,
  isPlaying,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "library-active" : ""}`}>
      <h2>Library</h2>
      <div className="library-tracks">
        {tracks.map((track) => (
          <LibraryTrack
            track={track}
            setCurrentTrack={setCurrentTrack}
            key={track.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            tracks={tracks}
            setTracks={setTracks}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
