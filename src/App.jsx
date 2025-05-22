import React from 'react'
import Navbar from './Component/Navbar'
import Heropage from './Pages/Heropage'
import Experencepage from './Pages/Experencepage'
import Market from './Pages/Market'
import CasePage from './Pages/CasePage'
import Missionpage from './Pages/Missionpage'
import QuestionPage from './Pages/QuestionPage'
import AboutPage from './Pages/AboutPage'
import ConsultSolution from './Pages/ConsultSolution'
import SuccessRate from './Component/Bussiness/SuccessRate'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <div style={{fontFamily: 'Jost', fontWeight: '400'}} >
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
                                        <div>
                                          <ConsultSolution/>
                                        </div>
                                        <div>
                                          <SuccessRate/>
                                        </div>
                                        <div>
                                          <Footer/>
                                        </div>
                                            </div>
  )
}

export default App

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