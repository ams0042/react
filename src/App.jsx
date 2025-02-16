import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import CompoundInterestCalculator from './components/CompoundInterestCalculator/CompoundInterestCalculator';

const App = () => (
  <ThemeProvider>
    <Router>
      <Header />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <CompoundInterestCalculator />  {/* ✅ Se muestra en todas las páginas */}
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
