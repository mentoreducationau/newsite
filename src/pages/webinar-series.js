import * as React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import { TitleBanner, WebinarSeriesContainer } from "./about-us/index.css"
import { Headline, Title, Paragraph } from "../styles/Typography.css"
import { Container } from "../styles/ContainerStyles.css"

const WebinarSeriesPage = ({ pageContext, location }) => (
  <Layout
    pageContext={pageContext}
    location={location}
    crumbLabel="Mentor Education Webinar Series"
  >
    <Seo title="Webinars" />
    <TitleBanner style={{ backgroundAttachment: "fixed" }}>
      <Container>
        <Headline banner>
          Webnars
        </Headline>
      </Container>
    </TitleBanner>
    <WebinarSeriesContainer>
      <Title course style={{ marginTop: "3.5rem" }}>
        <a href="https://www.mentor.edu.au/course-information-session">
          Student information sessions
        </a>
      </Title>
      <Paragraph>
        Mentor Education run regular student information session for individuals
        interested in learning more about Mentor Education courses. Prospective
        students via online live webinars are provided the opportunity to speak
        to Mentor Education team members, providing a forum to gain an in-depth
        understanding of our Nationally recognised qualifications, alongside
        with being able to discuss individual study options.
      </Paragraph>
      <Paragraph>
        Please{" "}
        <a href="https://www.mentor.edu.au/course-information-session">
          click here
        </a>{" "}
        for Mentor Education upcoming student information sessions.
      </Paragraph>
      <Title course>
        <a href="https://www.mentor.edu.au/webinar-series-registration">
          Other upcoming webinars
        </a>
      </Title>
      <Paragraph>
        Please{" "}
        <a href="https://www.mentor.edu.au/webinar-series-registration">
          click here
        </a>{" "}
        for all other upcoming webinars.
      </Paragraph>
    </WebinarSeriesContainer>
  </Layout>
)

export default WebinarSeriesPage
