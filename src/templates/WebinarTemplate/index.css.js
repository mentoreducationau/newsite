import styled from "styled-components"
import img from "../../images/course-title-bg.png"

export const TitleBanner = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  aspect-ratio: 0;

  @media (min-width: 768px) {
    aspect-ratio: 7;
    position: relative;
    max-height: 218px;

    ::after {
      content: "";
      background: url(${img}) no-repeat;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 0;
    }
  }
  .gatsby-image-wrapper {
    width: 100%;
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
export const MainContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap : wrap;
  justify-content: center;
`
