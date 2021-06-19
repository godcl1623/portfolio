/* Dependencies */
// libraries
import React from 'react';
import { connect } from 'react-redux';
// components
import Common from './Common';
import Modal from './Modal';
// action creator
import modalHandler from '../actions';
// custom module
import { genSection } from './modules/customfunctions';

/* Component Body */
const Works = ({ modalState, modalHandler }) => {
  const projects = {
    icon: ['1', '2', '3'],
    subject: ['프로젝트 1', '프로젝트 2', '프로젝트 3'],
    header: '',
    content: '',
    setState: () => modalHandler(true)
  };

  return (
    <div className="Works">
      <Common heading="Works" sections={genSection(projects)} />
      <Modal modalState={modalState} changeState={modalHandler} />
    </div>
  );
};

const mapStateToProps = state => ({ modalState: state.modalState });

export default connect(mapStateToProps, { modalHandler })(Works);