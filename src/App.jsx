import React from 'react'
import Navbar from './Component/Navbar'
import Heropage from './Pages/Heropage'
import Experencepage from './Pages/Experencepage'

const App = () => {
  return (
    <div >
      <div className='bg-gray-500 text-white font-semibold'> 
      <Navbar />
      <Heropage/>
      </div>
      <div >
      <Experencepage/>
      </div>
        
    </div>
  )
}

export default App