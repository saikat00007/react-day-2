import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MainNav from './components/MainNav/MainNav';
import NotFound from './components/NotFound/NotFound';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Test from './Pages/Test/Test';

const App = () => {
  return (
    <div className="">
      <MainNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
