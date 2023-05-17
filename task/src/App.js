import { Routes,Route } from 'react-router-dom';
import Adduser from './Add List/Adduser';

import './App.css';
import Navbar from './Components/Navbar';
import PageContent from './Components/PageContent';
import Sidebar from './Components/Sidebar';
import Space360 from './Components/Space360';
import Stepper from './Stepper/Stepper';

function App() {
  return (
    <>
      
     {/* <div className="App">

       <Navbar/>
      <div className='space'>
      <Sidebar />
      <PageContent /> 
       <Routes>
       <Route path="/stepper" element={<Stepper/> } />
      <Route path="/space360" element={<Space360/> } />
      </Routes>
      </div>
      </div> */}

    
      <Stepper/> 
      

     {/* <Adduser/> */}
    

    {/* <TableList/>    */}
   
    </>
  );
}
export default App;
