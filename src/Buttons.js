import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Buttons = ({ advanceCycle, resetGrid, setGridColor, changePreset }) => {

    const handleColorChange = event => {
        localStorage.setItem("conway-fill-color", event.target.value);
        setGridColor(event.target.value);
    }

    return (
        <Form className="Buttons">
            <div className="dropdowns-container">
                <Form.Control
                        as="select"
                        defaultValue="presets"
                        onChange={e => changePreset(e.target.value)}   
                    >
                    <option disabled value="presets">Pattern Presets</option>
                    <option disabled>Spaceships</option>
                    <option value="glider">Glider</option>
                    <option disabled>Misc</option>
                    <option value="exploder">Exploder</option>
                    <option value="ripJohn">XKCD Rip John Conway</option>
                    <option value="smallExploder">Small Exploder</option>
                </Form.Control>
                <Form.Control
                        as="select" 
                        defaultValue={localStorage.getItem("conway-fill-color") || "Color"} 
                        onChange={handleColorChange}
                    >
                    <option disabled>Color</option>
                    <option value="#0275D8">Blue</option>
                    <option value="#7FFF00">Chartreuse</option>
                    <option value="#FF00FF">Magenta</option>
                    <option value="#FFA500">Orange</option>
                    <option value="#FF69B4">Pink</option>
                    <option value="#DC143C">Red</option>
                    <option value="#9400D3">Violet</option>
                    <option value="#FFFF00">Yellow</option>
                </Form.Control>
            </div>
            <div className="buttons-container">
                <Button onClick={resetGrid}>Clear</Button>
                <Button>Start</Button>
                <Button onClick={advanceCycle}>Next</Button>
                <Button onClick={changePreset}>Test Preset</Button>
            </div>
        </Form>
    )
}

export default Buttons
