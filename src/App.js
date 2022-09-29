import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MainNav from './components/MainNav/MainNav';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Test from './Pages/Test/Test';

const App = () => {
  return (
    <div className="">
      <MainNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route 
        exact
        path="/about" 
        element={
          <PrivateRoute>
          <About />
        </PrivateRoute>
      }/>
        <Route 
        exact
         path="/test"
          element={
          <PrivateRoute>
          <Test />
        </PrivateRoute>
      } />
      <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
