import React from 'react'
import produce from 'immer'

const Grid = ({grid, setGrid, gridColor}) => {

    // const [running, setRunning] = useState(false);
    
    // const runningRef = useRef(running);
    // runningRef.current = running;

    console.log(grid)

    return (
        <div className="Grid">
        {grid.map((rows, i) => rows.map((col, j) => <div
            className={col ? "cell alive" : "cell dead"}
            style={{backgroundColor: col ? gridColor : undefined}}
            onClick={() => setGrid(produce(grid, gridCopy => {
            gridCopy[i][j] = grid[i][j] ? 0 : 1;
            }))}
            key={`${i}-${j}`}
        />))}
      </div>
    )
}

export default Grid
