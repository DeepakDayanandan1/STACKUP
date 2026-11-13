import { useState } from "react";

function Toggle(){
    const [isOn,setIsOn] = useState(false)

    return(
        <div>
            <br /><br />
            <p>Status: {isOn?"ON":"OFF"}</p>
            <button className="btn" onClick={() => setIsOn(!isOn)}>
                Toggle
            </button><br /><br />
        </div>
    )
}

export default Toggle;