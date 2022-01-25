import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { CardsWrapper } from "../../pages/about/index.css"

const PublicationHeader = styled.div`
  text-align: center;
  padding-bottom: 2rem;
`
const ImageWrapper = styled.div`
  width: 33.3333333333%;
  margin-left: auto;
  left: auto;
  right: auto;
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;

  @media (min-width: 993px) {
    width: 16.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
`
const Wrapper = styled.div`
  padding: 2rem;
`

const Publications = () => {
  return (
    <Wrapper>
      <PublicationHeader>
        <h1>
          Featured in the following leading financial publications and journals:
        </h1>
      </PublicationHeader>

      <CardsWrapper>
        <ImageWrapper>
          <StaticImage src="./images/pub1.png" alt="publications-img-1" />
        </ImageWrapper>
        <ImageWrapper>
          <StaticImage src="./images/pub2.png" alt="publications-img-2" />
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StaticImage src="./images/pub3.png" alt="publications-img-3" />
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StaticImage src="./images/pub4.png" alt="publications-img-4" />
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StaticImage src="./images/pub5.png" alt="publications-img-5" />
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StaticImage src="./images/pub6.png" alt="publications-img-6" />
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StaticImage src="./images/pub7.png" alt="publications-img-7" />
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StaticImage src="./images/pub8.png" alt="publications-img-8" />
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StaticImage src="./images/pub9.png" alt="publications-img-9" />
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StaticImage src="./images/pub10.png" alt="publications-img-10" />
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StaticImage src="./images/pub11.png" alt="publications-img-11" />
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StaticImage src="./images/pub12.png" alt="publications-img-12" />
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StaticImage src="./images/pub13.png" alt="publications-img-13" />
        </ImageWrapper>
        <ImageWrapper>
          <StaticImage src="./images/pub14.png" alt="publications-img-14" />
        </ImageWrapper>
      </CardsWrapper>
    </Wrapper>
  )
}

export default Publications
