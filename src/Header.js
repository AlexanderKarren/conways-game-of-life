import React from 'react'
import Button from 'react-bootstrap/Button'

const Header = () => {
    return (
        <header>
            <h1>Conway's Game of Life</h1>
            <div className="header-buttons">
                <Button variant="light" disabled>Grid</Button>
                <Button variant="light" disabled>About</Button>
            </div>
        </header>
    )
}

export default Header
