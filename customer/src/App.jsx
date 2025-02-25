import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './app/Home/home';
import Coping from './app/Coping/coping';
import Support from './app/Support/support';
import Landing from './app/Landing/landing';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

import Article1 from './app/Coping/Articles/article1';
import Article2 from './app/Coping/Articles/article2';
import Article3 from './app/Coping/Articles/article3';

import './App.css';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation(); 

  return (
    <div className="App">
      {location.pathname !== "/landing" && <Navbar />}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coping" element={<Coping />} />
          <Route path="/support" element={<Support />} />
          <Route path="/landing" element={<Landing />} />

          <Route path="/article1" element={<Article1 />} />
          <Route path="/article2" element={<Article2 />} />
          <Route path="/article3" element={<Article3 />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
