export const Stats = ({ stats }) => {
  return (
    <div className="t-stats">
      <div className="t-center t-bold">
        <div>Rolls</div>
        <div>{stats.rolls}</div>
      </div>
      <div className="t-center t-bold">
        <div>Best Time</div>
        <div>{stats.bestTime}s</div>
      </div>
      <div className="t-center t-bold">
        <div>Time</div>
        <div>{stats.time}s</div>
      </div>
    </div>
  );
};
