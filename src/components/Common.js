import React from 'react';
import { useHistory } from 'react-router-dom';

// Component Body
const Common = props => {
  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <div>
      <button onClick={handleClick}>홈</button>
      <h1>{props.heading}</h1>
      <hr />
      { props.selfInfo }
      { props.sections }
    </div>
  );
};

export default Common;