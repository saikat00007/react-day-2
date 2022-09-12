import React from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About'
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import MainNav from './components/MainNav/MainNav';
import NotFound from './components/NotFound/NotFound';
import Blog from './pages/Blog/Blog';

const App = () => {
  const [theme, setTheme] = React.useState('light')
  const modeChange = () => {
    if (theme ==='light') {
      setTheme('dark');
    } else {
      setTheme('light')
    }
    console.log('test');
  }
  console.log(theme);
  return (
    <div className={`${theme}`} >
      <BrowserRouter>
     <MainNav />
     <button onClick={modeChange}> background change</button>
    <Routes>
    <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="about" element={<About />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
