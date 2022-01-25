import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { AboutUsContainer } from "../../pages/about/index.css"

const GraduateGroupWrapper = styled.div`
  margin: 0 auto 20px;
  text-align: center;
`
const TitleText = styled.h1`
  text-align: center;
  padding-bottom: 1rem;
`
const GraduateWrapper = styled.div`
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
  }
`
const Wrapper = styled.div`
  padding: 2rem;
`

const WhereOurGraduatesWork = () => {
  return (
    <AboutUsContainer marginBottom="16rem">
      <Wrapper>
        <div>
          <TitleText>Where Our Graduates Now Work</TitleText>
        </div>

        <GraduateGroupWrapper>
          <GraduateWrapper>
            <StaticImage
              src="./images/grad1.png"
              style={{
                height: `100%`,
                width: `auto`,
              }}
              alt="graduates-img-1"
            />
          </GraduateWrapper>
          <GraduateWrapper>
            <StaticImage
              src="./images/grad2.png"
              style={{
                height: `100%`,
                width: `auto`,
              }}
              alt="graduates-img-1"
            />
          </GraduateWrapper>
          <GraduateWrapper>
            <StaticImage
              src="./images/grad3.png"
              style={{
                height: `100%`,
                width: `auto`,
              }}
              alt="graduates-img-1"
            />
          </GraduateWrapper>
          <GraduateWrapper>
            <StaticImage
              src="./images/grad4.png"
              style={{
                height: `100%`,
                width: `auto`,
              }}
              alt="graduates-img-1"
            />
          </GraduateWrapper>
          <GraduateWrapper>
            <StaticImage
              src="./images/grad5.png"
              style={{
                height: `100%`,
                width: `auto`,
              }}
              alt="graduates-img-1"
            />
          </GraduateWrapper>
          <GraduateWrapper>
            <StaticImage
              src="./images/6.png"
              style={{
                height: `100%`,
                width: `auto`,
              }}
              alt="graduates-img-1"
            />
          </GraduateWrapper>
          <GraduateWrapper>
            <StaticImage
              src="./images/grad7.png"
              style={{
                height: `100%`,
                width: `auto`,
              }}
              alt="graduates-img-1"
            />
          </GraduateWrapper>
          <GraduateWrapper>
            <StaticImage
              src="./images/grad8.png"
              style={{
                height: `100%`,
                width: `auto`,
              }}
              alt="graduates-img-1"
            />
          </GraduateWrapper>
          <GraduateWrapper>
            <StaticImage
              src="./images/grad9.png"
              style={{
                height: `100%`,
                width: `auto`,
              }}
              alt="graduates-img-1"
            />
          </GraduateWrapper>
          <GraduateWrapper>
            <StaticImage
              src="./images/grad10.png"
              style={{
                height: `100%`,
                width: `auto`,
              }}
              alt="graduates-img-1"
            />
          </GraduateWrapper>
          <GraduateWrapper>
            <StaticImage
              src="./images/grad11.png"
              style={{
                height: `100%`,
                width: `auto`,
              }}
              alt="graduates-img-1"
            />
          </GraduateWrapper>
          <GraduateWrapper>
            <StaticImage
              src="./images/grad12.png"
              style={{
                height: `100%`,
                width: `auto`,
              }}
              alt="graduates-img-1"
            />
          </GraduateWrapper>
        </GraduateGroupWrapper>
      </Wrapper>
    </AboutUsContainer>
  )
}

export default WhereOurGraduatesWork
