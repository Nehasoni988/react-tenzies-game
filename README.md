# 🎲 Tenzies — React Dice Game

🚀 **Live Demo:** https://online-react-tenzies-game.vercel.app/

A fully playable browser-based implementation of the classic **Tenzies** dice game, built with React. The goal is simple: roll ten dice, hold the ones you want to keep, and keep rolling until all ten show the same number. The game tracks your roll count and elapsed time so you can compete against your own best.

---

## How to Play

1. Click **Start Game** to begin
2. Ten dice are rolled automatically
3. Click any die to **hold** it — held dice won't be re-rolled
4. You can only hold dice that **share the same value** — mixed holds are not allowed
5. Keep rolling until all ten dice show the same number
6. Win! Click **Begin New Game** to play again and beat your time

---

## Features

- 🎲 **10 dice board** — randomly generated on every roll
- 🔒 **Hold mechanic** — click to lock dice; same-value rule enforced with inline error messages
- ⏱ **Live timer** — starts on first roll, stops when you win
- 📊 **Stats panel** — tracks rolls taken, time elapsed, and best time
- ✅ **Win detection** — automatically detected when all dice match; board highlights on victory
- 🔁 **New game reset** — cleanly resets all state, dice values, and the timer
- ⚠️ **Error notifications** — auto-dismissing messages for invalid moves (5 second timeout)

---

## Tech Stack

| | |
|---|---|
| Framework | [React 19](https://react.dev) |
| Bootstrapped with | [Create React App](https://create-react-app.dev) |
| Language | JavaScript (ES6+) |
| Styling | CSS |
| Testing | [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) + Jest |

---

## Project Structure

```
src/
├── components/
│   ├── GameBoard.js   # Core game logic — state, timer, roll & hold handlers
│   ├── Dice.js        # Individual die — displays value, held & winner states
│   ├── Action.js      # Start / Roll / New Game button based on game state
│   ├── Stats.js       # Rolls, time, and best time display
│   ├── Notify.js      # Auto-dismissing error/info toast
│   ├── Header.js      # App header
│   └── Footer.js      # App footer
├── utils/
│   └── helper.js      # createDicesData(), generateRandomNumberForDice()
├── App.js             # Root component — composes Header, GameBoard, Footer
└── App.css            # Global styles
```

---

## Setup & Installation

### Prerequisites

- [Node.js](https://nodejs.org) v16 or higher
- [npm](https://www.npmjs.com) v8 or higher

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/react-tenzies-game.git
cd react-tenzies-game

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000**

### Other Scripts

```bash
npm run build    # Build for production
npm test         # Run tests with Jest and React Testing Library
npm run eject    # Eject from Create React App (irreversible)
```

---

## Implementation Notes

- **Game state lives in `GameBoard`** — a single component owns dice state, win detection, timer, stats, and error messaging, keeping the data flow straightforward
- **Timer uses `useRef`** — the interval reference is stored in a ref rather than state so starting/stopping it doesn't trigger re-renders
- **Hold validation** — before allowing a hold, the game checks whether any die is already held; if so, only dice with a matching value can be held, preventing invalid mixed selections
- **Win detection** — after each hold, the board checks if any die still has a different value from the first held die; if none remain, the game is won

---

## Developed By

**Neha Soni** · 2026
