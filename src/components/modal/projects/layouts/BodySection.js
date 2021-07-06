import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex, border } from '../../../../styles/presets';
// import { imageContainer, iconContainer, projectComment } from '../../../../db/projectsData';
import tools from '../../../../modules/customfunctions';
import { A } from '../../../../styles/elementsPreset';
import { isChangingProjectCreator } from '../../../../actions';

const { selectedHeader, imageContainer, iconContainer } = tools;

const BodySection = props => {
  const selectedProject = useSelector(state => state.selectedProject);
  const projectChangingStat = useSelector(state => state.isChangingProject);
  const list = useSelector(state => state.projectsList);
  const dispatch = useDispatch();
  console.log(typeof props.header)
  React.useEffect(() => {
    const projectStatChange = setTimeout(() => dispatch(isChangingProjectCreator(false)), 300);
    return () => clearTimeout(projectStatChange);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectChangingStat]);

  const cssPropChangeTest = () => {
    console.log('foo');
  };

  const makeChkboxes = list.map(project => {
    const selectedProjectNumber = selectedProject.split(' ')[1];
    const isChecked = project === selectedProjectNumber;
    return (
      // 라벨 이용해서 꾸미기
      <input
        key={project}
        type="checkbox"
        checked={isChecked}
        onChange={() => {}}
        css={css`
          margin: 0 5px;
        `}
      />
    );
  });

  return (
    <div
      className="container-body"
      css={css`
        // 임시
        ${border}
        margin: 0 20px;
        max-width: 100%;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        // opacity: ${props.selectedNumber === selectedProject ? '100%' : '0'};
        // display: ${props.selectedNumber === selectedProject ? 'block' : 'none'};
        position: absolute;
        // left: -500px;
        transition: all 0.5s;
      `}
    >
      { selectedHeader(props.header) }
      { imageContainer(props.images.length) }
      { iconContainer(props.icons.length) }
      <p
        className="projects-comments"
        css={css`
          margin: 40px 0;
          padding: 0 10%;
          width: 100%;
          height: auto;
        `}
      >{ props.comments }</p>
      <div
        className="link-container"
        css={css`
          width: 100%;
          height: 50px;
          ${flex.horizontal.center}
          justify-content: space-around;
        `}
      >
        <A href="https://github.com/godcl1623" target="_blank" rel="noreferrer noopener">GITHUB</A>
        <A href="https://godcl1623.tistory.com/" target="_blank" rel="noreferrer noopener">BLOG</A>
      </div>
      <div
        className="page-indicator"
        css={css`
          position: fixed;
          left: 50%;
          bottom: 0;
          transform: translate(-50%, -50%);
        `}
      >
        { makeChkboxes }
      </div>
    </div>
  );
};

export default BodySection;