import LibraryTrack from "./LibraryTrack";

const Library = ({ tracks }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-tracks">
        {tracks.map((track) => (
          <LibraryTrack track={track} />
        ))}
      </div>
    </div>
  );
};

export default Library;
