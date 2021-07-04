/* Dependencies */
// libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MdHome, MdKeyboardArrowUp } from 'react-icons/md';
import { selectedMenuCreator, changeDetectedCreator } from '../../actions';
// modules
import Common from '../utils/Common';
import { selfInfo, introduction, skills } from '../../db/aboutData';
import { flex, sizes } from '../../styles/presets';
import { Button } from '../../styles/elementsPreset';
import GenContent from '../utils/GenContent';
import GenSection from '../utils/GenSection';

/* Component Body */
const About = () => {
  const changeStatus = useSelector(state => state.isChangeDetected);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(selectedMenuCreator(''));
    const disableOpacity = setTimeout(() => dispatch(changeDetectedCreator(false)), 100);
    return () => clearTimeout(disableOpacity);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    dispatch(changeDetectedCreator(true));
    setTimeout(() => history.push('/'), 500);
    dispatch(selectedMenuCreator(''));
  };

  const navToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  return (
    <div
      className="About"
      css={css`
        margin: 30px auto;
        border: none;
        border-radius: 10px;
        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
        ${flex.vertical}
        ${sizes.full}
        width: 80%;
        background-color: white;
        position: relative;
        opacity: ${changeStatus ? '0' : '100%'};
        transition: all 0.3s;

        * {
          opacity: ${changeStatus ? '0' : '100%'};
          transition: all 0.3s;
        }
      `}
    >
      <div
        className="Common"
        css={css`
          padding: 0 50px;
          ${sizes.full}
        `}
      >
        <div
          className="header"
          css={css`
            padding: 20px 0;
            ${flex.horizontal.center}
            position: relative;
          `}
        >
          {/* 홈 버튼 */}
          <button
            onClick={handleClick}
            css={css`
              border: none;
              border-radius: 7px;
              padding: 2px;
              width: 30px;
              height: 30px;
              box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
              position: absolute;
              left: 30px;
              cursor: pointer;

              :hover {
                filter: brightness(90%);
              }

              :active {
                transform: scale(0.95);
              }
            `}
          >
            <MdHome
              css={css`
                ${sizes.full}
              `}
            />
          </button>
          {/* 구획 제목 */}
          <h1
            css={css`
              font-size: 50px;
            `}
          // >{props.heading}</h1>
          >ABOUT</h1>
        </div>
        <hr
          css={css`
            border-color: white;
          `}
        />
        <GenContent object={selfInfo} />
        <GenSection test={introduction} />
        <GenSection test={skills} />
      </div>
      <Button
        onClick={() => navToTop()}
        css={css`
          border-radius: 50%;
          padding: 0;
          width: 30px;
          height: 30px;
          position: fixed;
          top: 92vh;
          right: 2.5vw;
        `}
      >
        <MdKeyboardArrowUp
          css={css`
            width: 100%;
            height: 100%;
          `}
        />
      </Button>
    </div>
  );
};

export default About;