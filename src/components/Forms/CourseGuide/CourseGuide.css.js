import styled from "styled-components"

export const CourseGuideContainer = styled.div`
  width: 100%;

  h3 {
    margin: 30px;
    text-align: center;
    text-transform: uppercase;
  }

  ${props => props.theme.desktop`
    width: ${props.course ? "100%" : "25vw"};
    h3 {
      margin: ${props.course ? "10px" : "30px"};
      text-align: center;
      text-transform: uppercase;
    }
  `}
`

export const ImageContainer = styled.div`
  margin: 10px auto;
  width: fit-content;
`
