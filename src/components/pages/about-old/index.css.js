import styled from "styled-components"
import img from "../../../images/student-information-imgs/banner1_non_top.jpg"
import { Container } from "../../../styles/ContainerStyles.css"
import { Paragraph, Headline } from "../../../styles/Typography.css"
import quote from "../../../images/quote.png"

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
  margin-top: 3rem;
  margin-bottom: 6rem;
  a:hover {
    text-decoration: underline;
  }
  ol {
    list-style-type: initial !important;
    margin-left: 3.5rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const IframeContainer = styled(Container)`
  text-align: center;
  iframe {
    width: 640px;
    height: 360px;
    margin: 3rem auto 1rem;
  }
`

export const BottomBannerContainer = styled.div`
  width: 100% !important;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 50px 0;
  margin: 0;
  a {
    width: 20%;
    align-self: center;
    background-color: #d32f2f;
  }

  @media (max-width: 1280px) {
    a {
      width: 40%;
    }
  }
  @media (max-width: 450px) {
    a {
      width: 80%;
    }
  }
`
export const BottomBannerText = styled(Paragraph)`
  font-size: 22px;
  color: white;
`
export const TestimonialParagraph = styled(Paragraph)`
  background: url(${quote}) no-repeat;
  font-style: italic;
`
export const TestimonialHeadline = styled(Headline)`
  font-size: 34px;
  font-family: "Futura Medium"; 
  text-align: center;
`

export const PathwayContainer = styled(Container)`
  padding: 2rem 0;
  border-bottom: 1px solid #707070;
`
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${props=>props.first === "true" ? "center" : "initial"};
  gap: 1rem;
  margin: ${props=>props.first === "true" ? "2rem 0" : "0"};
  @media(max-width: 450px){
    flex-direction: column;
  }
`
export const OneImgWrapper = styled.div`
  width: ${props=>props.first === "true" ? "20%" : "25%"};
  @media(max-width: 768px){
    width: ${props=>props.first === "true" ? "40%" : "40%"};
  }
  @media(max-width: 450px){
    width: ${props=>props.first === "true" ? "60%" : "80%"};
    order: ${props=>props.first === null && "0"};
    margin: 0 auto;
  }
`
export const TextWrapper = styled.div`
  width: 75%;
  @media(max-width: 768px){
    width: 60%;
  }
  @media(max-width: 450px){
    width: 80%;
    order: 1;
  }
`
export const WebinarSeriesContainer = styled(Container)`
  margin-top: 3rem;
  margin-bottom: 6rem;
  width: 60%;
  a:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`