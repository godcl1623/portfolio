import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const Modal = () => {
  const thisComponent = useRef();
  const testFunc = ref => {
    ref.current.style.display = 'none';
  };
  return ReactDOM.createPortal(
    <div className="modals" style={{ background: 'rgba(0, 0, 0, 0.85)', width: '100%', height: '100%', position: 'absolute', top: '0', left: '0', zIndex: '1' }} ref={thisComponent} onClick={() => testFunc(thisComponent)}>
      <div className="modal-body" style={{ border: '1px solid black', width: '45%', height: '60%', background: 'white', top: '50%', left: '50%', position: 'relative', transform: 'translate(-50%, -50%)', zIndex: '2' }}>
        <h1>Modal</h1>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;