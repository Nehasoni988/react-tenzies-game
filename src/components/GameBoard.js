import { useEffect, useReducer, useRef, useState } from "react";
import { generateRandomNumberForDice, createDicesData } from "../utils/helper";
import { Dice } from "./Dice";
import { Notify } from "./Notify";
import { Action } from "./Action";
import { Stats } from "./Stats";

export const GameBoard = () => {
  // State
  const [winningStatus, setWinningStatus] = useState(false);
  const [dices, setDices] = useState(createDicesData());
  const [gameStarted, setGameStarted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [stats, setStats] = useState({
    rolls: 0,
    bestTime: 35,
    time: 0,
  });
  const timerRef = useRef(null);

  // Getters
  const diceElements = dices.map((dice) => (
    <Dice
      key={dice.id}
      dice={dice}
      winningStatus={winningStatus}
      onClickCb={() => handleHoldDice(dice.id)}
    ></Dice>
  ));

  const getHeldDice = () => dices.find((item) => item.held);

  /**
   * ---- Hooks -------
   */

  // Calls when any error sets
  useEffect(
    function () {
      if (!errorMsg) return;

      const timer = setTimeout(function () {
        setErrorMsg("");
      }, 5000);

      return function () {
        clearTimeout(timer);
      };
    },
    [errorMsg]
  );

  /**
   * ---- Functions -------
   */

  function resetState() {
    // Reset timer
    stopTimer();
    // Reset dices
    setDices(
      dices.map((item) => ({
        ...item,
        value: generateRandomNumberForDice(),
        held: false,
      }))
    );
    // Reset to "not win" status
    setWinningStatus(false);
    // Reste to "game not started"
    setGameStarted(false);
    // Reset stats to default
    setStats({
      rolls: 0,
      bestTime: 35,
      time: 0,
    });
  }

  function rollDices() {
    // If start game is requested and game is not started already
    if (!gameStarted) {
      setGameStarted(true);
      startTimer();
    }

    // Roll the dices
    setDices(
      dices.map((item) => {
        return item.held
          ? item
          : { ...item, value: generateRandomNumberForDice() };
      })
    );

    // Increase rolls count
    setStats((prev) => ({ ...prev, rolls: prev.rolls + 1 }));
  }

  function holdDice(diceId) {
    // User can't hold any dice if game is not started
    if (!gameStarted) {
      setErrorMsg("Please start game to hold the dice");
      return false;
    }

    if (winningStatus) {
      setErrorMsg("Please start a new game to hold the dice further");
      return false;
    }

    // check if any dice is already held
    let heldDice = getHeldDice();

    setDices((prev) =>
      prev.map((clickedDice) => {
        if (clickedDice.id !== diceId) return clickedDice;

        if (heldDice && clickedDice.value !== heldDice.value) {
          setErrorMsg("You must hold dice with same numbers");
          return clickedDice;
        }

        return { ...clickedDice, held: !clickedDice.held };
      })
    );

    if (!heldDice) return;

    // Check if user wins the game or not
    let remainingDice = dices.find((item) => item.value !== heldDice.value);
    if (!remainingDice) {
      // Set all dices as held
      setDices((prev) => prev.map((item) => ({ ...item, held: true })));
      // set winning status to true
      setWinningStatus(true);
      // Clear the timer
      stopTimer();
    }
  }

  function startTimer() {
    // prevent multiple timers
    if (timerRef.current) return;

    // Update the current timer
    timerRef.current = setInterval(() => {
      setStats((prev) => ({ ...prev, time: prev.time + 1 }));
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function handleRollDice() {
    rollDices();
  }

  function handleStartGame() {
    resetState();
  }

  function handleHoldDice(diceId) {
    holdDice(diceId);
  }

  return (
    <div>
      {/* Error message */}
      <Notify errorMsg={errorMsg}></Notify>

      {/* Stats */}
      <Stats stats={stats}></Stats>

      {/* Dice Area */}
      <div className="container">
        <div className="dice_container">{diceElements}</div>
      </div>

      {/* Action Area */}
      <div className="t-center">
        <Action
          winningStatus={winningStatus}
          gameStarted={gameStarted}
          onRollClickCb={handleRollDice}
          onStartGameCb={handleStartGame}
        ></Action>
      </div>
    </div>
  );
};
