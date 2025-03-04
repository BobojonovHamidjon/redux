import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div  className='bg-blue-600 h-6'  >
      <NavLink  to="/"  className="p-2 text-white">Home</NavLink>
      <NavLink to="/favorities"  className="p-2 text-white">Favorites</NavLink>
      <Outlet/>
    </div>
  )
}

export default App