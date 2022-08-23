import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Main = React.lazy(() => import('pages/main/Main'));
const About = React.lazy(() => import('pages/about/About'));
const Works = React.lazy(() => import('pages/works/Works'));

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
