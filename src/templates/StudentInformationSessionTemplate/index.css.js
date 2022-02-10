import styled from "styled-components"
import { Link } from "gatsby"
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
export const CourseDataContainer = styled.div`
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

export const WatchNowSection = styled.div`
    text-align: center;
`
export const WatchNowTitle = styled.p`
    font-size: 62px;
    line-height: 62px;
    text-decoration: underline;
    text-decoration-thickness: 3px;
`
export const IframeWrapper = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    margin-top: 23px auto;
`

//Modal

export const DescText = styled.p`
  font-size: 22px;
  line-height: 24px;
  margin-bottom: 14px;
  width: 72%;
`

export const ThankyouWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`
export const ThankyouContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ThankyouTitleText = styled.p`
  font-size: 48px;
  line-height: 24px;
  margin-bottom: 24px;
`
export const ViewLink = styled(Link)`
  font-size: 22px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 1px;
  margin-bottom: 9px;

  :hover {
    cursor: pointer;
  }
`
export const CancelWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 25px 24px 0;
`
export const IconWrapper = styled.div`
  :hover {
    cursor: pointer;
  }
`

export const CancelText = styled.p`
  font-size: 22px;
  line-height: 24px;
  font-weight: 800;
  margin-bottom: 0;

  :hover {
    cursor: pointer;
  }
`