import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";

const Logs = ({logs, onRemove}) => {
    return (
        <ButtonGroup>
            {logs.map((item) => (
                <Button
                    key={item.id} 
                    onClick={() => onRemove(item.id)}
                >
                    <p>{item.value}</p>
                </Button>
            ))}
        </ButtonGroup>
    );
};

export default Logs;