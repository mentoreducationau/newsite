import * as React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import { TitleBanner, MainContainer, IframeContainer, BottomBannerContainer, BottomBannerText } from "./about-us/index.css"
import { Headline, Paragraph } from "../styles/Typography.css"
import { Container } from "../styles/ContainerStyles.css"
import { testimonials } from "../contents/testimonials"

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
        <Headline banner>
          Here's what just a few of our students had to say about{" "}
          <b>Mentor Education</b>
        </Headline>
      </Container>
      <IframeContainer>
        <iframe
          src="https://player.vimeo.com/video/395097330"
          frameborder="0"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowfullscreen=""
        ></iframe>
      </IframeContainer>
      {testimonials.map((item, index) => (
        <div style={{marginBottom: "5rem"}}>
          <Paragraph>{'"' + item.content + '"' + "-" + item.author}</Paragraph>
        </div>
      ))}
      <IframeContainer>
        <iframe
          src="https://player.vimeo.com/video/403187241"
          frameborder="0"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowfullscreen=""
        ></iframe>
      </IframeContainer>
    </MainContainer>
    <BottomBannerContainer>
        <BottomBannerText>“Completing the Diploma led me to gaining a <b>promotion</b> and a pay <b>increase</b> of nearly $10,000...”</BottomBannerText>
        <a class="waves-effect waves-light btn-large red"><i class="material-icons right">play_arrow</i>view courses</a>
    </BottomBannerContainer>
  </Layout>
)

export default TestimonialsPage
