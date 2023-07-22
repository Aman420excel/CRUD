import React from 'react'
import {useMemo,useState} from 'react';

const Memo = () => {

    const [count,updateCount]= useState(1);

    const calculation = useMemo(()=> expensiveCalculation(count),[count])

    function expensiveCalculation(count){
        for(let i=0;i<1000000000;i++){
            count=count+1;
        }
        return count;
    }
    

  return (
    <div>
        <button onClick={()=>updateCount(count+1)}>UPDATE</button>
        <h1>{calculation}</h1>
    </div>
  )
}

export default Memo
    