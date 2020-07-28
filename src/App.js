import React, { useState, useCallback } from 'react'
import selectPreset from './gridPresets'
import Grid from './Grid'
import Buttons from './Buttons'
import produce from 'immer'

const numRows = 25
const numCols = 50

// [x, y]
const operations = [
  [0, 1], // E
  [0, -1], // W
  [1, -1], // NW
  [-1, 1], // NE
  [1, 1], // SE
  [-1, -1], // SW
  [1, 0], // S
  [-1, 0] // N
]

const emptyGrid = () => {
  const rows = []
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }

  return rows;
}

function App() {
  const [grid, setGrid] = useState(emptyGrid);
  const [gridColor, setGridColor] = useState(localStorage.getItem("conway-fill-color") || "#7FFF00");
  // eslint-disable-next-line
  const [preset, setPreset] = useState(null);
  // const [running, setRunning] = useState(false);

  // const runningRef = useRef(running);
  // runningRef.current = running;

  const advanceCycle = useCallback(() => {
    setGrid(g => {
      return produce(g, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if ((newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols)) {
                neighbors += g[newI][newJ]
              }
            });
            // console.log("i:", i, "j:", j, "value:", g[i][j], "neighbors:", neighbors)
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            }
            else if (g[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
        console.log(gridCopy);
      });
    });
}, [])

const changePreset = gridPreset => {
  resetGrid();
  setGrid(g => {
    return produce(g, gridCopy => selectPreset(gridCopy, gridPreset))
  }, []);
}

const resetGrid = () => {
  setGrid(emptyGrid)
}

  return (
    <div className="App">
      <Grid grid={grid} setGrid={setGrid} gridColor={gridColor} />
      <Buttons advanceCycle={advanceCycle} resetGrid={resetGrid} setGridColor={setGridColor} changePreset={changePreset} />
    </div>
  );
}

export default App;
