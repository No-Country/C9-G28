import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';

const Card = ({ image, hospital, place, specialist }) => {
  return (
    <div className="flex-row bg-white rounded-md shadow-2xl m-[16px] w-[250px] h-[350px] p-[1px]">
      <div className="text-center">
        <img
          src={image}
          alt={image}
          className="rounded-full w-[150px] mx-auto mb-4 mt-7"
        />
        <h5 className="font-bold mb-1">{hospital}</h5>
        <div className="flex items-center justify-center mb-4">
          <IoLocationOutline />
          <p>{place}</p>
        </div>
        <div className="bg-green-100 text-green-800 rounded-3xl mb-5 w-[120px] text-center mx-auto">
          <p>{specialist}</p>
        </div>
        <Link href="#" className="btn btn-primary text-violet-900">
          Ver entidad
        </Link>
      </div>
    </div>
  );
};

export default Card;
