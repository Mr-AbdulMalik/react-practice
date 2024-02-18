import { useState } from "react";
import "./App.css";

function App() {
    let [counter, setCounter] = useState(0);

    const increaseVal = () => {
        setCounter(counter + 1);
    };
    const decreaseVal = () => {
        setCounter(counter - 1);
    };

    return (
        <>
            <h1>Chai aur Code</h1>
            <h3>Counter: {counter}</h3>
            <button onClick={increaseVal}>+</button>
            <button onClick={decreaseVal}>-</button>
        </>
    );
}

export default App;
