/* ***** Dependencies ***** */
// libraries
import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// components
import DividePara from '../../../utils/DividePara';
// modules
import { selectedHeader, imageContainer, iconContainer } from '../../../../modules/customfunctions';
import { A } from '../../../../styles/elementsPreset';
import { flex, mediaQuery } from '../../../../styles/presets';

/* ***** Component Body ***** */
const BodySection = props => (
  <div
    className={props.className}
    css={css`
      margin: 0 1.25rem;
      max-width: 100%;
      padding: 3.125rem 0;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      @media (min-height: 1440px) and (max-width: 2559px) {
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
      }
    `}
  >
    { selectedHeader(props.header) }
    { imageContainer(props.images) }
    { iconContainer(props.icons.length) }
    <div css={css`
      margin-bottom: 3.125rem;
      width: 80%;
      p {
        font-size: calc(var(--p) * 1.15);
      }
    `}>
      <DividePara paragraphs={props.comments} projects={true} />
    </div>
    <div
      className="link-container"
      css={css`
        width: 70%;
        height: 3.125rem;
        ${flex.horizontal.center}
        -ms-flex-pack: distribute;
        justify-content: space-around;
        ${mediaQuery.setMobile} {
          position: relative;
          bottom: 1.875rem;
        }

        a {
          padding: 0.625rem 0.938rem 0.938rem;
          @media (max-width: 600px) {
            padding: 0.313rem 0.625rem 0.625rem;
          }
          min-width: 5.313rem;
          min-height: 2.188rem;
          text-align: center;
          font-size: calc(var(--p) * 1.2);
        }
      `}
    >
      <A href="https://github.com/godcl1623" target="_blank" rel="noreferrer noopener">GITHUB</A>
      <A href="https://godcl1623.tistory.com/" target="_blank" rel="noreferrer noopener">BLOG</A>
    </div>
  </div>
);

export default React.memo(BodySection);