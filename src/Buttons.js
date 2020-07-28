import React from 'react'
import Button from 'react-bootstrap/Button'

const Buttons = ({ advanceCycle, resetGrid }) => {
    return (
        <div className="Buttons">
            <Button onClick={resetGrid}>Clear</Button>
            <Button>Start</Button>
            <Button onClick={advanceCycle}>Next</Button>
        </div>
    )
}

export default Buttons
