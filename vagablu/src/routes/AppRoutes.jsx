// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import RoutesConfig from './Routes'; // Importa a estrutura de rotas

// eslint-disable-next-line react/prop-types
const RoutesWithLocation = ({ setIsLoginPage }) => {
  const location = useLocation();

  useEffect(() => {
    setIsLoginPage(location.pathname === '/');
    // Ajuste isso conforme necessário para detectar a página de login
  }, [location, setIsLoginPage]);

  return (
    <Routes>
      {RoutesConfig.map(({ path, component, exact }) => (
        <Route key={path} path={path} element={component} exact={exact} />
      ))}
    </Routes>
  );
};

// eslint-disable-next-line react/prop-types
const AppRoutes = ({ setIsLoginPage }) => (
  <Router>
    <RoutesWithLocation setIsLoginPage={setIsLoginPage} />
  </Router>
);

export default AppRoutes;
