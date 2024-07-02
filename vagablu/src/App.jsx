import React, { useState } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import Menu from './component/layout/MiniDrawer';

function App() {
  const [isLoginPage, setIsLoginPage] = useState(true); 

  return (
    <>
      {!isLoginPage && <Menu />}
      <AppRoutes setIsLoginPage={setIsLoginPage} />
    </>
  );
}

export default App;
