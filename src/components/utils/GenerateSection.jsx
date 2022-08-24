import React from 'react';
import { useLocation } from 'react-router-dom';
/** @jsxImportSource @emotion/react */

import GenerateWorksList from 'pages/works/subcomps/GenerateWorksList';
import GenerateAboutSkills from 'pages/about/subcomps/GenerateAboutSkills';

import { isNull, isEqual } from 'utils/capsuledConditions';

import * as generateSectionStyles from './style/generateSectionStyle';

const GenerateSection = ({ data, sub: Sub, parentsHeader }) => {
  const { header, setState } = data || {};
  const resultRef = React.useRef('');
  const location = useLocation();

  if (isNull(data)) {
    if (isNull(Sub)) resultRef.current = <React.Fragment />;
    else resultRef.current = Sub;
    return resultRef.current;
  }

  return (
    <section css={generateSectionStyle(setState, location)}>
      <div className="area-header" css={areaHeaderStyle(header)}>
        {header && <h2 css={h2Style}>{header}</h2>}
        {header && <hr css={hrStyle} />}
      </div>
      {parentsHeader && <GenerateWorksList data={data} />}
      {!parentsHeader && (
        <article css={textContainerStyle}>
          {isEqual(header, 'Skills') && <GenerateAboutSkills data={data} />}
          {!isEqual(header, 'Skills') && <p>{data.content}</p>}
        </article>
      )}
    </section>
  );
};

export default React.memo(GenerateSection);

const { generateSectionStyle, areaHeaderStyle, h2Style, hrStyle, textContainerStyle } = generateSectionStyles;
