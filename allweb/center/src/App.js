import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArticleDetail from "./pages/ArticleDetail";
import Article from './pages/Article';
import News from './pages/News';
import Videos from './pages/Videos';
import Edu1 from './pages/Edu1';
import Edu2 from './pages/Edu2';
import Edu3 from './pages/Edu3';
import Game from './pages/Game';
import Information from './pages/ ExhibitionInformation';
import EventReg from './pages/ EventRegistration';
import EventHigh from './pages/EventHighlights';
import './style/App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/edu1" element={<Edu1 />} />
        <Route path="/edu2" element={<Edu2 />} />
        <Route path="/edu3" element={<Edu3 />} />
        <Route path="/game" element={<Game />} />
        <Route path="/information" element={<Information/>} />
        <Route path="/evenReg" element={<EventReg/>} />
        <Route path="/evenHigh" element={<EventHigh />} />
      </Routes>
    </Router>
  );
}

export default App;
