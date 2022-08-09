/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex, mediaQuery } from 'styles/presets';

export const bodySectionContainerStyle = css`
  margin: 0 1.25rem;
  max-width: 100%;
  padding: 3.125rem 0;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow-y: scroll;
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
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
`;

export const contentBoxStyle = css`
  margin-bottom: 3.125rem;
  width: 80%;

  h1 {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: calc(var(--h1) / 2);
    font-weight: bold;
  }

  h2 {
    margin-top: 25px;
    margin-bottom: 10px;
    font-size: calc(var(--h2) / 1.5);
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: calc(var(--h3) / 1.25);
  }

  ol,
  ul {
    margin-left: 30px;
  }

  li {
    margin-top: 8px;
    line-height: 1.75;
  }

  ul > li {
    list-style: disc;
  }

  ol > li {
    list-style: decimal;
  }

  p {
    font-size: calc(var(--p) * 1.15);
  }

  @media (max-width: 900px) {
    h2 {
      font-size: var(--h2);
    }

    h3 {
      font-size: calc(var(--h3) * 1.15);
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: calc(var(--h1) * 0.55);
    }
  }
`;

export const linkBoxStyle = css`
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
`;

export const exampleImageStyle = imageArray => css`
  width: ${100 / imageArray.length}%;
  height: 100%;
`;
