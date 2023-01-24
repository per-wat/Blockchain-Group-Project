import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function PrivateRoute({ children, roles }) {
  const { user, role} = useAuth();
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (!user || roles.includes(role)) {
      alert('You are not authorized!');
      navigate('/');
    }
  }, [user, navigate])

  return children;
}
