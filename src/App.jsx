import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import ProtectedRoute from './utils/routes/ProtectedRoute';
import PublicRoute from './utils/routes/PublicRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute element={<Home />} />} />
      <Route path="/sobre-nosotros" element={<ProtectedRoute element={<About />} />} />
      <Route path="/iniciar-sesion" element={<PublicRoute element={<Login />} />} />
    </Routes>
  )
}

export default App
