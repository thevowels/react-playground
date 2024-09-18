"use client"

import { useState, useRef } from "react"

export default function Counter({isFancy,ttt}:{isFancy:boolean,ttt:string}){
    const ref = useRef(0);
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);
  
    let className = 'counter';
    if (hover) {
      className += ' hover';
    }
    if (isFancy) {
      className += ' fancy';
    }
  
    return (
      <div
        className={className}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <h1>{score}</h1>
        <button 
        className="bg-transparent border-blue-500 border rounded-full px-2 py-2 mb-5"
        onClick={() => {
            setScore(score + 1)
            ref.current= ref.current+1
            
        }}>
          Add one
        </button>
        <br/>
        <button className="bg-transparent border-blue-500 border rounded-full px-2 py-2" onClick={() => alert('Ref is now ' + ref.current)}>
            Reference
        </button>
        <br/>
        <p className="mt-8 text-cyan-500">
          I'm {ttt}  
        </p>

      </div>
    );
  }