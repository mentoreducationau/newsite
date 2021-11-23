import styled from "styled-components"
import img from "../../images/student-information-imgs/banner1_non_top.jpg"
import { Container } from "../../styles/ContainerStyles.css"

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
export const CourseHeading = styled.div`
  padding: 2rem;
  @media (min-width: 768px) {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`
export const MainContainer = styled(Container)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const StudentInfoContainer = styled.div`
  margin: 8rem auto 10rem;

  ${props => props.theme.desktop`
    padding: 0 35px 0 0;
  `}

  ${props => props.theme.largeScreen`
    padding: 40px;
  `}
`
export const NameAndDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 4rem;
  margin-top: 50px;
`

export const NameAndDate = styled.h3`
  font-family: Futura Heavy;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 13px;
  color: #707070;

  ${props => props.theme.desktop`
    font-size: 30px;
    line-height: 45px;
  `}

  ${props => props.theme.largeScreen`
    font-size: 40px;
    line-height: 51px;
  `}
`

export const StudentLifeTitle = styled.h2`
  font-family: Futura Heavy;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0px;
  margin: 30px auto;
  color: #707070;

  ${props => props.theme.desktop`
    text-align: ${props.course ? "left" : "center"};
    font-size: ${props.course ? "36px" : "50px"};
    line-height: ${props.course ? "40px" : "60px"};
  `}

  ${props => props.theme.largeScreen`
    text-align: ${props.course ? "left" : "center"};
    font-size: ${props.course ? "36px" : "65px"};
    line-height: ${props.course ? "40px" : "84px"};
  `}
`

export const StudentLifeSubtitle = styled.h4`
  font-family: Futura Heavy;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 20px;
  margin-top: 45px;
  color: #707070;

  ${props => props.theme.desktop`
    font-size: 36px;
    line-height: 45px;
  `}

  ${props => props.theme.largeScreen`
    font-size: 40px;
    line-height: 51px;
  `}
`
