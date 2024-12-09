import LoginPage from "../pages/LoginPage";
import Page1 from "../pages/Page1";
import Vagas from "../component/common/Vaga.jsx";

const Routes = [
  {
    name: 'Login',
    path: '/',
    component: <LoginPage />,
    exact: true,
    type: 'LOGIN',
  },
  {
    name: 'Cadastro de Cliente',
    path: '/menu1',
    component: <Page1 />,
    exact: true,
    type : 'MENU',

  },
  {
    name: 'Reservar Vaga',
    path: '/reserva',
    component: <Vagas />,
    exact: true,
    type : 'MENU',
  }
];

export default Routes;
