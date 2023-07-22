import React, { useRef, useState } from "react";
import datas from "./Data";
import Fref from "./Fref";
const Modal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [searchData, updatesearchData] = useState([{
    id: "",
    name: "",
    price: "",
    category: "",
    company: "",
  }]);
  const [searchValue, updatesearchValue] = useState("");
  const iref = useRef();

  const updateSearchField = (event) => {
    updatesearchValue(event.target.value);
  };
  const searchField = (event) => {
    
    let d = datas.filter((k) => k.id === searchValue);
    if(d.length<1){
        alert("NO MATCH FOUND")
    }else{
        updatesearchData(d)
        setShowModal(true)    
    }
  };


  return (
    <>
      
      <input ref={iref} type="text" name="iname" id="iname" placeholder="hello" ></input>
       <Fref ref={iref}></Fref>

        <div className="search-input">
            <div className="mb-6">
            <label
                htmlFor="success"
                className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
            >
                Your ID
            </label>
            <input
                value={searchValue}
                onChange={updateSearchField}
                type="text"
                id="success"
                className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                placeholder="Enter ID"
            />
            </div>
        </div>
      <button
        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="button"
        onClick={() => searchField()}
      >
       Search
      </button>

      
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Your Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                 
                    <span className="block text-black text-sm font-bold mb-1">
                      Name : {searchData[0].name}
                    </span>
                    <label className="block text-black text-sm font-bold mb-1">
                      PRICE : {searchData[0].price}
                    </label>
                    <label className="block text-black text-sm font-bold mb-1">
                      COMPANY : {searchData[0].company}
                    </label>
                    <label className="block text-black text-sm font-bold mb-1">
                      CATEGORY : {searchData[0].category}
                    </label>
                 </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;