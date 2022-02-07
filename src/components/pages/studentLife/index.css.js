import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import img from "../../../images/student-information-imgs/banner1_non_top.jpg"
import { Container } from "../../../styles/ContainerStyles.css"

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

export const ArticleWrapper = styled.div`
  @media (min-width: 250 * 3px) {
    max-width: 250px;
  }

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  align-content: space-between;
  font-family: Futura Heavy;
  border-radius: 10px;
  border: none;
  transition: box-shadow 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    -webkit-box-shadow: 10px 10px 20px rgba(0, 0, 0, 10%),
      -10px 10px 20px rgba(0, 0, 0, 10%);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 10%),
      -10px 10px 20px rgba(0, 0, 0, 10%);
  }

  .gatsby-image-wrapper {
    width: 100%;
    justify-self: center;
  }

  ${props => props.theme.tablet`
    max-width: unset;
  `}
`

export const ArticleImage = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  aspect-ratio: 3/2;
  .gatsby-image-wrapper {
    width: 100%;
    height: auto;
    justify-self: center;
    aspect-ratio: 3/2;
  }
`

export const CardsWrapper = styled.div`
  --repeat: 2;

  @media (max-width: 990px) {
    --repeat: 1;
  }

  display: grid;
  grid-template-columns: repeat(var(--repeat, 2), minmax(calc(250px * 1), 1fr));
  grid-template-rows: auto;
  gap: 6rem;
  width: 100%;
`
export const ArticleInfoWrapper = styled.div`
  padding: 2.5rem;

  @media (max-width: 1280px) {
    padding: 1.25rem;
  }

  @media (max-width: 451px) {
    padding: 0.75rem;
  }
`

export const LinkText = styled.h3`
  color: red;
  text-align: right;
`

export const IntroWrapper = styled.div`
  // text-align: center;
  margin-bottom: 6rem;
`

export const SubHeadingText = styled.h3`
  text-align: center;
  font-size: 2rem;
  color: #707070;
  margin: 1.45rem 0;
`
