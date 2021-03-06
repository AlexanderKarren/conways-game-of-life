import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Buttons = ({ 
    advanceCycle,
    resetGrid,
    setGridColor,
    changePreset,
    randomizeGrid,
    displayBorder,
    toggleBorder,
    running,
    runningRef,
    setRunning,
    runSimulation,
    setSpeed}) => {

    const handleColorChange = event => {
        localStorage.setItem("conway-fill-color", event.target.value);
        setGridColor(event.target.value);
    }

    const start = async () => {
        setRunning(!running);
        if (!running) {
            runningRef.current = true;
            runSimulation();
        }
    }

    return (
        <Form className="Buttons">
            <div className="buttons-container">
                <Button onClick={() => toggleBorder(!displayBorder)}>
                    {displayBorder ?
                        <i className="fas fa-border-none" />
                        :
                        <i className="fas fa-border-all" />
                    }
                </Button>
                <Button onClick={resetGrid}>Clear</Button>
                <Button onClick={start}>
                    {running ?
                        <i className="fas fa-stop" />
                    :
                        <i className="fas fa-play" />
                    }
                </Button>
                <Button onClick={advanceCycle}><i className="fas fa-step-forward" /></Button>
                <Button onClick={randomizeGrid}>Randomize</Button>
                {/* <Button onClick={changePreset}>Test Preset</Button> */}
            </div>
            <div className="dropdowns-labels">
                <div>Patterns</div>
                <div>Color</div>
                <div>Speed</div>
            </div>
            <div className="dropdowns-container">
                <Form.Control
                        as="select"
                        defaultValue="presets"
                        onChange={e => changePreset(e.target.value)}   
                    >
                    <option disabled value="presets">Patterns</option>
                    <option disabled>Oscillators</option>
                    <option value="blinker">Blinker</option>
                    <option value="pentaDecathlon">Penta-decathlon</option>
                    <option value="toad">Toad</option>
                    <option disabled>Spaceships</option>
                    <option value="glider">Glider</option>
                    <option disabled>Explosions</option>
                    <option value="creeper">Creeper</option>
                    <option value="exploder">Exploder</option>
                    <option value="smallExploder">Small Exploder</option>
                    <option disabled>Misc</option>
                    <option value="ripJohn">XKCD Rip John Conway</option>
                </Form.Control>
                <Form.Control
                        as="select" 
                        defaultValue={localStorage.getItem("conway-fill-color") || "#7FFF00"} 
                        onChange={handleColorChange}
                    >
                    <option value="#000000">Black</option>
                    <option value="#0275D8">Blue</option>
                    <option value="#7FFF00">Chartreuse</option>
                    <option value="#F08080">Coral</option>
                    <option value="#228B22">Green</option>
                    <option value="#FF00FF">Magenta</option>
                    <option value="#FFA500">Orange</option>
                    <option value="#FF69B4">Pink</option>
                    <option value="#DC143C">Red</option>
                    <option value="#9400D3">Violet</option>
                    <option value="#FFFFFF">White</option>
                    <option value="#FFFF00">Yellow</option>
                </Form.Control>
                <Form.Control
                    as="select"
                    defaultValue="1000"
                    onChange={e => {
                        setSpeed(e.target.value)
                        start();
                    }}
                    >
                    <option value="1000">1x</option>
                    <option value="500">2x</option>
                    <option value="250">4x</option>
                    <option value="200">5x</option>
                    <option value="100">10x</option>
                    <option value="10">100x</option>
                </Form.Control>
            </div>
        </Form>
    )
}

export default Buttons
