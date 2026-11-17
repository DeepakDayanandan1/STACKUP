/* UseState and Events
  1. Counter value
  2. Increment and decrement buttons 
  3. Reset button */

import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <br /><br />
      <h2>Counter: {count}</h2>
      <br />
      <div className="btn-group">
        <button className="btn" onClick={increment}>Increment</button>
        <button className="btn" onClick={decrement}>Decrement</button>
        <button className="btn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
