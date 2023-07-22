import React from "react";
import { useState } from "react";
const Homeform = () => {
  const obj = {
    name: "",
    password: "",
    phoneNumber: "",
    fullAddress: {
      city: "",
      country: "",
    },
    dob: "",
    gender: "",
  };
  const [formdata, UpdateFormData] = useState(obj);

  const handleEvents = (event) => {
    console.log(event.target);
    if (event.target.name === "city") {
      UpdateFormData({
        ...formdata,
        fullAddress: {
          city: event.target.value,
          country: formdata.fullAddress.country,
        },
      });
      console.log(formdata);
    } else if (event.target.name === "country") {
      UpdateFormData({
        ...formdata,
        fullAddress: {
          city: formdata.fullAddress.city,
          country: event.target.value,
        },
      });
      console.log(formdata);
    } else {
      UpdateFormData({ ...formdata, [event.target.name]: event.target.value });
      console.log(formdata);
    }
  };
  const handleSubmit = (event) => {
    alert("HHH")
    event.preventDefault();
  }

  return (
    <div className="homeForm">
      <form  onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="name"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              onChange={handleEvents}
              id="inline-full-name"
              type="text"
              value={formdata.name}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="password"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              onChange={handleEvents}
              id="inline-password"
              type="password"
              placeholder="******************"
              value={formdata.password}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-mob"
            >
              Mobile Number
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="phoneNumber"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              onChange={handleEvents}
              id="inline-mob"
              type="number"
              value={formdata.phoneNumber}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-city"
            >
              City
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-city"
              placeholder="City"
              type="text"
              name="city"
              onChange={handleEvents}
              value={formdata.fullAddress.city}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-country"
            >
              Country
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-country"
              placeholder="Country"
              type="text"
              name="country"
              onChange={handleEvents}
              value={formdata.fullAddress.country}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-gen"
            >
              Gender
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="gender"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              onChange={handleEvents}
              id="inline-full-gen"
              type="text"
              value={formdata.gender}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-dob"
            >
              DOB
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-dob"
              type="date"
              name="dob"
              onChange={handleEvents}
              value={formdata.dob}
            />
          </div>
        </div>
        <button id="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Homeform;
