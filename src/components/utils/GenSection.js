import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex, mediaQuery } from '../../styles/presets';
import GenArticle from './GenArticle';

const GenSection = ({ data, fold }) => {
  if (data === undefined) {
    return <React.Fragment />;
  }

  const { header, setState } = data;

  return (
    <section
      css={css`
        margin: ${setState === undefined ? '2%' : '1%'} 0;
        ${setState === undefined ? '' : `${flex.horizontal.center}`};
        width: 100%;
        height: ${setState === undefined ? '' : '85%'};
        transition: all 2.5s;
      `}
    >
      <div
        className="area-header"
        css={css`
          margin: 20px 0;
        `}
      >
        {
          header !== ''
            ? <h2
                css={css`
                  margin-bottom: 10px;
                  padding-left: 35px;
                  ${mediaQuery.setMobile} {
                    margin-bottom: 5px;
                    padding-left: 10px;
                  }
              `}>{ header }</h2>
            : ''
        }
        {
          header !== ''
            ? <hr css={css`
                border-color: white;
              `}/>
            : ''
        }
      </div>
      <GenArticle data={data} fold={fold}/>
    </section>
  );
};

export default GenSection;