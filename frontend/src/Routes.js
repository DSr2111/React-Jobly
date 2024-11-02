import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Jobs from './Jobs';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/" />
      <Route path="/" />
    </Routes>
  );
}

export default AppRoutes;
