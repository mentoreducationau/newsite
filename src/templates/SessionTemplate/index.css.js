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
export const CourseGuideContainer = styled.div`
  width: 100%;
  margin-bottom: 8px;

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

export const PriceButton = styled.button`
  margin-top: 0.5rem;
  font-family: Futura Heavy;
  font-size: 28px;
  line-height: 37px;
  background: #DF2F16;
  color: white;
  border: 0;
  border-radius: 5px;
  width: 100%;
  height: 52px;
  text-transform: uppercase;
  cursor: pointer;

  // ${props => props.theme.desktop`
  //   font-size: 0.9rem;
  //   line-height: 23px;
  //   height:45px ;
  // `}

  // ${props => props.theme.largeScreen`
  //   font-size: 1.5rem;
  //   line-height: 38px;
  //   height:50px;
  // `}
`