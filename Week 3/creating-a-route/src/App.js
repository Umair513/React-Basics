import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <Link to="/contact" className='nav-item'>Contact Little Lemon</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path='/contact' element={Contact}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
