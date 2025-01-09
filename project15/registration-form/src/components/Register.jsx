import React, { useState } from 'react';

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitData = () => {
    const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];
    const updatedUsers = [...existingUsers, data]; 
    localStorage.setItem('userData', JSON.stringify(updatedUsers));

    console.log('User data saved:', updatedUsers);
  };


  return (
    <div className="w-full flex items-center justify-center pt-24 px-4">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <img
            className="w-full h-full object-cover"
            src="https://media.istockphoto.com/id/1385168396/photo/people-registering-for-the-conference-event.jpg?s=612x612&w=0&k=20&c=ZHMACoGg5zfL-nUzjoXTrXedDXXoj_E7rBZBihaWfBA="
            alt="Registration Event"
          />
        </div>
        {/* Right Section: Form */}
        <div className="flex flex-col justify-center items-center p-6 lg:w-1/2 gap-4">
          <h1 className="text-black text-center py-4 text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Registration Form
          </h1>
          <input
            className="py-2 px-4 focus:outline-none text-black border border-gray-300 w-full sm:w-[80%] lg:w-[70%] rounded-md"
            type="text"
            placeholder="Enter Your Name"
            name='name'
            value={data.name}
            onChange={handleChange}
          />
          <input
            className="py-2 px-4 focus:outline-none text-black border border-gray-300 w-full sm:w-[80%] lg:w-[70%] rounded-md"
            type="email"
            placeholder="Test@gmail.com"
            name='email'
            value={data.email}
            onChange={handleChange}
          />
          <input
            className="py-2 px-4 focus:outline-none text-black border border-gray-300 w-full sm:w-[80%] lg:w-[70%] rounded-md"
            type="text"
            placeholder="+91 9876543234"
            name='phone'
            value={data.phone}
            onChange={handleChange}
          />
          <input
            className="py-2 px-4 focus:outline-none text-black border border-gray-300 w-full sm:w-[80%] lg:w-[70%] rounded-md"
            type="password"
            placeholder="Password"
            name='password'
            value={data.password}
            onChange={handleChange}
          />
          <button className="bg-purple-900 hover:bg-purple-700 text-white px-8 sm:px-12 py-2 rounded-md transition duration-200" onClick={submitData}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
