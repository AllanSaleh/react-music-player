const Player = () => {
  return (
    <div className="player-container">
      <h1>Player</h1>
      <div className="duration-bar">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="player-controllers"></div>
    </div>
  );
};

export default Player;
