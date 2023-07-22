import React, { createContext,forwardRef } from 'react'
import Context from './Context';
import Memo from './Memo';
var createData = createContext("AAAAAA") ;
const Fref = forwardRef((props,iref) => {

  let fname ="aman";
  let lname = "jain";

    const operation = (event)=>{
          iref.current.style.background="rgb(250,250,210)";
      }
  return (
    <div>
    <Memo></Memo>
      <button
        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="button"
        onClick={() => operation()}
      >
       Operation
      </button>

    <createData.Provider value={[fname,lname]}>
        <Context fname={fname} lname={lname} ></Context>
    </createData.Provider>

    </div>
  )
})
export {createData};

export default Fref
