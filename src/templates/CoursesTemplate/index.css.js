import styled from "styled-components"
import { Container } from "../../styles/ContainerStyles.css"

export const HeroVideo = styled.div`
  position: relative;
  .playbutton {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
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
`
export const CourseContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`
