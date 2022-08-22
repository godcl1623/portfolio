import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Main = lazy(() => import('pages/main/Main'));
const About = lazy(() => import('pages/about/About'));
const Works = lazy(() => import('pages/works/Works'));

const Routing = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/works" element={<Works />} />
    </Routes>
  </Router>
);

export default Routing;
