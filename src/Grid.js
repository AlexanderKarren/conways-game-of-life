import React, { useState } from 'react'
import produce from 'immer'

const numRows = 50
const numCols = 25

const Grid = () => {
    const [grid, setGrid] = useState(() => {
        const rows = []
        for (let i = 0; i < numRows; i++) {
          rows.push(Array.from(Array(numCols), () => 0));
        }
    
        return rows;
    })

    console.log(grid)

    return (
        <div className="Grid">
        {grid.map((rows, i) => rows.map((col, j) => <div
            className={col ? "cell alive" : "cell dead"}
            onClick={() => setGrid(produce(grid, gridCopy => {
            gridCopy[i][j] = grid[i][j] ? 0 : 1;
            }))}
            key={`${i}-${j}`}
        />))}
      </div>
    )
}

export default Grid
