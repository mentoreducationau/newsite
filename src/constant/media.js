import { css } from "styled-components"

const screenSizes = {
  largeScreen: 1800,
  widescreen: 1400,
  desktop: 1024,
  tablet: 768,
  mobile: 0,
}

const media = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${screenSizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})

export default media