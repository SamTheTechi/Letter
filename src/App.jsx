import React, { useEffect } from 'react';
import Landing from './pages/landing';
import Letter from './pages/letter';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <section style={{ background: 'fixed', overflow: 'hidden' }}>
      <Routes>
        <Route path={'/Letter/'} element={<Landing />}></Route>
        <Route path={'/Letter/Slides'} element={<Letter />}></Route>
      </Routes>
    </section>
  );
};

export default App;
