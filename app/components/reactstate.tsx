"use client"

import Counter from "./counter";
import { useState } from "react";


export default function ReactState(){
    const [isFancy, setIsFancy] = useState(false);
    if (isFancy) {
      return (
        <div>
          <Counter isFancy={true} ttt="abc"/>
          <label>
            <input
              type="checkbox"
              checked={isFancy}
              onChange={e => {
                setIsFancy(e.target.checked)
              }}
            />
            Use fancy styling
          </label>
        </div>
      );
    }
    return (
      <div>
        <Counter isFancy={false} ttt="def"/>
        <label>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={e => {
              setIsFancy(e.target.checked)
            }}
          />
          Use fancy styling
        </label>
      </div>
    );}