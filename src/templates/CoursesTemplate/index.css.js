import styled from "styled-components"
import { Container } from "../../styles/ContainerStyles.css"

export const HeroVideo = styled.div`
  p {
    padding: 8px 4rem;
    text-align: right;
  }

  @media (max-width: 572px) {
    .playbutton {
      top: 40%;
    }
    p {
      padding: 8px 2rem;
      text-align: center;
    }
  }
`
export const MainContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

export const StickySideBar = styled.div`
  width: 22.5%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100vh; // experiment with this value, try changing to 110vh
  margin-top: ${props =>
    props.screenHeight ? "-" + props.screenHeight + "px" : "-4.5rem"};
  padding-top: ${props =>
    props.screenHeight ? props.screenHeight + "px" : "4.5rem"};
`
export const CourseContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  ul > li {
    list-style-type: square;
  }
`
