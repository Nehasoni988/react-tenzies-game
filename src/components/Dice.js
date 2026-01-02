export const Dice = ({ dice, winningStatus, onClickCb }) => {
  return (
    <button
      className={`
        dice_button 
        ${dice.held ? "held_dice" : ""} 
        ${winningStatus ? "winner_dice" : ""}
      `}
      onClick={() => onClickCb()}
    >
      {dice.value}
    </button>
  );
};
