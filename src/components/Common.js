/* Dependencies */
// libraries
import React from 'react';
import { useHistory } from 'react-router-dom';

// Component Body
const Common = props => {
  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <div>
      {/* 홈 버튼 */}
      <button onClick={handleClick}>홈</button>
      {/* 구획 제목 */}
      <h1>{props.heading}</h1>
      <hr />
      {/* About 참조 */}
      { props.selfInfo }
      { props.sections }
    </div>
  );
};

export default Common;