import { useEffect, useState } from 'react';
import "./Time.css";


export default function Time() {
    const [timeString, setTimeString] = useState(0);
    const [dateString, setDateString] = useState(0);

    function updateClock() {
        setTimeString(new Date().toLocaleTimeString());
        setDateString(new Date().toLocaleDateString());
    }

    useEffect(() => {
        //Implementing the setInterval method
        updateClock();
        const interval = setInterval(updateClock, 1000);
        // console.log("time effect")
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, []);

    // setTimeString(new Date().toLocaleTimeString());

    return (
        <>
            <div className='timeString'>{timeString}</div>
            <div className='dateString'>{dateString}</div>
        </>
    )
}