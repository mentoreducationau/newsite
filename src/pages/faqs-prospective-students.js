import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/Seo/Seo"
import FaqIntro from "../components/pages/faqs/FaqIntro"
import FaqAccordion from "../components/pages/faqs/FaqAccordion"
import { IntroHeading } from "../components/pages/faqs/faqs.css"
import { SectionContainer } from "../styles/ContainerStyles.css"

const FaqsPage = ({ pageContext, location, data }) => {
  const faqs = data.allContentfulFaqsPageSection.nodes[0]
  const pageHeading = "Prospective students FAQ"
  const intro = [
    {
      heading: "About Mentor Education",
      content:
        "As one of Australia’s largest privately-owned Financial Services & Accounting, Business, IT & Project Management and Education & Short Course VET providers, Mentor Education is addressing major education and continuing professional development needs for students learning in Australia.First established in 2003, we specialise in the provision of vocational education training (VET) through online, face-to-face and interactive e-learning systems. As a Registered Training Organisation (RTO 21683) all Mentor Education’s qualifications are nationally recognised and where applicable, registered on the ASIC Training Register.During the past 17 years, Mentor has educated over 20,000 financial and business services professionals as a result of its commitment to providing an exceptional student experience, professional training and assessment material supported by best of breed technology and a dedicated, passionate team.",
    },
    {
      heading: "Courses available",
      content:
        "Our courses page provides a complete list of all our courses available at Mentor Education. Visit the https://www.mentor.edu.au/courses/ page for further details.",
    },
  ]
  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel="faqs"
      pageName="FAQ"
    >
      <Seo title={pageHeading} />
      <FaqIntro heading={pageHeading} intro={intro} />
      <SectionContainer>
        <IntroHeading style={{marginBottom: "1rem"}}>{faqs.sectionHeading}</IntroHeading>
        {faqs.faqItem.map((item, index) => (
          <FaqAccordion key={index} item={item} />
        ))}
      </SectionContainer>
    </Layout>
  )
}

export default FaqsPage

export const FaqsPageData = graphql`
  query FaqsPageQuery {
    allContentfulFaqsPageSection {
      nodes {
        id
        sectionHeading
        faqItem {
          question
          answer {
            raw
          }
        }
      }
    }
  }
`
