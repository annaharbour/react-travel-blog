import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Dominical from './components/Dominical';
import Jaco from './components/Jaco';
import LaFortuna from './components/LaFortuna';
import PuraVida from './components/PuraVida';
import Layout from './components/Layout';
import Article from './components/Article';
import articles from './data/articles'
import Home from './components/Home';
import Mexico from './components/Mexico';
import Zihuatanejo from './components/Zihuatanejo';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Routes>
          <Route
            path="/"
            element={
              <>
              <Layout />
              <Outlet /> 
              </>
            }
          >              
              <Route path='/' element={< Home/> }>Home</Route>
              <Route path='/Mexico' element={<Mexico />}>La Fortuna</Route>
              <Route path='/Zihuatanejo' element={<Zihuatanejo />}>Zihuatanejo</Route>

              <Route path='/CostaRica' element={< PuraVida/> }>Costa Rica</Route>
              <Route path='/Dominical' element={<Dominical />}>Dominical</Route>
              <Route path='/Jaco' element={<Jaco />}>Jaco</Route>
              <Route path='/LaFortuna' element={<LaFortuna />}>La Fortuna</Route>
              {articles.map((article) => (
          <Route
            key={article.title}
            path={`article/${article.id}`}
            element={<Article article={article} />}
          />
        ))}
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
