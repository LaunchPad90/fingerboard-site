import { css } from "styled-components";

const sizes = {
  xl: 2560,
  l: 1024,
  m: 768,
  s: 324
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
