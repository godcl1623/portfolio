import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedProject } from '../../../actions';

const PageBtn = ({ direction }) => {
  const current = useSelector(state => state.selectedProject);
  const dispatch = useDispatch();
  const testFunc = btnText => {
    const projectText = current.split(' ')[0];
    let projectNumber = Number(current.split(' ')[1]);
    if (btnText === '▶') {
      projectNumber += 1;
    } else {
      projectNumber -= 1;
    }
    // 임시 로직 - 데이터 목록을 배열로 받아서 하드코딩 말고 배열 api로 구현하기
    if (projectNumber <= 0) {
      projectNumber = 3;
    } else if (projectNumber >= 4) {
      projectNumber = 1;
    }
    const test = [projectText, projectNumber].join(' ');
    console.log(test);
    dispatch(selectedProject(test));
  };
  console.log(current.split(' '));
  const btnText = direction === 'left' ? '◀' : '▶';

  return (
    <div className={`container ${direction}`} style={{ border: '1px solid black' }}>
      <button
        className={`btn ${direction}`}
        style={{ border: '1px solid black', width: '50px', height: '50px'}}
        onClick={() => testFunc(btnText)}
      >{ btnText }</button>
    </div>
  );
};

export default PageBtn;