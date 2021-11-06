import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/nav/Nav';
import styles from './app.module.css';
import { Default } from './components/pages/default/Default';
import { Brands } from './components/pages/brands/Brands';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Nav />
      <div className={styles.workspace}>
        <Routes>
          <Route path="/shadows" element={<Brands />} />
          <Route path="/" element={<Default />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
