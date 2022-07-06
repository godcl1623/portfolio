import { useNavigate } from 'react-router-dom';

export default function useDelayedNavigate() {
  const navigate = useNavigate();

  return (destination, delay = 300) => setTimeout(() => navigate(`/${destination}`), delay);
}