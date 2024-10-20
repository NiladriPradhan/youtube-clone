import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import { useState } from 'react';
import PlayVideo from './components/play-video/PlayVideo';
import TestApi from './TestApi';

function App() {

  const [sidebar, setsidebar] = useState(true);

  return (
    <div>
      <Navbar setsidebar={setsidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
        <Route path='/PlayVideo' element={<PlayVideo />} />
        <Route path='/TestApi' element={<TestApi />} />
      </Routes>
    </div>
  );
}

export default App;
