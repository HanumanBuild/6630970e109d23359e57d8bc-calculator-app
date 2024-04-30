import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState("");

    const handleInput = (val) => {
        setInput(input + val);
    };

    const calculateResult = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Error");
        }
    };

    const clearInput = () => {
        setInput("");
    };

    return (
        <div>
            <div className="display">{input}</div>
            <div className="keypad">
                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('+')}>+</button>
                <button onClick={calculateResult}>=</button>
                <button onClick={clearInput}>C</button>
            </div>
        </div>
    );
}

export default Calculator;