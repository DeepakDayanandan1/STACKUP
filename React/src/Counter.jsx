import { useState } from "react";

function Counter() {
    const [name, setName] = useState("Hello ");

    return (
        <div>
            <button className="btn" onClick={() => setName("Hello, Deepak ")}>
               {name}
            </button>
        </div>
    );
}

export default Counter;


