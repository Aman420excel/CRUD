import React from 'react'
import { useContext } from "react";
import { createData } from './Fref';
const Context = () => {

    const [fname,lname] = useContext(createData) ;

    return (
    <div>
    <h2>{fname}</h2>
    <h2>{lname}</h2>
    </div>
  )
}

export default Context
