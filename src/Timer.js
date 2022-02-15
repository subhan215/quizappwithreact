import { useState, useEffect } from 'react'
function Timer() {
    const [initialMin, initialSec] = [7, 0];
    const [min, setMin] = useState(initialMin);
    const [sec, setSec] = useState(initialSec);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (sec > 0) {
                setSec(sec - 1);
            }
            if (sec === 0) {
                if (min === 0) {
                    clearInterval(myInterval);
                }
                else {
                    setMin(min - 1);
                    setSec(59)
                }
            }

        }, 1000)
        return () => clearInterval(myInterval)
    })

    return <p >{min}   : {(sec < 10) ? `0${sec}` : sec} </p>


}
export default Timer  