import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Models from './pages/Models';
import Features from './pages/Features';
import LocateUs from './pages/LocateUs';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BookNow from './pages/BookNow';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/features" element={<Features />} />
            <Route path="/locate-us" element={<LocateUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/book-now" element={<BookNow />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;