import React from 'react';
/** @jsxImportSource @emotion/react */

import { isNull } from 'utils/capsuledConditions';

import * as genWorksListStyles from '../style/generateWorksListStyle';

const GenerateWorksList = ({ data }) => {
  const { icon, subject, setState } = data;

  if (isNull(data)) {
    return <React.Fragment />;
  }

  return subject.map((sub, index) => (
    <article key={`article ${index}`} css={articleStyle}>
      <img
        key={`icon ${index}`}
        src={icon[index]}
        alt="project-preview"
        onClick={setState}
        data-project={subject[index]}
        css={previewImageStyle}
      />
      <button
        key={`button ${index}`}
        onClick={setState}
        data-project={subject[index]}
        css={headerButtonStyle}
      >
        {sub}
      </button>
    </article>
  ));
};

export default React.memo(GenerateWorksList);

const { articleStyle, previewImageStyle, headerButtonStyle } = genWorksListStyles;
