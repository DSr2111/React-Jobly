import { React, useState, useEffect } from 'react';
import NavBar from './NavBar';
import AppRoutes from './Routes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
