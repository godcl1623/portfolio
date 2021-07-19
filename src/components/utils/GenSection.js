/* ***** Dependencies ***** */
// libraries
import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// components
import GenArticle from './GenArticle';
// modules
import { flex, mediaQuery } from '../../styles/presets';

/* ***** Component Body ***** */
const GenSection = ({ data, fold }) => {
  // if no data passed...
  if (data === undefined) {
    return <React.Fragment />;
  }

  // if some data passed...
  // Props extracting
  const { header, setState } = data;

  return (
    <section
      css={css`
        margin: ${setState === undefined ? '2%' : '1%'} 0;
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
      <GenArticle data={data} fold={fold}/>
    </section>
  );
};

export default React.memo(GenSection);