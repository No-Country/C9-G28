import React from 'react';
import {AiOutlineMail, AiOutlineLock} from 'react-icons/ai';


const Input = ({ type, name, label, value, func, err }) => {
  
  return (
    <div>
      <label className="text-black" name={type}>
        {label}
      </label>
      {
        name === 'email' ?
        <div className='absolute mt-3.5 ml-3 text-gray-700'><AiOutlineMail/></div>
        :
        <div className='absolute mt-3.5 ml-3 text-gray-700'><AiOutlineLock/></div>
      }
      
      <input
        className="w-full py-2 text-gray-600 px-1 outline-none mb-4 border-2 rounded-lg pl-10"
        type={type}
        name={name}
        placeholder={`Ingresa tu ${name}`}
        value={value}
        onChange={(e) => func(e)}
        
      />
      {err.email && <p className="text-red-600 text-center">* {err.email}</p>}
      {err.password && (
        <p className="text-red-600 text-center">* {err.password}</p>
      )}
    </div>
  );
};

export default Input;
