import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const FoldedPara = () => {
  console.log('foo');
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
        css={css`
          ${border};
          ${sizes.free('100%', '')};
          min-height: 50px;
        `}
      >
        <DividePara paragraphs={content[i]} />
      </div>
    </article>
  );
}