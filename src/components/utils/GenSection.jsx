import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
/** @jsxImportSource @emotion/react */

import GenWorksList from 'pages/works/subcomps/GenWorksList';
import GenAboutSkills from 'pages/about/subcomps/GenAboutSkills';

import { isNull, isEqual } from 'utils/capsuledConditions';

import * as genSectionStyles from './style/genSectionStyle';

const GenSection = ({ data, sub: Sub, parentsHeader }) => {
  const { header, setState } = data;
  const resultRef = useRef('');
  const location = useLocation();

  if (isNull(data)) {
    if (isNull(Sub)) resultRef.current = <React.Fragment />;
    else resultRef.current = Sub;
    return resultRef.current;
  }

  return (
    <section css={genSectionStyle(setState, location)}>
      <div className="area-header" css={areaHeaderStyle(header)}>
        {header && <h2 css={h2Style}>{header}</h2>}
        {header && <hr css={hrStyle} />}
      </div>
      {parentsHeader && <GenWorksList data={data} />}
      {!parentsHeader && (
        <article css={textContainerStyle}>
          {isEqual(header, 'Skills') && <GenAboutSkills data={data} />}
          {!isEqual(header, 'Skills') && <p>{data.content}</p>}
        </article>
      )}
    </section>
  );
};

export default React.memo(GenSection);

const { genSectionStyle, areaHeaderStyle, h2Style, hrStyle, textContainerStyle } = genSectionStyles;
