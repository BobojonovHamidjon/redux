import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeCars } from './Action/Action';

function Header() {
  const dispatch = useDispatch();
  const card = useSelector(state => state.card);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Favorite Cars</h2>
      <div className='flex flex-wrap justify-center gap-6'>
        {card?.length > 0 ? (
          card.map(car => (
            <div 
              key={car?.id} 
              className='bg-gray-100 shadow-lg  p-6 w-64 transform hover:scale-105 transition duration-300'
            >
              <h2 className="text-xl font-semibold text-gray-900">{car.make} {car.model}</h2>
              <p className="text-gray-600">{car.year}</p>
              <p className="text-lg font-bold text-green-600">${car.price.toLocaleString()}</p>
              <div className="flex justify-center mt-3">
                <span  
                  className='text-4xl text-red-500 cursor-pointer hover:text-red-700 transition duration-200' 
                  onClick={() => dispatch(removeCars(car?.id))}
                >
                  <FaHeart />
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg"></p>
        )}
      </div>
    </div>
  );
}

export default Header;