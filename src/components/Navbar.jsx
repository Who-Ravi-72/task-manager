import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-300 text-Grey py-8">
     <div className="logo">
      <span className="font-bold text-3xl mx-8">Task Manager</span>
     </div>
      <ul className="flex gap-8">
       <li className="cursor-pointer font-bold text-2xl hover:font-bold transition-all mr-4">Home Page</li>
             </ul>
    </nav>
  )
}

export default Navbar