import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex, mediaQuery } from '../../../../styles/presets';
import { selectedHeader, imageContainer, iconContainer } from '../../../../modules/customfunctions';
import { A } from '../../../../styles/elementsPreset';
import DividePara from '../../../utils/DividePara';

const BodySection = props => (
  <div
    className={props.className}
    css={css`
      margin: 0 20px;
      max-width: 100%;
      padding: 50px 0;
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
      margin-bottom: 50px;
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
        height: 50px;
        ${flex.horizontal.center}
        justify-content: space-around;
        ${mediaQuery.setMobile} {
          position: relative;
          bottom: 30px;
        }

        a {
          padding: 10px 15px 15px;
          @media (max-width: 600px) {
            padding: 5px 10px 10px;
          }
          min-width: 85px;
          min-height: 35px;
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

export default BodySection;