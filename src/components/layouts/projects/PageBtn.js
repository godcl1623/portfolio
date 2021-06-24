import React from 'react';

const PageBtn = ({ direction }) => {
  const btnText = direction === 'left' ? '◀' : '▶';
  return (
    <div className={`container ${direction}`} style={{ border: '1px solid black' }}>
      <span className={`btn ${direction}`} style={{ border: '1px solid black', width: '50px', height: '50px'}}>{ btnText }</span>
    </div>
  );
};

export default PageBtn;