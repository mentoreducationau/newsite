import * as React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import { TitleBanner, MainContainer } from "./about-us/index.css"
import {
  Headline,
  Title,
  Paragraph,
  ParagraphMedium,
} from "../styles/Typography.css"
import { Container } from "../styles/ContainerStyles.css"
import {
  requirements,
  expressions,
  qualifications,
} from "../contents/aboutusEmployOpportunity"

const EmploymentOpportunitiesPage = ({ pageContext, location }) => (
  <Layout
    pageContext={pageContext}
    location={location}
    crumbLabel="Employment Opportunities"
  >
    <Seo title="Employment Opportunities" />
    <TitleBanner style={{ backgroundAttachment: "fixed" }}>
      <Container>
        <Headline banner>Employment Opportunities</Headline>
      </Container>
    </TitleBanner>
    <MainContainer>
      <Title course style={{ marginTop: "3.5rem" }}>
        CURRENT EMPLOYMENT OPPORTUNITIES
      </Title>
      <Paragraph>
        Please visit{" "}
        <a href="https://www.seek.com.au/Mentor-Education-jobs/in-All-Melbourne-VIC">
          https://www.seek.com.au/Mentor-Education-jobs/in-All-Melbourne-VIC
        </a>{" "}
        for current Mentor Education job opportunities.
      </Paragraph>
      <Title course>
        EXPRESSION OF INTEREST TRAINER/ASSESSORS – NATIONALLY RECOGNISED
        TRAINING PROGRAMS
      </Title>
      <Paragraph>
        As Australia's largest privately owned finance, business and accounting
        education provider, Mentor Education (RTO 21683) is addressing major
        education and continuing professional development needs for financial,
        IT and business services students learning in Australia. Our success is
        built off technology and digital efficiency to make the most in-demand
        online and face to face education and training more accessible and
        engaging for all Australians.
      </Paragraph>
      <Paragraph>
        Mentor Education are inviting expressions of interest from experienced
        Trainers/Assessors and Educators for a range of programs.
      </Paragraph>
      <Paragraph>
        We are inviting experienced candidates to register with us.
      </Paragraph>
      <Paragraph><b>Requirements:</b></Paragraph>
      <ol>
        {requirements.map((item, index) => (
          <li key={index}>
            <Paragraph>{item}</Paragraph>
          </li>
        ))}
      </ol>
      <Paragraph>
        We are calling for Expressions of Interest to deliver and assess the
        following qualifications.
      </Paragraph>
      <ol>
        {qualifications.map((item, index) => (
          <li key={index}>
            <Paragraph>{item}</Paragraph>
          </li>
        ))}
      </ol>
      <Paragraph><b>To lodge your expression of interest please:</b></Paragraph>
      <ol>
        {expressions.list.map((item, index) =>
          index === 0 ? (
            <li key={index}>
              <Paragraph>
                {item}
                <a href={expressions.link}>{expressions.email}</a>
                {"; and"}
              </Paragraph>
            </li>
          ) : index === expressions.list.length - 1 ? (
            <li key={index}>
              <Paragraph>{item}</Paragraph>
            </li>
          ) : (
            <li key={index}>
              <Paragraph>{item + "; and"}</Paragraph>
            </li>
          )
        )}
      </ol>
      <Paragraph>
        We engage our trainers/assessors as employees. We will provide
        information to successfol candidates on the engagement options.
      </Paragraph>
      <Paragraph>
        <i>The Educational Services (Post-Secondary Education) Award 2010</i> applies
        to employees, and pay rates are as per award.
      </Paragraph>
      <Paragraph>
        We assess applications as we receive them. Please lodge an Expression of
        Interest following the instructions above. We anticipate that selected
        courses will commence in early 2019
      </Paragraph>
    </MainContainer>
  </Layout>
)

export default EmploymentOpportunitiesPage
