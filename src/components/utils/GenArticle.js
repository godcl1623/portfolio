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
              -webkit-box-orient: horizontal;
              -webkit-box-direction: normal;
              -ms-flex-direction: row;
              flex-direction: row;
              -webkit-box-pack: start;
              -ms-flex-pack: start;
              justify-content: flex-start;
              width: 100%;
              min-height: 3.125rem;
              height: 4.375rem;
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
                -webkit-transform: scale(0.99);
                -ms-transform: scale(0.99);
                transform: scale(0.99);
              }
            `}
          />
          <button
            key={ `button ${i}` }
            onClick={setState}
            data-project={`Project ${i + 1}`}
            css={css`
              margin-top: 1.875rem;
              background: none;
              border: none;
              padding-bottom: 0.625rem;
              ${mediaQuery.setMobile} {
                width: 100%;
                margin: 0 auto;
                font-size: 2.5rem;
                border: 0.063rem solid transparent;
                border-radius: 0.438rem;
                -webkit-box-shadow: 0 0 0.313rem 0.313rem var(--box-shadow);
                box-shadow: 0 0 0.313rem 0.313rem var(--box-shadow);
              }
              @media (orientation: landscape) and (max-width: 1023px) {
                margin-top: 0.625rem;
              }
              :active {
                -webkit-transform: scale(0.99);
                -ms-transform: scale(0.99);
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
          margin: 1.875rem auto;
          padding: 0 2.188rem;
          ${mediaQuery.setMobile} {
            margin: 1.25rem auto;
            padding: 0 0.625rem;
          }
          ${flex.vertical}
          -webkit-box-align: start;
          -ms-flex-align: start;
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
          {icon[i] !== undefined ? <img key={ `icon ${i}` } src={ icon[i] } alt="skills-icon" css={css`min-width: 1.875rem; min-height: 1.875rem; width: 2.5vw; height: 2.5vw;`}/> : ''}
          <h3
            key={ `header ${i}` }
            onClick={e => {
              if (fold) {
                handler(e);
              }
            }}
            css={css`
              ${icon[i] === undefined ? '' : 'margin-left: 0.625rem;'}
              ${fold ? `cursor: pointer` : ''};
              ${
                fold
                  ?
                    `:active {
                      -webkit-transform: scale(0.9);
                      -ms-transform: scale(0.9);
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
              border: 0.063rem solid transparent;
              border-radius: 50%;
              padding: 0;
              -webkit-box-shadow: 0 0 0.188rem 0.188rem var(--box-shadow);
                      box-shadow: 0 0 0.188rem 0.188rem var(--box-shadow);
              ${
                fold
                  ? `
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                  `
                  : 'display: none;'
              }
              width: var(--h3);
              height: var(--h3);
              background: var(--point-light);
              cursor: pointer;
              :active {
                -webkit-transform: scale(0.9);
                    -ms-transform: scale(0.9);
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
                    border-top: 0.063rem solid var(--point-main);
                    border-bottom: 0.063rem solid black;
                    padding: 0 1.875rem 0;
                    height: 0;
                    background-color: var(--point-light);

                    p:last-child {
                      margin-bottom: 0.625rem;
                    }
                  `
                :
                  `
                    border: none;
                  `
            }
            overflow: hidden;
            -webkit-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
          `}
        >
          <DividePara paragraphs={content[i]} />
        </div>
      </article>
    );
  });
};

export default React.memo(GenArticle);