 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import React from 'react';
import SaveMoreNO from './pages/SaveMoreNO';
import SaveMore from './pages/SaveMore';
import Protfolio from './pages/Protfolio';
import Track from './pages/Track';
import Langugease from './pages/Langugease';
import Leaning from './pages/Leaning';
import Help from './component/Product/Help/Help';

function App() {
  return (
    <div className="w-full overflow-y-auto">
      <BrowserRouter>
       <Routes >
         <Route path='/' element={  <Home />}  />
         <Route path='/SaveMoreNo' element={<SaveMoreNO />}  />
         <Route path='/SaveMore' element={<SaveMore />}  />
         <Route path='/Protfolio' element={<Protfolio />}  />
         <Route path='/Track' element={<Track />}  />
         <Route path='/Leaning' element={<Leaning />}  />
         <Route path='/Langugease' element={<Langugease />}  />
         <Route path='/helpCenter' element={<Help />}  />
        
          
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
