import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center text-3xl text-black font-bold">Ferdy Personal Website</div>
      <div className="header flex mt-10 border-2 border-solid border-black">
        <Link className="flex-1" to="/">
          <nav className="
            text-center no-underline 
            text-black
            font-bold
            hover:bg-black hover:text-white
            hover:transition-all delay-0 duration-300
            p-6">
              About
          </nav>
        </Link>
        <Link className="flex-1" to="/portofolio">
          <nav className="
            text-center no-underline 
            text-black
            font-bold
            hover:bg-black hover:text-white
            hover:transition-all delay-0 duration-300
            p-6">
              Portofolio
          </nav>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<AboutPage />}/>
      </Routes>
    </div>
  );
}

export default App;
