import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  RightSideWrapper,
  Heading,
  IntroText,
} from "../../components/pages/student-information/index.css"
import FaqAccordion from "../../components/pages/faqs/FaqAccordion"

const Faq = ({ activeState }) => {
  const faqPageData = useStaticQuery(graphql`
    query FaqsQuery {
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
  `)

  const faqs = faqPageData.allContentfulFaqsPageSection.nodes[0]
  const heading = "Frequently Asked Questions"
  const intro =
    "Mentor Education is an Australian nationally recognised vocational education and training (VET) provider, specialising in the provision of interactive online, face-to-face and distance education of nationally accredited qualifications, skill sets and non-accredited industry designations. All Certificate, Diploma, Advanced Diploma, Skill Sets, Graduate Certificate and Graduate Diploma courses are nationally recognised qualifications."
  return (
    <RightSideWrapper activeState={activeState}>
      <Heading>{heading}</Heading>
      <IntroText>{intro}</IntroText>
      {faqs.faqItem.map((item, index) => (
        <FaqAccordion key={index} item={item} />
      ))}
    </RightSideWrapper>
  )
}

export default Faq
