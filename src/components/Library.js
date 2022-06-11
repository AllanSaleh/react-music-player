import LibraryTrack from "./LibraryTrack";

const Library = ({ tracks, setCurrentTrack, audioRef, isPlaying }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-tracks">
        {tracks.map((track) => (
          <LibraryTrack
            track={track}
            setCurrentTrack={setCurrentTrack}
            key={track.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
