import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    display: none;
    opacity: 0;
  }

  to {
    display: inline;
    opacity: 1;
  }
`

export const TestimonialSlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  animation: ${rotate} 0.2s linear;
  opacity: ${props => (props.activeTab ? 1 : 0)};
  display: ${props => (props.activeTab ? "inline" : "none ")};
  transition: opacity 0.3s ease-out;
`

export const TestimonialSlideContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  justify-content: space-between;
  align-items: center;
  justify-content: center;

  ${props => props.theme.tablet`
    grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
  `}

  ${props => props.theme.widescreen`
    grid-template-columns: 33% 67%;
  `}

  ${props => props.theme.largeScreen`
    grid-template-columns: 36% 64%;
  `}
`

const SliderArrow = styled.div`
  width: 0;
  height: 0;
  display: inline-block;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;

  ${props => props.theme.tablet`
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
  `}

  ${props => props.theme.largeScreen`
    border-top: 21px solid transparent;
    border-bottom: 21px solid transparent;
  `}
`
export const SliderArrowLeft = styled(SliderArrow)`
  border-right: 16px solid #ff0000;

  ${props => props.theme.tablet`
    border-right: 30px solid #ff0000;
  `}

  ${props => props.theme.largeScreen`
    border-right: 42px solid #ff0000;
  `}
`

export const SliderArrowRight = styled(SliderArrow)`
  border-left: 16px solid #ff0000;
  margin-left: 5px;

  ${props => props.theme.tablet`
    border-left: 30px solid #ff0000;
    margin-left: 10px;
  `}

  ${props => props.theme.largeScreen`
    border-left: 42px solid #ff0000;
    margin-left: 20px;
  `}
`

export const TestimonialSlideInfo = styled.div`
  margin: auto;
  text-align: center;
  width: 100%;

  p {
    margin: 2rem;
  }

  svg:not(:root) {
    width: 7%;
    max-width: fit-content;
  }

  ${props => props.theme.tablet`
    text-align: left;
    margin: 30px;

    p {
      margin: 2rem 0;
    }
  `}

  ${props => props.theme.widescreen`
    width: 80%;
    margin: auto;
  `}

  ${props => props.theme.largeScreen`
    width: 75%;
  `}
`

export const TestimonialSlideImage = styled.div`
  width: 100%;
  height: 100%;
  
  ${props => props.theme.tablet`
    border: 1px solid #707070;
  `}

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
  }
`
