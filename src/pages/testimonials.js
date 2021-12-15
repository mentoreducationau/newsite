import * as React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import styled from "styled-components"
import {
  TitleBanner,
  MainContainer,
  IframeContainer,
  BottomBannerContainer,
  BottomBannerText,
  TestimonialParagraph,
  TestimonialHeadline,
} from "../components/pages/about/index.css"
import { Headline } from "../styles/Typography.css"
import { Container } from "../styles/ContainerStyles.css"
import { testimonials } from "../contents/testimonials"

const ViewCoursesButton = styled.button`
  width: 300px;
  height: auto;
  margin: 0 auto;
  padding: 11px;
  color: white;
  background-color: red !important;
  border: none;
  border-radius: 4px;
  font-size: 1.5rem;
`
const TestimonialsPage = ({ pageContext, location }) => (
  <Layout
    pageContext={pageContext}
    location={location}
    crumbLabel="Mentor Education Student Testimonials"
  >
    <Seo title="Testimonials" />
    <TitleBanner style={{ backgroundAttachment: "fixed" }}>
      <Container>
        <Headline banner>Testimonials</Headline>
      </Container>
    </TitleBanner>
    <MainContainer>
      <Container>
        <TestimonialHeadline>
          Here's what just a few of our students had to say about{" "}
          <strong>Mentor Education</strong>
        </TestimonialHeadline>
      </Container>
      <IframeContainer>
        <iframe
          src="https://player.vimeo.com/video/395097330"
          frameborder="0"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowfullscreen=""
          title="testimonial-iframe-1"
        ></iframe>
      </IframeContainer>
      {testimonials.map((item, index) => (
        <div key={index} style={{ marginBottom: "5rem" }}>
          <TestimonialParagraph>
            {'"' + item.content + '" - ' + item.author}
          </TestimonialParagraph>
        </div>
      ))}
      <IframeContainer>
        <iframe
          src="https://player.vimeo.com/video/403187241"
          frameborder="0"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowfullscreen=""
          title="testimonial-iframe-1"
        ></iframe>
      </IframeContainer>
    </MainContainer>
    <BottomBannerContainer>
      <BottomBannerText>
        “Completing the Diploma led me to gaining a <b>promotion</b> and a pay{" "}
        <b>increase</b> of nearly $10,000...”
      </BottomBannerText>
      <ViewCoursesButton className="waves-effect waves-light btn-large">
        <i className="material-icons right">play_arrow</i>view courses
      </ViewCoursesButton>
    </BottomBannerContainer>
  </Layout>
)

export default TestimonialsPage
