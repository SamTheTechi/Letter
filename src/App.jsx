import React, { useEffect } from 'react';
import Landing from './pages/landing';
import Letter from './pages/letter';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <section style={{ background: 'fixed', overflow: 'hidden' }}>
      <Routes>
        <Route path={'/'} element={<Landing />}></Route>
        <Route path={'/Slides'} element={<Letter />}></Route>
      </Routes>
    </section>
  );
};

export default App;
