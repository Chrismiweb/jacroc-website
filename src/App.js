import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './About/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/navbar" element={<Navbar />}/> 

       


      </Routes>
    </BrowserRouter>
  );
}

export default App;
