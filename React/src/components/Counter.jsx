import { useState, useEffect } from "react"
function Counter() {
    const [increaseCount, setIncreaseCount] = useState(0)
    const [decreaseCount, setDecreaseCount] = useState(0)
    useEffect(() => {
        console.log("Increase count changed:", increaseCount)
    },[increaseCount])
    useEffect(() => {
        console.log("Decrease count changed:", decreaseCount)
    }, [decreaseCount])    
 return (
    <div>
        <h1>{increaseCount}</h1>
        <button className="btn" onClick={() => setIncreaseCount(increaseCount + 1)}>
            Increase
        </button>
        <h1>{decreaseCount}</h1>
        <button className="btn" onClick={() => setDecreaseCount(decreaseCount - 1)}>
            Decrease
        </button>        
    </div>
 )
}
export default Counter