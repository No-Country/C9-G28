import React from 'react';
import {AiOutlineMail, AiOutlineLock} from 'react-icons/ai';
import {BsPencil} from 'react-icons/bs';


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
        name === 'nombre' || name === 'apellido' || name === 'telefono' ?
        <div className='absolute mt-3.5 ml-3 text-gray-700'><BsPencil/></div>
        :
        <div className='absolute mt-3.5 ml-3 text-gray-700'><AiOutlineLock/></div>
      }
      
      <input
        className="w-full py-2 text-gray-600 px-1 outline-none mb-4 border-2 rounded-lg pl-10"
        type={type}
        name={name}
        placeholder={err !== 'false' ? `Ingresa tu ${name}` :  `Ingresa tu password` }
        value={value}
        onChange={(e) => func(e)}
        
      />
      {err.email && <p className="text-red-600 text-center">* {err.email}</p>}
      {err.password && (
        <p className="text-red-600 text-center">* {err.password}</p>
      )}
      {err.nombre && <p className="text-red-600 text-center">* {err.nombre}</p>}
      {err.apellido && <p className="text-red-600 text-center">* {err.apellido}</p>}
      {err.telefono && <p className="text-red-600 text-center">* {err.telefono}</p>}
    </div>
  );
};

export default Input;
