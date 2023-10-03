import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Dominical from './components/Dominical';
import Jaco from './components/Jaco';
import LaFortuna from './components/LaFortuna';
import PuraVida from './components/PuraVida';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout />
                <Outlet /> {/* Nested routes will be rendered here */}
              </>
            }
          >
              <Route path="/" element={<PuraVida />} />
              <Route path='/' element={< PuraVida/>}>Pura Vida</Route>
              <Route path='Dominical' element={<Dominical />}>Dominical</Route>
              <Route path='Jaco' element={<Jaco />}>Jaco</Route>
              <Route path='LaFortuna' element={<LaFortuna />}>La Fortuna</Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
