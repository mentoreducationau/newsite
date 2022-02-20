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
  margin-top: ${props => (props.marginTop ? props.marginTop : "3rem")};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "6rem")};
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

export const PathwayContainer = styled.div`
  border-bottom: 1px solid #707070;
  padding: 0;
`
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${props => (props.first === "true" ? "center" : "initial")};
  gap: 1rem;
  margin: ${props => (props.first === "true" ? "2rem 0" : "0")};
  @media (max-width: 450px) {
    flex-direction: column;
  }
`
export const OneImgWrapper = styled.div`
  width: ${props => (props.first === "true" ? "20%" : "25%")};
  @media (max-width: 768px) {
    width: ${props => (props.first === "true" ? "40%" : "40%")};
  }
  @media (max-width: 450px) {
    width: ${props => (props.first === "true" ? "60%" : "80%")};
    order: ${props => props.first === null && "0"};
    margin: 0 auto;
  }
`
export const TextWrapper = styled.div`
  width: 75%;
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 450px) {
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

//////////////

export const AboutUsContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "0")};

  @media (min-width: 601px) {
    width: 70%;
  }
  @media (min-width: 993px) {
    width: 70%;
  }
`

export const HeadingText = styled.p`
  font-size: 64px;
  line-height: 84px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 33px;

  @media (max-width: 835px) {
    font-size: 42px;
    line-height: 56px;
    margin-bottom: 43px;
  }

  @media (max-width: 1280px) {
    font-size: 53px;
    line-height: 70px;
  }
`
export const IntroText = styled.p`
  font-size: 18px;
  line-height: 26.1px;
  font-weight: 400;
  margin-bottom: 0;

  @media (max-width: 835px) {
    font-weight: 500;
  }
`
export const PrinciplesWrapper = styled.div`
  margin: 0 auto 20px;
  text-align: center;
`
export const PrincipleCardWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  left: auto;
  right: auto;
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;

  @media (min-width: 601px) {
    width: 50%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
`
export const CardPanel = styled.div`
  background: darkgrey;
  padding: 2.5rem 0px 2rem;
  transition: box-shadow 0.25s;
  margin: 0.5rem 0 1rem 0;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
`
export const PrincipleTitle = styled.h2`
  padding: 10px;
  font-size: 2rem;
  color: #fff !important;
`
export const PrincipleContent = styled.div`
  color: white;
  font-size: 1.2rem;
`
export const SomeInfoWrapper = styled.div`
  margin-bottom: 20px;
  padding: 1rem 0 0;
`
export const SomeInfoContent = styled.div`
  padding: 0 0.75rem;
`
export const ProfileContentWrapper = styled.div`
  padding: 1rem 0;
`
export const LeftOffsetContent = styled(ProfileContentWrapper)`
  width: 100%;
  @media (min-width: 601px) {
    margin-left: 50%;
    width: 50%;
  }
`
export const AboutCardWrapper = styled.div`
  margin-left: auto;
  left: auto;
  right: auto;
  width: 100%;
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;

  @media (min-width: 601px) {
    width: 33.3333333333%;
  }
`
export const TableDescCard = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  padding: 15px 15px 0 15px;
`
export const TableDescCardImage = styled.div`
  height: auto;
  padding-bottom: 10px;

  img {
    width: 100%;
    height: auto;
  }
`
export const TableDescCardTitle = styled.div`
  font-weight: bold !important;
  font-size: 1.3em;
`
export const TableDescCardText = styled.div`
  padding-bottom: 15px;
`
export const TableDescCardButtonWrapper = styled.div`
  padding-bottom: 2px;
`
export const TableDescCardButton = styled.div`
  text-decoration: none;
  color: #fff;
  text-align: center;
  letter-spacing: 0.5px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  font-size: 14px;
  outline: 0;
  border: none;
  border-radius: 2px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  text-transform: uppercase;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
  background-color: #f44336 !important;
`
export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 20px;
  text-align: center;
`
