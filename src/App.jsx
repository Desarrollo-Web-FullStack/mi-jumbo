import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-nosotros" element={<About />} />
      <Route path="/iniciar-sesion" element={<Login />} />
    </Routes>
  )
}

export default App
