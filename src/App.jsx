import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from './Action/Action';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <div className="flex items-center justify-center space-x-5">
          <button 
            className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold"
            onClick={() => dispatch(Increment())}>
            +
          </button>
          <span className="text-3xl font-semibold">{count}</span>
          <button 
            className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold"
            onClick={() => dispatch(Decrement())}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
