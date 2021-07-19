export const flex = {
  vertical: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  horizontal: {
    center: `
      display: flex;
      align-items: center;
      justify-content: center;
    `
  },
};

export const sizes = {
  full: `
    width: 100%;
    height: 100%;
  `,

  free: (width = '', height = '') => `
      width: ${width};
      height: ${height};
    `
};

export const animations = {
  goingUp: `
    @keyframes going-up {
      from {
        top: 6.25rem;
      } to {
        top: 0;
      }
    }
    animation: going-up 1.5s forwards;
  `,

  opaque: `
    @keyframes opaque {
      from {
        opacity: 0;
      } to {
        opacity: 100%;
      }
    }
    animation: opaque 1.5s forwards;
  `
}

const breakpoints = [600, 900, 1200, 1800, 2560];

export const mediaQuery = {
  setMq: breakpoints.map(point => `@media (min-width: ${point}px)`),
  setMobile: `@media (max-width: 599px)`
}

export const border = `border: 1px solid black;`;