import React from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { MdClose } from 'react-icons/md';

import { isEqual } from 'utils/capsuledConditions';
import { Button } from 'styles/elementsPreset';

import * as modalStyles from './style/modalStyles';

const Modal = props => {
  const location = useLocation();

  const styleWidth = isEqual(location.pathname, '/works') ? '75%' : '45%';
  const styleHeight = isEqual(location.pathname, '/works') ? '90%' : '60%';

  function handleModalContainerClick(event) {
    if (isEventTargetIncludes(event, 'modals')) props.changeState(false);
  }

  const isEventTargetIncludes = (event, condition) => event.target.className.includes(condition);

  function handleModalCloseButtonClick(event) {
    props.changeState(false);
  }

  return ReactDOM.createPortal(
    <div className="modals" onClick={handleModalContainerClick} css={modalContainerStyle(props)}>
      {props.buttons ? props.buttons[0] : ''}
      <div className="modal-body" css={modalBodyStyle(props, styleWidth, styleHeight)}>
        <Button
          className="close"
          onClick={handleModalCloseButtonClick}
          css={modalCloseButtonStyle(props)}
        >
          <MdClose css={modalCloseIconStyle} />
        </Button>
        {props.componentInDisplay}
        {props.indicator ? props.indicator : ''}
      </div>
      {props.buttons ? props.buttons[1] : ''}
    </div>,
    document.querySelector('#modal')
  );
};

export default React.memo(Modal);

const { modalContainerStyle, modalBodyStyle, modalCloseButtonStyle, modalCloseIconStyle } =
  modalStyles;
