import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCars, removeCars } from './Action/Action';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';

function Home() {
  const dispatch = useDispatch();
  const card = useSelector(state => state.card);
  const cars = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020, price: 20000 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2015, price: 15000 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2018, price: 25000 },
    { id: 4, make: 'BMW', model: 'X5', year: 2022, price: 30000 },
  ];
  const isCars = (carId) =>{
    return card?.some(car =>car?.id ===carId )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Car Marketplace</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-lg rounded-lg p-6 w-64 transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-900">{car.make} {car.model}</h2>
            <p className="text-gray-600">{car.year}</p>
            <p className="text-lg font-bold text-green-600">${car.price.toLocaleString()}</p>
            <div className="flex justify-center mt-3">
              <span 
                className="text-4xl text-red-500 cursor-pointer hover:text-red-700 transition duration-200"
                onClick={() => isCars (car?.id) ?  dispatch(removeCars(car?.id)) : dispatch(addCars(car))}
              >

                {isCars (car?.id)? <FaHeart /> :<CiHeart />}
                
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;