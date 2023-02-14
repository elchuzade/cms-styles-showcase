import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

import CmsStylesPage from './pages/cmsStyles/CmsStylesPage'
import LandingPage from './pages/landing/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cms-styles" element={<CmsStylesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
