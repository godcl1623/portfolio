// /* ***** Dependencies ***** */
// // libraries
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
// // components
// import BodySection from './layouts/BodySection';
// import projectsData from '../../../db/projectsData';
// import Carousel from '../../utils/Carousel';
// // action creators
// // import { setIsReadyToMove } from '../../../slices';
// // modules
// import { slideStartPoint, updateNextProjectState, changeActualProject } from '../../../modules/customfunctions';

// const Projects = props => {
//   /* States */
//   // States - Redux Store
//   const modalState = useSelector(state => state.sliceReducers.modalState);
//   const changeState = useSelector(state => state.sliceReducers.isChangingProject);
//   const selectedProject = useSelector(state => state.sliceReducers.selectedProject);
//   const readyToMove = useSelector(state => state.sliceReducers.isReadyToMove);
//   const list = useSelector(state => state.sliceReducers.projectsList);
//   // States - Local
//   const [startX, setStartX] = useState('');
//   const [endX, setEndX] = useState('');
//   const [startY, setStartY] = useState('');
//   const [endY, setEndY] = useState('');
//   // redux - dispatch
//   const dispatch = useDispatch();
//   // Props
//   const container = props.forRef;
//   // module extracting
//   const { headers } = projectsData;

//   // Component-specific Functions
//   // const coords = () => {
//   //   if (container.current) {
//   //     return container.current.childNodes[1].offsetWidth + 40;
//   //   }
//   // }

//   // const maxChangeValue = coords() * (headers.length - 1);

//   // Init Carousel Loop
//   // useEffect(() => {
//   //   const makeReady = setTimeout(() => dispatch(setIsReadyToMove(false)), 300);
//   //   return () => clearTimeout(makeReady);
//   // // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, [readyToMove]);

//   // Init Contents Scroll
//   useEffect(() => {
//     const projectsList = document.querySelector('.Projects').childNodes;
//     projectsList.forEach(project => {
//       setTimeout(() => {
//         project.scrollTop = 0;
//       }, 300);
//     });
//   }, [selectedProject]);

//   // Init Slider Transition
//   useEffect(() => {
//     const projectsList = document.querySelector('.Projects');
//     if (modalState === false) {
//       projectsList.style.transition = '';
//     }
//   }, [modalState]);

//   // Carousel Items
//   const Bodies = data => {
//     const temporaryArray = [];
//     const { images, icons, comments, links } = data;
//     headers.forEach((header, index) => {
//       temporaryArray.push(
//         <BodySection
//           key={index + 1}
//           header={header}
//           images={images[header]}
//           icons={icons[header]}
//           comments={comments[index]}
//           links={links[index]}
//           className={`Project${index + 1}`}
//           forRef={container}
//         />
//       );
//     });
//     const lastProject = <BodySection
//       key={`cloned ${headers.length - 1}`}
//       header={headers[headers.length - 1]}
//       images={images[headers[headers.length - 1]]}
//       icons={icons[headers[headers.length - 1]]}
//       comments={comments[headers.length - 1]}
//       className={`Cloned`}
//       forRef={container}
//     />;
//     const firstProject = <BodySection
//       key={`cloned 1`}
//       header={headers[0]}
//       images={images[headers[0]]}
//       icons={icons[headers[0]]}
//       comments={comments[0]}
//       className={`Cloned`}
//       forRef={container}
//     />;
//     const carousel = [lastProject, ...temporaryArray, firstProject];
//     return carousel;
//   };

//   return (
//     <div className="Projects"
//       ref={container}
//       css={css`
//         display: -webkit-box;
//         display: -ms-flexbox;
//         display: flex;
//         width: ${100 * (headers.length + 2)}%;
//         height: 100%;
//         -webkit-box-pack: center;
//         -ms-flex-pack: center;
//                 justify-content: center;
//         -webkit-box-align: center;
//         -ms-flex-align: center;
//                 align-items: center;
//         opacity: ${modalState ? '100%' : '0'};
//         position: relative;
//         left: ${slideStartPoint(headers)}%;
//         -webkit-transform: translateX(${changeState}px);
//             -ms-transform: translateX(${changeState}px);
//                 transform: translateX(${changeState}px);
//       `}
//       // onTouchStart={e => {
//       //   setStartX(e.touches[0].clientX);
//       //   setStartY(e.touches[0].clientY);
//       // }}
//       // onTouchMove={e => {
//       //     setEndX(e.touches[0].clientX);
//       //     setEndY(e.touches[0].clientY);
//       // }}
//       // onTouchEnd={() => {
//       //   if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
//       //     if (startX - endX > 0) {
//       //       updateNextProjectState('▶', selectedProject, list, dispatch, selectedProjectCreator);
//       //       changeActualProject('▶', changeState, maxChangeValue, dispatch, isChangingProjectCreator, isReadyToMoveCreator, coords);
//       //     } else if (startX - endX < 0) {
//       //       updateNextProjectState('◀', selectedProject, list, dispatch, selectedProjectCreator);
//       //       changeActualProject('◀', changeState, maxChangeValue, dispatch, isChangingProjectCreator, isReadyToMoveCreator, coords);
//       //     }
//       //   }
//       // }}
//     >
//       {/* { Bodies(projectsData) } */}
//       <Carousel
//         data={[1, 2, 3, 4, 5]}
//       />
//     </div>
//   );
// };

// export default React.memo(Projects);