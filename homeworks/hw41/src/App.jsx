import { useState } from "react";
import Buttons from "./components/Buttons.jsx";
import Logs from "./components/Logs.jsx";
import uuid from "uuid-random";

function App() {
    const [logs, setLogs] = useState([]);

    const clickHandler = (action) => {
        const lastValue = logs.length > 0 ? logs[0].value : 0;

        const newValue = action === "inc"
            ? lastValue + 1
            : lastValue - 1;

        setLogs([{ id: uuid(), value: newValue }, ...logs]);
    };

    const removeHandler = (idToRemove) => {
        setLogs(logs.filter(log => log.id !== idToRemove));
    };

    return (
        <div>
            <Buttons
                onInc={() => clickHandler("inc")}
                onDec={() => clickHandler("dec")}
            />
            <Logs logs={logs} onRemove={removeHandler} />
        </div>
    );
}

export default App;