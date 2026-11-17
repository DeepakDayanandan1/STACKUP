import { useState } from "react";

function Onchange(){
    const [value,setValue] = useState("");

    return(
        <div>
            <br /><br />
            <input type="text" className="input-box" id="ip" onChange={(e) => setValue("Welcome, " + e.target.value)}/>
            <p>{value}</p>
        </div>
    )
}

export default Onchange;