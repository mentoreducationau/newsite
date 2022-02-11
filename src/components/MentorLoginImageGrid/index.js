import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MentorLoginImageGridWrapper from "./MentorLoginImageGridWrapper.js"

import { Container, SectionWrapper } from "../../styles/ContainerStyles.css"
import { CourseCardWrapper, CardsWrapper } from "./index.css"
import { Paragraph, Title } from "../../styles/Typography.css.js"
import ImageGridWrapper from "../ImageGrid/ImageGridWrapper.js"
import {
  loginInformation,
  additionalInformation,
} from "../../contents/MELMS-login.js"

const MentorLoginImageGrid = () => {
  const images = useStaticQuery(graphql`
    query MentorLoginImage {
      allFile(
        filter: {
          name: {
            in: [
              "Mentor-Education-D2L-LMS"
              "Mentor-Education-CPDPlus-LMS"
              "Mentor-Education-Catapult-LMS"
              "studentinfo_questions"
              "studentinfo_lms"
              "studentinfo_pathways"
            ]
          }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
            name
          }
        }
      }
    }
  `)

  return (
    <Container style={{ marginTop: 0 }}>
      <Title style={{ marginTop: "4rem" }} course>
        Login information - Learning Management System
      </Title>
      <Paragraph style={{ marginBottom: "3rem" }}>
        As a Mentor Education student, your online learning login credentials
        may apply to one or all of the below LMS platforms:
      </Paragraph>
      <SectionWrapper justifyContent="center" style={{ overflow: `visible` }}>
        <CardsWrapper>
          {loginInformation.map((item, index) => (
            <CourseCardWrapper key={index}>
              <MentorLoginImageGridWrapper
                title={item.linkTitle}
                link={item.linkUrl}
                image={
                  images.allFile.edges.filter(
                    image => image.node.name === item.image
                  )[0].node.childImageSharp
                }
              />
            </CourseCardWrapper>
          ))}
        </CardsWrapper>
      </SectionWrapper>
      <Title style={{ marginTop: "4rem" }} course>
        Privacy notice
      </Title>
      <Paragraph>
        Visit{" "}
        <a
          href="https://www.mentor.edu.au/privacy-policy"
          style={{ color: "#c0202f", textDecoration: "underline" }}
        >
          https://www.mentor.edu.au/privacy-policy
        </a>{" "}
        to view Mentor Education's privacy policy.
      </Paragraph>
      <Title style={{ marginTop: "4rem" }} course>
        Technical assistance
      </Title>
      <Paragraph>
        Student login credentials for online learning (username and password)
        are provided by Mentor Education by email on enrolment. This email will
        outline which learning management system or systems you are using during
        your studies.
      </Paragraph>
      <Paragraph>
        If you do not receive this email when commencing studies with Mentor
        Education, please contact us by email:{" "}
        <a
          href="https://mailto:service@mentor.edu.au"
          style={{ color: "#c0202f", textDecoration: "underline" }}
        >
          service@mentor.edu.au
        </a>{" "}
        for further assistance.
      </Paragraph>
      <Paragraph>
        If you have any further questions regarding your online learning login
        please contact the{" "}
        <a
          href="https://mailto:service@mentor.edu.au"
          style={{ color: "#c0202f", textDecoration: "underline" }}
        >
          Mentor Education Helpdesk
        </a>
        .
      </Paragraph>
      <Title style={{ marginTop: "4rem" }} course>
        Additional student information
      </Title>
      <SectionWrapper justifyContent="center" style={{ overflow: `visible` }}>
        <CardsWrapper>
          {additionalInformation.map((info, index) => (
            <CourseCardWrapper key={index}>
              <ImageGridWrapper
                title={info.title}
                content={info.content}
                image={
                  images.allFile.edges.filter(
                    item => item.node.name === info.image
                  )[0].node.childImageSharp
                }
              />
            </CourseCardWrapper>
          ))}
        </CardsWrapper>
      </SectionWrapper>
    </Container>
  )
}

export default MentorLoginImageGrid
