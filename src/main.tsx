import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.tsx';
import Nav from './components/Nav.tsx';
import HomePage from './components/HomePage.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import KarzhynWebsite from './components/KarzhynWebsite.tsx';
import FriendsList from './components/FriendsList.tsx';
import Memory from './components/Memory.tsx';
import Caster from './components/Caster.tsx';
import Salad from './components/Salad.tsx';
import NoProject from './components/NoProject.tsx';
import KingTiger from './components/KingTiger.tsx';
import StartUp from './components/StartUp.tsx';
import CafEight from './components/CafEight.tsx';
import MysteryWord from './components/MysteryWord.tsx';
import Rx7 from './components/Rx7.tsx';
import Ingen from './components/Ingen.tsx';
import './index.css';
import './Projects.css';
import './ProjectsBlog.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/karzhyn-website" element={<KarzhynWebsite />} />
        <Route path="/friends-list-website" element={<FriendsList />} />
        <Route path="/create-with-clint-double-memory" element={<Memory />} />
        <Route path="/caster-wheel" element={<Caster />} />
        <Route path="/salad-kitchen" element={<Salad />} />
        <Route path="/king-tiger" element={<KingTiger />} />
        <Route path="/start-up-themed-backgrounds" element={<StartUp />} />
        <Route path="/cafeight" element={<CafEight />} />
        <Route path="/mystery-word" element={<MysteryWord />} />
        <Route path="/rx7-fd" element={<Rx7 />} />
        <Route path="/ingen" element={<Ingen />} />
        <Route path="/:NoProject" element={<NoProject />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

