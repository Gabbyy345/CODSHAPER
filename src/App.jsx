import React from 'react'
import Navbar from './Component/Navbar'
import Heropage from './Pages/Heropage'
import Experencepage from './Pages/Experencepage'
import Market from './Pages/Market'

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
      <div>
      <Market/>
      </div>
        
    </div>
  )
}

export default App