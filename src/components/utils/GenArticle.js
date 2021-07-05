import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MdArrowDropDown } from 'react-icons/md';
import { flex, border, sizes } from '../../styles/presets';
import DividePara from './DividePara';

import { selectedMenuCreator } from '../../actions';

const GenArticle = ({ data, fold }) => {
  const { icon, subject, content, setState } = data;
  const [spread, setSpread] = React.useState(false);
  const [test, setTest] = React.useState();
  const testa = React.useRef();
  const selectedMenu = useSelector(state => state.selectedMenu);
  const dispatch = useDispatch();

  if (data === undefined) {
    return <React.Fragment />;
  }

  const changeStyle = selBtn => {
    if (fold) {
      if (!spread) {
        return `
          opacity: 0;
          font-size: 0.1px;
          position: absolute;
        `;
      } 
        return `
          opacity: 100%;
          font-size: 16px;
          position: relative;
        `;
      
    }
  };

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
            css={css`
              ${icon[i] === undefined ? '' : 'margin-left: 10px;'}
            `}
          >{ sub }</h3>
          <button
            key={`button ${i}`}
            className={`button${i}`}
            onClick={e => {
              if (e.target.parentNode.parentNode.childNodes[1].dataset.status === 'false') {
                e.target.parentNode.parentNode.childNodes[1].dataset.status = 'true';
                e.target.parentNode.parentNode.childNodes[1].childNodes.forEach(para => {
                  para.style.opacity = '100%';
                  para.style.fontSize = '16px';
                  para.style.position = 'relative';
                })
              } else if (e.target.parentNode.parentNode.childNodes[1].dataset.status === 'true') {
                e.target.parentNode.parentNode.childNodes[1].dataset.status = 'false';
                e.target.parentNode.parentNode.childNodes[1].childNodes.forEach(para => {
                  para.style.opacity = '0';
                  para.style.fontSize = '0.1px';
                  para.style.position = 'absolute';
                })
              }
              
            }}
            css={css`
              margin-left: 7px;
              border: 1px solid transparent;
              border-radius: 50%;
              padding: 0;
              box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
              display: ${fold ? '' : 'none'};
              ${sizes.free('20px', '20px')};
              cursor: pointer;
              z-index: 2;
            `}
          >
            <MdArrowDropDown
              css={css`
                pointer-events: none;
              `}
            />
          </button>
        </div>
        <div
          className="paragraphs-container"
          data-status={'false'}
          css={css`
            ${border};
            ${sizes.free('100%', '')};
            min-height: 50px;

            p {
              ${changeStyle()}
            }
          `}
        >
          <DividePara paragraphs={content[i]} fold={fold} spread={test} />
        </div>
      </article>
    );
  });
};

export default GenArticle;