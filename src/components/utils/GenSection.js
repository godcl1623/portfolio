/* ***** Dependencies ***** */
// libraries
import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// components
import GenArticle from './GenArticle';
// modules
import { flex, mediaQuery } from '../../styles/presets';

function genArticles(data) {
  return data.subject.map((subject, idx) => (
    <>
      <ul
        css={css`
          margin-top: 50px;
          display: flex;
          align-items: center;

          h3 {
            padding-left: 30px;
          }

          hr {
            width: 100%;
          }
        `}
      >
        <h3>{ subject }</h3>
      </ul>
      <hr />
      { data.content[idx].map(content => (
        <li>
          {content}
        </li>
      ))}
    </>
    ))
}

/* ***** Component Body ***** */
const GenSection = ({ data, sub: Sub }) => {
  // if no data passed...
  let result = '';
  if (data == null) {
    if (Sub == null) {
      result = <React.Fragment />;
    } else {
      result = Sub
    }
    return result;
  }

  // if some data passed...
  // Props extracting
  const { header, setState } = data;

  return (
    <section
      css={css`
        margin: ${setState === undefined ? '2%' : '1%'} 0;
        margin-bottom: 50px;
        ${setState === undefined ? '' : `${flex.horizontal.center}`};
        ${mediaQuery.setMobile} {
          ${setState === undefined ? '' : `${flex.vertical}`};
          -webkit-box-pack: start;
          -ms-flex-pack: start;
          justify-content: flex-start;
        }
        width: 100%;
        height: ${setState === undefined ? '' : '85%'};
        -webkit-transition: all 2.5s;
        -o-transition: all 2.5s;
        transition: all 2.5s;
      `}
    >
      <div
        className="area-header"
        css={css`
          margin: 1.25rem 0;
        `}
      >
        {
          header !== ''
            ? <h2
                css={css`
                  margin-bottom: 0.625rem;
                  padding-left: 2.188rem;
                  ${mediaQuery.setMobile} {
                    margin-bottom: 0.313rem;
                    padding-left: 0.625rem;
                  }
              `}>{ header }</h2>
            : ''
        }
        {
          header !== ''
            ? <hr css={css`
                border-color: var(--point-dark);
              `}/>
            : ''
        }
      </div>
      {/* <GenArticle data={data} fold={fold}/> */}
        <p
          css={css`
            padding: 0 10px;
            white-space: pre-line;
          `}
        >
          {
            header === 'Skills'
              ? genArticles(data)
              : data.content
          }
        </p>
    </section>
  );
};

export default React.memo(GenSection);