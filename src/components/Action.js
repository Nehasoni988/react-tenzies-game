export const Action = ({
  winningStatus,
  gameStarted,
  onRollClickCb,
  onStartGameCb,
}) => {
  console.log(gameStarted)
  return (
    <>
      {!winningStatus && (
        <button className="action_button" onClick={() => onRollClickCb()}>
          {gameStarted ? "Roll" : "Start Game"}
        </button>
      )}
      {winningStatus && (
        <button className="action_button" onClick={() => onStartGameCb()}>
          Begin New Game
        </button>
      )}
    </>
  );
};
