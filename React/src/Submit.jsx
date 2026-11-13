import { useState } from "react";

function Submit(){
    const [value,setValue] = useState("");

    return(
        <div>
            <input type="text" className="input-box" id="ip"/><br /><br />
            <button className="btn" onClick={() => setValue("Welcome, " +  document.getElementById("ip").value)}>
                Submit
            </button>
            <p>{value}</p>
        </div>
    )
}

export default Submit;