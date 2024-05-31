import React, { useState, useEffect } from "react";
import { evaluate } from 'mathjs';
import './Calculator.css'

export default function Calculator() {
    const [currentInput, setCurrentInput] = useState('');

    function addToCurrentInput(value:number | string) {
        setCurrentInput(prevInput => prevInput + value);
    }

    function handleInput(value:number | string) {
        if (currentInput === 'Error' || currentInput === 'undefined') {
            setCurrentInput('')
        }
        addToCurrentInput(value);
    }

    function handleBackspace() {
        if (currentInput === 'Error' || currentInput === 'undefined') {
            setCurrentInput('')
        }
        setCurrentInput(prev => prev.slice(0, -1));
    }


    function handleEvaluate() {
        if (currentInput.trim() === '') return; // Check for empty input

        try {
            // Replace custom operators with JavaScript operators
            const sanitizedInput = currentInput
                .replace(/×/g, '*')
                .replace(/÷/g, '/')
                .replace(/√(\d+(\.\d+)?|\(.+?\))/g, 'sqrt($1)'); // Replace √number or √(expression) with sqrt(number/expression)
            const result = evaluate(sanitizedInput);
            setCurrentInput(String(result));
        } catch (error) {
            setCurrentInput('Error');
        }
    }

    useEffect(() => {
        function handleKeyDown(event) {
            const { key } = event;
            if ('0123456789'.includes(key)) {
                handleInput(key);
            } else if (key === '.') {
                handleInput('.');
            } else if (key === '+') {
                handleInput('+');
            } else if (key === '-') {
                handleInput('-');
            } else if (key === '*') {
                handleInput('×');
            } else if (key === '/') {
                handleInput('÷');
            } else if (key === '(') {
                handleInput('(');
            } else if (key === ')') {
                handleInput(')');
            } else if (key === 'Backspace') {
                handleBackspace();
            } else if (key === 'Enter' || key === '=') {
                handleEvaluate();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="calculator">
            <div id="calcinput">{currentInput}</div>
            <button onClick={() => setCurrentInput('')}>C</button>
            <button onClick={() => handleInput('√')}>√𝑥</button>
            <button onClick={() => handleBackspace()}>←</button>
            <button onClick={() => handleInput('÷')}>÷</button>

            <button onClick={() => handleInput('7')}>7</button>
            <button onClick={() => handleInput('8')}>8</button>
            <button onClick={() => handleInput('9')}>9</button>
            <button onClick={() => handleInput('×')}>×</button>

            <button onClick={() => handleInput('4')}>4</button>
            <button onClick={() => handleInput('5')}>5</button>
            <button onClick={() => handleInput('6')}>6</button>
            <button onClick={() => handleInput('-')}>-</button>

            <button onClick={() => handleInput('1')}>1</button>
            <button onClick={() => handleInput('2')}>2</button>
            <button onClick={() => handleInput('3')}>3</button>
            <button onClick={() => handleInput('+')}>+</button>

            <button onClick={() => handleInput('0')}>0</button>
            <button onClick={() => handleInput('.')}>.</button>
            <div id="parenthesis-button">
                <button onClick={() => handleInput('(')}>(</button>
                <button onClick={() => handleInput(')')}>)</button>
            </div>
            <button onClick={handleEvaluate}>=</button>
        </div>
    );
}
