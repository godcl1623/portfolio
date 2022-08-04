import React from 'react';
/** @jsxImportSource @emotion/react */

import * as genWorksListStyles from '../style/genWorksListStyle';

const GenWorksList = ({ data }) => {
  const { icon, subject, setState } = data;

  if (data === undefined) {
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
        css={previewImgStyle}
      />
      <button
        key={`button ${index}`}
        onClick={setState}
        data-project={subject[index]}
        css={headerBtnStyle}
      >
        {sub}
      </button>
    </article>
  ));
};

export default React.memo(GenWorksList);

const { articleStyle, previewImgStyle, headerBtnStyle } = genWorksListStyles;
