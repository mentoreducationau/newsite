import styled from "styled-components"
import { Container } from "../../styles/ContainerStyles.css"
import img from "../../images/course-banner.jpg"

export const TitleBanner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${img}) no-repeat;
  background-size: cover;
  background-position: 50% 45%;
  width: 100%;
  h1 {
    color: #fff;
  }
`
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const StickySideBar = styled.div`
  width: 28%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100vh; // experiment with this value, try changing to 110vh
`
export const SideBar = styled.div`
  width: 28%;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const CourseContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Terms = styled(Container)`
  margin-top: 4rem;
 
`
