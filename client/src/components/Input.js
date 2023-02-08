import React from 'react';

const Input = ({ type, name, value, func, err }) => {
  
  return (
    <div>
      <label className="text-black" name={type}>
        {name}
      </label>
      <input
        className="w-full py-2 text-gray-600 px-1 outline-none mb-4 border-2 rounded-lg"
        type={type}
        name={name}
        placeholder={`Ingresa tu ${name}`}
        value={value}
        onChange={(e) => func(e)}
      />
      { err.email && (<p className='text-red-600 text-center'>* {err.email}</p>)}
      {err.password && (<p className='text-red-600 text-center'>* {err.password}</p>)}
    </div>
  );
};

export default Input;
