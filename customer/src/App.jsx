import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './app/Home/home';
import Coping from './app/Coping/coping';
import Support from './app/Support/support';
import Landing from './app/Landing/landing';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation(); // Get current route

  return (
    <div className="App">
      {location.pathname !== "/landing" && <Navbar />}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coping" element={<Coping />} />
          <Route path="/support" element={<Support />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
