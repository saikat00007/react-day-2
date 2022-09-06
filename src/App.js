// import React from 'react';

import './App.css';
import Header from './Header/Header';
import Blog from './Blogs/Blog';
import Cnt from './contect-me/contect-me'
import Footer from './TF/Footer';
// import Img from './Img/01.png';

const App = () => {
  return (
    <div className="">
      

      <Header />
      <Blog />
      <Cnt />
      <Footer />
      {/* <img src={Img} alt="" /> */}
    </div>
  );
}

export default App;
