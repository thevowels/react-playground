"use client"

import { useRef, useState } from "react"

export default function StopWatch(){
    
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    function handleStart(){
        setStartTime(Date.now());
        setNow(Date.now());
        
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval( () =>{
            setNow(Date.now());
        }, 10)
    }
    function handleStop(){
        clearInterval(intervalRef.current)
    }

    let secondsPassed = 0;
    if(startTime != null && now != null){
        secondsPassed = (now - startTime) /1000;
    }
    
    return(
        <div className="w-[300px] flex flex-col justify-center align-center text-center bg-slate-100 p-5">
            <h1>
                <span>Time passed:</span>
                <span className="whitespace-nowrap font-mono font-bold"> {secondsPassed.toFixed(3)}</span>
            </h1>
            <div className="flex justify-between px-10">
            <button 
            className="self-center px-4 py-1 my-3 button border border-gray-500 rounded-lg"
            onClick={handleStart}>
                start
            </button>
            <button 
            className="self-center px-4 py-1 my-3 button border border-gray-500 rounded-lg"
            onClick={handleStop}>
                stop
            </button>
            </div>
        </div>
    )
}