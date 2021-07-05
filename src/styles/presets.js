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
  /* margin: (...objects) => {
    switch (objects.length) {
      case 4:
        return objects.map((args, i) => {
          let value = typeof args !== 'number' ? args : `${args}px`;
          return `${objects[0]}px ${objects[1]}px ${objects[2]}px ${objects[3]}px`;
        });
      default:
        return 'auto';
    }
  }, */
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
        top: 100px;
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

export const border = `border: 1px solid black;`;