import React from 'react';
import Landing from './pages/landing';
import Letter from './pages/letter';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <section style={{ touchAction: `none`, overflow: 'hidden' }}>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/slides' element={<Letter />}></Route>
      </Routes>
    </section>
  );
};

export default App;
