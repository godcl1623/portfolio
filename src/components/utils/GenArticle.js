/* ***** Dependencies ***** */
// libraries
import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MdArrowDropDown } from 'react-icons/md';
// components
import DividePara from './DividePara';
// modules
import { flex, mediaQuery } from '../../styles/presets';

/* ***** Component-specific Functions ***** */
const handler = event => {
  if (event.target.parentNode.parentNode.childNodes[1].dataset.status === 'false') {
    event.target.parentNode.parentNode.childNodes[1].dataset.status = 'true';
    event.target.parentNode.parentNode.childNodes[1].style.height = 'auto';
    event.target.parentNode.childNodes[2].style.transform = 'rotate(180deg)';
  } else if (event.target.parentNode.parentNode.childNodes[1].dataset.status === 'true') {
    event.target.parentNode.parentNode.childNodes[1].dataset.status = 'false';
    event.target.parentNode.parentNode.childNodes[1].style.height = '0';
    event.target.parentNode.childNodes[2].style.transform = 'rotate(360deg)';
  }
}

/* ***** Component Body ***** */
const GenArticle = ({ data, fold }) => {
  // Props extracting
  const { icon, subject, content, setState } = data;

  // if no data passed...
  if (data === undefined) {
    return <React.Fragment />;
  }
  // if some data passed...
  return subject.map((sub, i) => {
    // Works 컴포넌트 전용
    if (setState !== undefined) {
      return (
        <article
          key={`article ${i}`}
          css={css`
            ${flex.vertical}
            width: 33%;
            height: 100%;
            ${mediaQuery.setMobile} {
              margin: auto 0;
              ${flex.horizontal.center}
              flex-direction: row;
              justify-content: flex-start;
              width: 100%;
              min-height: 50px;
              height: 70px;
              overflow: none;
            }
          `}
        >
          <img
            key={ `icon ${i}` }
            src={ icon[i] }
            alt="project-preview"
            onClick={setState}
            data-project={`Project ${i + 1}`}
            css={css`
              width: 80%;
              height: 70%;
              cursor: pointer;
              ${mediaQuery.setMobile} {
                display: none;
              }
              :active {
                transform: scale(0.99);
              }
            `}
          />
          <button
            key={ `button ${i}` }
            onClick={setState}
            data-project={`Project ${i + 1}`}
            css={css`
              margin-top: 30px;
              background: none;
              border: none;
              padding-bottom: 10px;
              ${mediaQuery.setMobile} {
                width: 100%;
                margin: 0 auto;
                font-size: 40px;
                border: 1px solid transparent;
                border-radius: 7px;
                box-shadow: 0 0 5px 5px var(--box-shadow);
              }
              @media (orientation: landscape) and (max-width: 1023px) {
                margin-top: 10px;
              }
              :active {
                transform: scale(0.99);
              }
            `}
          >{ sub }</button>
        </article>
      );
    }
    // About 전용
    return (
      <article
        key={`article ${i}`}
        css={css`
          margin: 30px auto;
          padding: 0 35px;
          ${mediaQuery.setMobile} {
            margin: 20px auto;
            padding: 0 10px;
          }
          ${flex.vertical}
          align-items: flex-start;
          text-align: justify;
          background: none;
        `}
      >
        <div
          key={ `article ${i}` }
          className="article-header"
          css={css`
            ${flex.horizontal.center}
          `}
        >
          {icon[i] !== undefined ? <img key={ `icon ${i}` } src={ icon[i] } alt="skills-icon" css={css`min-width: 30px; min-height: 30px; width: 2.5vw; height: 2.5vw;`}/> : ''}
          <h3
            key={ `header ${i}` }
            onClick={e => {
              if (fold) {
                handler(e);
              }
            }}
            css={css`
              ${icon[i] === undefined ? '' : 'margin-left: 10px;'}
              ${fold ? `cursor: pointer` : ''};
              ${
                fold
                  ?
                    `:active {
                      transform: scale(0.9);
                    }`
                  :
                    ''
              }
            `}
          >{ sub }</h3>
          <button
            key={`button ${i}`}
            onClick={e => handler(e)}
            className={`button${i}`}
            css={css`
              margin-left: var(--margin-left);
              margin-bottom: var(--margin-bottom);
              border: 1px solid transparent;
              border-radius: 50%;
              padding: 0;
              box-shadow: 0 0 3px 3px var(--box-shadow);
              display: ${fold ? 'flex' : 'none'};
              min-width: calc(var(--h3)*0.7);
              min-height: calc(var(--h3)*0.7);
              width: var(--btnWithSvg);
              height: var(--btnWithSvg);
              background: var(--point-light);
              cursor: pointer;
              :active {
                transform: scale(0.9);
              }
            `}
          >
            <MdArrowDropDown
              css={css`
                width: 100%;
                height: 100%;
                pointer-events: none;
                color: var(--point-dark);
              `}
            />
          </button>
        </div>
        <div
          className="paragraphs-container"
          data-status={'false'}
          css={css`
            ${
              fold
                ?
                  `
                    border-top: 1px solid var(--point-main);
                    border-bottom: 1px solid black;
                    padding: 0 30px 0;
                    height: 0;
                    background-color: var(--point-light);

                    p:last-child {
                      margin-bottom: 10px;
                    }
                  `
                :
                  `
                    border: none;
                  `
            }
            overflow: hidden;
            transition: all 0.3s;
          `}
        >
          <DividePara paragraphs={content[i]} />
        </div>
      </article>
    );
  });
};

export default GenArticle;