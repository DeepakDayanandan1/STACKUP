import { useState } from "react";
import "../Calculator.css";

function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(0);

    const Addition = () => {setResult(Number(num1) + Number(num2));};
    const Subtraction = () => {setResult(Number(num1) - Number(num2));};
    const Multiplication = () => {setResult(Number(num1) * Number(num2));};
    const Division = () => {setResult(Number(num1) / Number(num2));};

    return (
        <div className="calculator">
            <h2>Calculator</h2>

            <div className="calc-inputs">
                <input
                    className="input-box"
                    type="number"
                    placeholder="Enter first number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
                <input
                    className="input-box"
                    type="number"
                    placeholder="Enter second number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
            </div>

            <div className="btn-group calc-actions">
                <button className="btn" onClick={Addition}>Add</button>
                <button className="btn" onClick={Subtraction}>Subtract</button>
                <button className="btn" onClick={Multiplication}>Multiply</button>
                <button className="btn" onClick={Division}>Divide</button>
            </div>

            <p className="calc-result">
                Result: <strong>{result}</strong>
            </p>
        </div>
    );
}

export default Calculator;
