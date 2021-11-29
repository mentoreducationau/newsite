import * as React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import { Link } from "gatsby"
import {
  TitleBanner,
  MainContainer
} from "./about-us/index.css"
import { Headline, Paragraph } from "../styles/Typography.css"
import { Container } from "../styles/ContainerStyles.css"

const BookingsPage = ({ pageContext, location }) => {

  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel="Book an appointment"
    >
      <Seo title="Book an appointment" />
      <TitleBanner style={{ backgroundAttachment: "fixed" }}>
        <Container>
          <Headline banner>Book an appointment</Headline>
        </Container>
      </TitleBanner>
      <MainContainer>
        <Paragraph>Mentor Education students can directly book appointments with our training and assessment team.</Paragraph>
        <Paragraph>If your trainer or assessor is not listed below please give us a call during business hours on 1300 306 146 (AEST/AEDT) or email <Link to="mailto:support@mentor.edu.au">support@mentor.edu.au</Link>.</Paragraph>
        <iframe scrolling="no" class="sb-widget-iframe" width="100%" border="0" frameborder="0" src="https://mentored.simplybook.me/v2/?widget-type=iframe&amp;theme=adacompliant&amp;theme=adacompliant&amp;timeline=modern&amp;datepicker=top_calendar" name="widget_0.3536262887993138" id="widget_0.3536262887993138" height="1201"></iframe>
      </MainContainer>
    </Layout>
  )
}

export default BookingsPage
