import LibraryTrack from "./LibraryTrack";

const Library = ({ tracks, setCurrentTrack }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-tracks">
        {tracks.map((track) => (
          <LibraryTrack track={track} setCurrentTrack={setCurrentTrack} />
        ))}
      </div>
    </div>
  );
};

export default Library;
