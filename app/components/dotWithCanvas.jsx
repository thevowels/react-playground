"use client"

import { usePointerPosition } from "../../hooks/usePointerPosition";
import { useDelayedValue } from "../../hooks/useDelayedValue";

export default function Canvas(){
    const pos1 = usePointerPosition();
    const pos2= useDelayedValue(pos1,100);
    const pos3= useDelayedValue(pos2,200);
    const pos4= useDelayedValue(pos3,100);
    const pos5= useDelayedValue(pos4,50);
    
    return(
        <>

            <Dot position={pos1} opacity={0.6}/>
            <Dot position={pos2} opacity={0.4}/>
            <Dot position={pos3} opacity={0.3}/>
            <Dot position={pos4} opacity={0.2}/>
            <Dot position={pos5} opacity={0.1}/>
            
        </>
    )
    
}

function Dot({position, opacity}){
    return(
            <div style={{
            position: 'absolute',
            backgroundColor: 'pink',
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            opacity, // Set opacity to 0 by default
    
        }}/>
    )
}