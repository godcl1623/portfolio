import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MdArrowDropDown } from 'react-icons/md';
import { flex, sizes } from '../../styles/presets';

const GenArticle = ({ data, fold }) => {
  const { icon, subject, content, setState } = data;

  const handler = event => {
    if (event.target.parentNode.parentNode.childNodes[1].dataset.status === 'false') {
      event.target.parentNode.parentNode.childNodes[1].dataset.status = 'true';
      event.target.parentNode.parentNode.childNodes[1].style.height = 'auto';
      event.target.parentNode.parentNode.childNodes[1].style.padding = '30px 30px 30px';
      event.target.parentNode.childNodes[2].style.transform = 'rotate(180deg)';
    } else if (event.target.parentNode.parentNode.childNodes[1].dataset.status === 'true') {
      event.target.parentNode.parentNode.childNodes[1].dataset.status = 'false';
      event.target.parentNode.parentNode.childNodes[1].style.height = '0';
      event.target.parentNode.parentNode.childNodes[1].style.padding = '0 30px 0';
      event.target.parentNode.childNodes[2].style.transform = 'rotate(360deg)';
    }
  }

  if (data === undefined) {
    return <React.Fragment />;
  }

  return subject.map((sub, i) => {
    // Works 컴포넌트 전용
    if (setState !== undefined) {
      return (
        <article
          key={`article ${i}`}
          css={css`
            ${flex.vertical}
            width: 33%;
          `}
        >
          <img
            key={ `icon ${i}` }
            src={ icon[i] }
            alt="project-preview"
            onClick={setState}
            data-project={`project ${i + 1}`}
            css={css`
              width: 80%;
              max-width: 200px;
              height: 350px;
            `}
          />
          <button
            key={ `button ${i}` }
            onClick={setState}
            data-project={`project ${i + 1}`}
            css={css`
              margin-top: 30px;
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
          ${flex.vertical}
          align-items: flex-start;
          text-align: justify;
        `}
      >
        <div
          key={ `article ${i}` }
          className="article-header"
          css={css`
            ${flex.horizontal.center}
          `}
        >
          {icon[i] !== undefined ? <img key={ `icon ${i}` } src={ icon[i] } alt="icon-html" /> : ''}
          <h3
            key={ `header ${i}` }
            onClick={e => handler(e)}
            css={css`
              ${icon[i] === undefined ? '' : 'margin-left: 10px;'}
              cursor: pointer;
              :active {
                transform: scale(0.9);
              }
            `}
          >{ sub }</h3>
          <button
            key={`button ${i}`}
            onClick={e => handler(e)}
            className={`button${i}`}
            css={css`
              margin-left: 7px;
              border: 1px solid transparent;
              border-radius: 50%;
              padding: 0;
              box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
              display: ${fold ? '' : 'none'};
              ${sizes.free('20px', '20px')};
              cursor: pointer;
              :active {
                transform: scale(0.9);
              }
            `}
          >
            <MdArrowDropDown
              css={css`
                pointer-events: none;
              `}
            />
          </button>
        </div>
        <p
          className="paragraphs-container"
          data-status={'false'}
          css={css`
            ${
              fold
                ?
                  `
                    border-top: 1px solid black;
                    border-bottom: 1px solid black;
                    padding: 0 30px 0;
                    height: 0;
                    background-color: lightgrey;
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
          { content[i] }
        </p>
      </article>
    );
  });
};

export default GenArticle;