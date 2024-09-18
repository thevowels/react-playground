"use client"

import { useState } from "react"

export default function StopWatch(){
    
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);

    function handleStart(){
        setStartTime(Date.now());
        setNow(Date.now());

        setInterval( () =>{
            setNow(Date.now());
        }, 10)
    }

    let secondsPassed = 0;
    if(startTime != null && now != null){
        secondsPassed = (now - startTime) /1000;
    }
    
    return(
        <div className="w-[300px] flex flex-col justify-center align-center text-center bg-slate-100 p-5">
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button 
            className="self-center px-4 py-1 my-3 button border border-gray-500 rounded-lg"
            onClick={handleStart}>
                start
            </button>
        </div>
    )
}