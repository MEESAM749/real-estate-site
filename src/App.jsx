import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Listings from './pages/Listings';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="listings" element={<Listings />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin-login" element={<AdminLogin />} />
      </Route>
    </Routes>
  );
}

export default App;
