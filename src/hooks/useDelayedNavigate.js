import { useNavigate } from 'react-router-dom';

import { DEFAULT_DELAY_TIME } from '../common/constants';

const useDelayedNavigate = () => {
  const navigate = useNavigate();

  return (destination, delay = DEFAULT_DELAY_TIME) => setTimeout(() => navigate(`/${destination}`), delay);
}

export default useDelayedNavigate;