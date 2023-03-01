import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BiTime } from 'react-icons/bi';

import { deleteTurn } from '../actions/userActions';

const TurnCard = ({ id, firstName, lastName, time, specialist, medicId }) => {
  const dispatch = useDispatch();

  const date = time.split(' ')[0];
  const hour = time.split(' ')[1];

  const submitHandlerDelete = () => {
    dispatch(deleteTurn(id));
  };

  return (
    <div className="flex items-center justify-between bg-white rounded-md shadow-2xl w-[450px] md:w-[700px] h-[150px] md:h-[100px] mt-5 px-5 md:px-10">
      <div className="flex flex-row">
        <div>
          <div className="flex flex-row items-center my-1">
            <h5 className="font-semibold md:mr-5">
              {firstName} {lastName}
            </h5>
            <div className="bg-green-100 text-green-800 rounded-3xl w-[120px] text-center mx-5 md:mx-auto">
              <p>{specialist}</p>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <BiTime className="text-3xl mr-2" />
            <div className="flex flex-col">
              <p>
                Turno: {date} a la(s) {hour}
              </p>
              {/* <p className="text-violet-900">Faltan 2 día(s)</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Link
          to="/"
          onClick={submitHandlerDelete}
          className="btn btn-danger text-red-600 md:mr-10"
        >
          Cancelar turno
        </Link>

        <Link
          to={`/schedule/${medicId}/update/${id}`}
          className="btn btn-primary text-violet-900"
        >
          Modificar
        </Link>
      </div>
    </div>
  );
};

export default TurnCard;
