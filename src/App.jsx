import React from 'react'
import Navbar from './Component/Navbar'
import Heropage from './Pages/Heropage'
import Experencepage from './Pages/Experencepage'
import Market from './Pages/Market'
import CasePage from './Pages/CasePage'
import Missionpage from './Pages/Missionpage'
import QuestionPage from './Pages/QuestionPage'
import AboutPage from './Pages/AboutPage'

const App = () => {
  return (
    <div >
      <div className='bg-gray-500 text-white font-semibold '> 
      <Navbar />
      <Heropage/>
            </div>
           <div >
             <Experencepage/>
                </div>
               <div>
                  <Market/>
                     </div>
                        <div>
                          <CasePage/>
                           </div>
                             <div>
                                <Missionpage/>
                                 </div>
         
                                   <div>
                                     <QuestionPage/>
                                        </div>
                                        <div>
                                          <AboutPage/>
                                        </div>
                                            </div>
  )
}

export default App
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Component/Navbar';
// import Heropage from './Pages/Heropage';
// import Experencepage from './Pages/Experencepage';
// import Market from './Pages/Market';
// import CasePage from './Pages/CasePage';
// import Missionpage from './Pages/Missionpage';

// const App = () => {
//   return (
  
//   <div>
//     <Navbar />
//     <Routes>
//       <Route path="*" element={<Heropage />} />
//       <Route path="/" element={<Experencepage />} />
//       <Route path="/" element={<Market />} />
//       <Route path="/" element={<CasePage />} />
//       <Route path="/" element={<Missionpage />} />
//       <Route path="*" element={<Heropage />} />
//     </Routes>
//   </div>

//   );
// };

// export default App;