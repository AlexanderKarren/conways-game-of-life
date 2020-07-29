import React from 'react'
import produce from 'immer'

const Grid = ({ grid, setGrid, gridColor, displayBorder }) => {

    return (
        <div className="Grid">
        {grid.map((rows, i) => rows.map((col, j) => <div
            className={col ? "cell alive" : "cell dead"}
            style={{backgroundColor: col ? gridColor : undefined, 
                border: displayBorder ? "1.3px solid #D3D3D3" : undefined}}
            onClick={() => setGrid(produce(grid, gridCopy => {
            gridCopy[i][j] = grid[i][j] ? 0 : 1;
            }))}
            key={`${i}-${j}`}
        />))}
      </div>
    )
}

export default Grid
