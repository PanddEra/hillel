import React from 'react';
import { Button, ButtonGroup } from "react-bootstrap";

const Buttons = ({ onInc, onDec }) => {
    return (
        <div>
            <ButtonGroup>
                <Button onClick={onInc} variant={"outline-success"}>+</Button>
                <Button onClick={onDec} variant={"outline-danger"}>-</Button>
            </ButtonGroup>
        </div>
    );
};

export default Buttons;