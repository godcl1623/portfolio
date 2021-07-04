import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex } from '../../styles/presets';
import DividePara from './DividePara';

const GenArticle = ({ test }) => {
  if (test === undefined) {
    return <React.Fragment />;
  }

  const { icon, subject, content, setState } = test;

  return subject.map((sub, i) => {
    // Works 컴포넌트 전용
    if (setState !== undefined) {
      return (
        <article
          key={`article ${i}`}
          css={css`
            // margin: 0 5%;
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
        </div>
        <div className="paragraphs-container">
          <DividePara paragraphs={content[i]} />
        </div>
      </article>
    );
  });
};

export default GenArticle;