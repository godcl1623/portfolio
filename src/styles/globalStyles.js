/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { sizes, flex, mediaQuery } from 'styles/presets';

const globalStyles = css`
  :root {
    --point-dark: #050e27;
    --point-main: #6f81a5;
    --point-light: #acbdda;
    --white: #f3f3f4;
    --black: #0a0b0d;
    --box-shadow: rgba(5, 14, 39, 0.3);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', 'Gothic A1', sans-serif;
    -ms-overflow-style: none;
    scrollbar-width: none;
    list-style: none;
    z-index: 1;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  html {
    background-color: var(--point-light);
    width: 100%;
    height: 100%;
    position: relative;
  }
  body {
    width: 100%;
    height: 100%;
  }
  .App {
    ${sizes.full}
    ${flex.vertical}
  }
  #root {
    ${sizes.full}
  }
  ${mediaQuery.setMobile} {
    :root {
      --h1: 2.5rem;
      --h2: 1.125rem;
      --h3: 0.875rem;
      --p: 0.813rem;
      --a: 0.813rem;
      --btn: 0.813rem;
      --margin-left: 0.313rem;
      --margin-bottom: 0.188rem;
      --padding: 1.875rem;
      --background-width: 100%;
      --modal-align: space-between;
    }
  }
  ${mediaQuery.setMq[0]} {
    :root {
      --h1: 3.125rem;
      --h2: 1.25rem;
      --h3: 1rem;
      --p: 0.875rem;
      --a: 0.875rem;
      --btn: 0.875rem;
      --margin-left: 0.313rem;
      --margin-bottom: 0.188rem;
      --padding: 2.5rem;
      --background-width: 100%;
      --modal-align: space-between;
    }
  }
  ${mediaQuery.setMq[1]} {
    :root {
      --h1: 4rem;
      --h2: 2rem;
      --h3: 1.625rem;
      --p: 1rem;
      --a: 1rem;
      --btn: 1rem;
      --margin-left: 0.313rem;
      --margin-bottom: 0.188rem;
      --padding: 3.125rem;
      --background-width: 80%;
      --modal-align: space-between;
    }
  }
  ${mediaQuery.setMq[2]} {
    :root {
      --h1: 4rem;
      --h2: 2rem;
      --h3: 1.625rem;
      --p: 1rem;
      --a: 1rem;
      --btn: 1rem;
      --margin-left: 0.438rem;
      --margin-bottom: 0.313rem;
      --padding: 3.125rem;
      --background-width: 80%;
      --modal-align: space-between;
    }
  }
  ${mediaQuery.setMq[3]} {
    :root {
      --h1: 5rem;
      --h2: 2.5rem;
      --h3: 2rem;
      --p: 1.25rem;
      --a: 1.25rem;
      --btn: 1.25rem;
      --margin-left: 0.438rem;
      --margin-bottom: 0.313rem;
      --padding: 3.75rem;
      --background-width: 80%;
      --modal-align: center;
    }
  }
  ${mediaQuery.setMq[4]} {
    :root {
      --h1: 6rem;
      --h2: 3rem;
      --h3: 2.375rem;
      --p: 1.5rem;
      --a: 1.5rem;
      --btn: 1.5rem;
      --margin-left: 0.438rem;
      --margin-bottom: 0.313rem;
      --padding: 3.75rem;
      --background-width: 80%;
      --modal-align: center;
    }
  }
  h1 {
    font-weight: bolder;
    font-size: var(--h1);
    color: var(--point-dark);
  }
  h2 {
    font-weight: bolder;
    font-size: var(--h2);
    color: var(--point-dark);
  }
  h3 {
    font-weight: bolder;
    font-size: var(--h3);
    color: var(--point-dark);
  }
  p,
  button,
  a,
  li {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    font-size: var(--p);
    color: var(--point-dark);
    :disabled {
      color: var(--point-dark);
      border: 0.063rem solid transparent;
      background-color: var(--point-light);
    }
  }
  hr {
    border-color: var(--point-main);
  }
  img {
    width: 3.125rem;
    height: 3.125rem;
  }
`;

export default globalStyles;
