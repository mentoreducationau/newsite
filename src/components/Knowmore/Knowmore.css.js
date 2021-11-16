import styled from "styled-components"
import { Container } from "../../styles/ContainerStyles.css"
import { SpanHeavy } from "../../styles/Typography.css"

export const MentorEducationContainer = styled.div`
  display: flex;
  align-items: center;
`
export const KnowmoreContainer = styled(Container)`
  max-width: 84vw;

  h2 {
    margin: 0 auto;
    text-align: center;

    ${props => props.theme.tablet`
      max-width: 70%;
    `}
  }
`
export const KnowmoreBoxes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  ${props => props.theme.tablet`
      flex-direction: row;
  `}

  ${props => props.theme.desktop`
    flex-direction: ${props.course ? "column" : "row"};
    width: ${props.course ? "600px" : "100%"};
  `}
`

export const KnowmoreBox = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem 0 0;

  div:first-child {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  div:last-child {
    margin: auto;
  }

  @media (min-width: 768px) {
    width: 50%;

    div:last-child {
      max-width: 75%;
      margin: auto;
    }
  }
`

export const KnowmoreCourseBox = styled.div`
  margin: 2rem 0 0;

  div:first-child {
    display: flex;
  }

  div:last-child {
    margin: auto;
  }

`

export const Percentage = styled(SpanHeavy)`
  font-size: 55px;
  line-height: 71px;
  opacity: 1;
  margin-top: 16%;
  /* vertical-align: super; */

  ${props => props.theme.tablet`
    margin-top: 8%;
  `}

  ${props => props.theme.desktop`
    margin-top: ${props.course ? "0" : "8%"};
    font-size: ${props.course ? "49px" : "94px"};
    line-height:  ${props.course ? "64px" : "112px"};
  `}
`
