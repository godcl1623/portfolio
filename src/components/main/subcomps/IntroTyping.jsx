import { forwardRef } from 'react';
/** @jsxImportSource @emotion/react */

import { belowContainer, introStyle, typingCursorStyle } from '../style/mainStyle';

const IntroTyping = forwardRef((props, ref) => (
  <section css={belowContainer}>
    <p className="intro" ref={ref} css={introStyle}></p>
    <span className="typing_cursor" css={typingCursorStyle}></span>
  </section>
));

export default IntroTyping;