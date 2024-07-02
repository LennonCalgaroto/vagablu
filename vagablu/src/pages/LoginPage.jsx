import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Typography } from '@mui/material';
import LoginForm from '../component/layout/LoginForm.jsx';


const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled(Typography)`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar o status de login

  // Função para realizar o login
  const handleLogin = () => {
    // Lógica de verificação de login (sempre retorna true por enquanto)
    setIsLoggedIn(true);
  };

  // Se estiver logado, redirecione para a página home
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <StyledContainer maxWidth="sm">
      <Title variant="h4" align="center" gutterBottom>
        Bem-vindo de volta!
      </Title>
      <LoginForm onLogin={handleLogin} />
    </StyledContainer>
  );
};

export default LoginPage;
