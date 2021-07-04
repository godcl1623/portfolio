import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex } from '../../styles/presets';
import GenArticle from './GenArticle';

const GenSection = ({ data }) => {
  if (data === undefined) {
    return <React.Fragment />;
  }

  const { header, setState } = data;

  return (
    <section
      css={css`
        margin: ${setState === undefined ? '60px' : '80px'} 0;
        ${setState === undefined ? '' : `${flex.horizontal.center}`}
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
      <GenArticle data={data} />
    </section>
  );
};

export default GenSection;