/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { headerContainerStyle, h1InContainer, h2InContainer } from '../style/mainStyle';

export default function HeaderLogo() {
  return (
    <div className="header-container" css={headerContainerStyle}>
      <h1 css={h1InContainer}>LCH</h1>
      <h2 css={h2InContainer}>FRONTEND</h2>
      <h2 css={h2InContainer}>PORTFOLIO</h2>
    </div>
  );
}