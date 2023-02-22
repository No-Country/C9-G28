import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';

const SpecialistCard = ({
  id,
  image,
  name,
  lastName,
  hospital,
  place,
  specialist,
}) => {
  return (
    <div className="bg-white rounded-md shadow-2xl my-[16px] mx-auto w-[450px] h-[200px] p-[1px]">
      <div>
        <div className="flex flex-row m-6">
          <div className="mr-5">
            <div className="flex flex-row items-start mt-5">
              <h5 className="font-semibold mx-2">
                {name} {lastName}
              </h5>
              <div className="bg-green-100 text-green-800 rounded-3xl w-[120px] text-center mx-auto">
                <p>{specialist}</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between mt-4 mx-2">
              <p className="pr-4">{hospital}</p>
              <IoLocationOutline />
              <p>{place}</p>
            </div>
          </div>
          <img
            src={image}
            alt={image}
            className="rounded-full w-[100px] mx-auto"
          />
        </div>
        <div className="flex justify-between mx-20">
          <Link
            to={`/schedule/${id}`}
            className="btn btn-primary text-violet-900"
          >
            Solicitar turno
          </Link>

          <Link to="#" className="btn btn-primary ">
            Ver perfil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialistCard;
