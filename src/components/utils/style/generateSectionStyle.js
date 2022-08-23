/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { isEqual, isNull } from 'utils/capsuledConditions';

import { flex, mediaQuery } from 'styles/presets';

export const generateSectionStyle = (setState, location) => css`
  padding: ${isNull(setState) ? '2%' : '1%'} 0;
  padding: 30px 0;
  display: ${isEqual(location.pathname, '/about') ? 'flex' : 'grid'};
  ${
    !isEqual(location.pathname, '/about')
      ?
        `
          grid-template: "a a"
                          "a a";
          grid-gap: 20px 20px;
          justify-items: center;
        `
      :
        `
          flex-direction: column;
        `
  }

  ${mediaQuery.setMobile} {
    ${isNull(setState) ? '' : `${flex.vertical}`};
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  width: 100%;
  height: ${isNull(setState) ? '' : '85%'};
  -webkit-transition: all 2.5s;
  -o-transition: all 2.5s;
  transition: all 2.5s;
  overflow-y: auto;
`;

export const areaHeaderStyle = header => css`
  margin: 1.25rem 0;
  ${isEqual(header, '') ? `display: none;` : ''}
`;

export const h2Style = css`
  margin-bottom: 0.625rem;
  padding-left: 2.188rem;
  ${mediaQuery.setMobile} {
    margin-bottom: 0.313rem;
    padding-left: 0.625rem;
  }
`;

export const hrStyle = css`
  border-color: var(--point-dark);
`;

export const textContainerStyle = css`
  padding: 0 10px;
  white-space: pre-line;

  ul {
    padding-top: 10px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: var(--p);
  }

  .li_cnt {
    margin-top: 10px;
    display: flex;
    align-items: center;

    span.bullet {
      margin-right: 5px;
      font-size: 10px;
    }

    span.title {
      font-weight: bold;
    }
  }

  h3 {
    margin-top: 30px;
    padding-left: 20px;
  }

  hr {
    width: 100%;
  }
`;