import React from 'react';
import { useLocation } from 'react-router-dom';
/** @jsxImportSource @emotion/react */

import GenWorksList from '../works/subcomps/GenWorksList';
import GenAboutSkills from '../about/subcomps/GenAboutSkills';

import { isNull } from '../../common/capsuledConditions';

import * as genSectionStyles from './style/genSectionStyle';

const GenSection = ({ data, sub: Sub, parentsHeader }) => {
  const location = useLocation();

  let result = '';

  if (isNull(data)) {
    if (isNull(Sub)) {
      result = <React.Fragment />;
    } else {
      result = Sub;
    }
    return result;
  }

  const { header, setState } = data;

  return (
    <section css={genSectionStyle(setState, location)}>
      <div className="area-header" css={areaHeaderStyle(header)}>
        {header !== '' ? <h2 css={h2Style}>{header}</h2> : ''}
        {header !== '' ? <hr css={hrStyle} /> : ''}
      </div>
      {parentsHeader != null ? (
        <GenWorksList data={data} />
      ) : (
        <article css={textContainerStyle}>
          {header === 'Skills' ? (
            <GenAboutSkills data={data} />
          ) : (
            <p key={`introduction_p`}>{data.content}</p>
          )}
        </article>
      )}
    </section>
  );
};

export default React.memo(GenSection);

const { genSectionStyle, areaHeaderStyle, h2Style, hrStyle, textContainerStyle } = genSectionStyles;
