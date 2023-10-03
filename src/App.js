import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dominical from './components/Dominical';
import Jaco from './components/Jaco';
import LaFortuna from './components/LaFortuna';
import PuraVida from './components/PuraVida';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={< PuraVida/>}>Pura Vida</Route>
            <Route path='Dominical' element={<Dominical />}>Dominical</Route>
            <Route path='Jaco' element={<Jaco />}>Jaco</Route>
            <Route path='LaFortuna' element={<LaFortuna />}>La Fortuna</Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
