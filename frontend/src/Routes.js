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
      <Route path="/" element={<Home />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default AppRoutes;
