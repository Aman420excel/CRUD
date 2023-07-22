import React, { useState } from "react";
import Modal from "./Modal";
import datas from "./Data";
const Crud = () => {
  const [inputData, updateInputData] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    company: "",
  });

  const [data, updatedata] = useState(datas)

  const deleteField = (event) => {
    updatedata(data.filter((k) => k.id !== event.target.id));
  };

  const updateField = (event) => {
    updateInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const submitData = (event) => {
    event.preventDefault();
    // eslint-disable-next-line array-callback-return
    data.map((k, v) => {
      if (k.id === inputData.id) {
        data[v].id = inputData.id;
        data[v].name = inputData.name;
        data[v].category = inputData.category;
        data[v].company = inputData.company;
        data[v].price = inputData.price;
      }
    });
    updatedata([...data]);
  };

  return (
    <div>
     
      
      <div> 
      <Modal></Modal>
      </div>

      <table className="tclass w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              NAME
            </th>
            <th scope="col" className="px-6 py-3">
              PRICE
            </th>
            <th scope="col" className="px-6 py-3">
              CATEGORY
            </th>
            <th scope="col" className="px-6 py-3">
              COMPANY
            </th>
            <th scope="col" className="px-6 py-3">
              UPDATE FIELD
            </th>
            <th scope="col" className="px-6 py-3">
              DELETE
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((k, v) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={k.id}
              >
                <td className="px-6 py-4">{k.id}</td>
                <td className="px-6 py-4">{k.name}</td>
                <td className="px-6 py-4">{k.price}</td>
                <td className="px-6 py-4">{k.category}</td>
                <td className="px-6 py-4">{k.company}</td>
                <td className="px-6 py-4">
                  <button
                    id={k.id}
                    onClick={() => updateInputData(k)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Update Field
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    id={k.id}
                    onClick={deleteField}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <form
          action="submit"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            value={inputData.name}
            onChange={updateField}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            value={inputData.price}
            onChange={updateField}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            name="category"
            placeholder="category"
            value={inputData.category}
            onChange={updateField}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            name="company"
            placeholder="company"
            value={inputData.company}
            onChange={updateField}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div className="submitBtn">
            <button
              id="submit"
              onClick={submitData}
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Update
            </button>
          </div>
        </form>
      </div>




    </div>
  );
};

export default Crud;
