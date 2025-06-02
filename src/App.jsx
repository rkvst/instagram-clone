import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './Suggestions'
import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start h-screen">
      <div className="hidden md:block md:w-[20%]">
        <Sidebar />
      </div>

      {/* Centered Feed for Mobile */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full max-w-[420px]">
          <Feed />
        </div>
      </div>

      <div className="hidden lg:block md:w-[30%]">
        <Suggestions />
      </div>
    </div>
  )
}

export default App
