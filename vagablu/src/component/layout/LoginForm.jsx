import React from 'react';
import { TextField, Button, Link, Typography } from '@mui/material';

const LoginForm = ({ onLogin }) => {
    
  const handleLoginClick = () => {
    onLogin();
  };

  return (
    <form>
      <TextField
        id="username"
        label="Nome de usuário"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="password"
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLoginClick}>
        Entrar
      </Button>
      <Typography align="center">
        <Link href="#" variant="body2">
          Esqueceu a senha?
        </Link>
      </Typography>
    </form>
  );
};

export default LoginForm;
