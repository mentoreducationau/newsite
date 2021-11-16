import styled from "styled-components"

const SectionWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : ""};
  margin-top: ${props => (props.marginTop ? props.marginTop : "")};
`

const SplitContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;

  ${props => props.theme.tablet`
    grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
    column-gap: 30px
  `}

  ${props => props.theme.desktop`
    grid-template-columns: 60% 40%;
    column-gap: 35px
  `}

  ${props => props.theme.largeScreen`
    grid-template-columns: repeat(2, 1fr);
  `}
`

const Container = styled.div`
  /* border: 2px solid tomato; */
  margin: 2rem auto;
  padding: 0 2rem;

  ${props => props.theme.largeScreen`
    padding: 0 4rem;
  `}

  width: 100%;
  max-width: 100%;

  @media (min-width: 576px) {
    max-width: ${props => {
      switch (props.size) {
        case "sm":
          return "540px"
        case "md":
          return "100%"
        case "lg":
          return "100%"
        case "xl":
          return "100%"
        case "xxl":
          return "100%"
        case "fluid":
          return "100%"
        default:
          return "540px"
      }
    }};
  }

  @media (min-width: 768px) {
    max-width: ${props => {
      switch (props.size) {
        case "sm":
          return "720px"
        case "md":
          return "720px"
        case "lg":
          return "100%"
        case "xl":
          return "100%"
        case "xxl":
          return "100%"
        case "fluid":
          return "100%"
        default:
          return "720px"
      }
    }};
  }

  @media (min-width: 992px) {
    max-width: ${props => {
      switch (props.size) {
        case "sm":
          return "960px"
        case "md":
          return "960px"
        case "lg":
          return "960px"
        case "xl":
          return "100%"
        case "xxl":
          return "100%"
        case "fluid":
          return "100%"
        default:
          return "960px"
      }
    }};
  }

  @media (min-width: 1200px) {
    max-width: ${props => {
      switch (props.size) {
        case "sm":
          return "1140px"
        case "md":
          return "1140px"
        case "lg":
          return "1140px"
        case "xl":
          return "1140px"
        case "xxl":
          return "100%"
        case "fluid":
          return "100%"
        default:
          return "1140px"
      }
    }};
  }

  @media (min-width: 1400px) {
    max-width: ${props => {
      switch (props.size) {
        case "sm":
          return "1320px"
        case "md":
          return "1320px"
        case "lg":
          return "1320px"
        case "xl":
          return "1320px"
        case "xxl":
          return "1320px"
        case "fluid":
          return "100%"
        default:
          return "90vw"
      }
    }};
  }
`

export { Container, SectionWrapper, SplitContainer }
