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
  width: 60%;
  a:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
