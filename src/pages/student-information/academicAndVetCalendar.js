import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  RightSideWrapper,
  Heading,
  IntroText,
} from "../../components/pages/student-information/index.css"
import { NoneDecorationA } from "../../styles/ButtonStyles.css"

const AcademicAndVetCalendar = ({ activeState }) => {
  const educationAcademicLink = useStaticQuery(graphql`
    query EducationAcademicUrl {
      contentfulAsset(contentful_id: { eq: "6TlHo0eVfFoNhj5ZGIZtvO" }) {
        id
        file {
          url
        }
      }
    }
  `)

  const heading = "Mentor Education Academic and VET Calendar 2021"
  const intro1 = "Looking for Mentor Education’s yearly student calendar? "
  const intro2 =
    " to access Mentor Education’s Academic and VET Calendar for 2021 with all key dates for vocational education students."
  return (
    <RightSideWrapper activeState={activeState}>
      <Heading>{heading}</Heading>
      <IntroText>
        {intro1}
        <NoneDecorationA
          href={educationAcademicLink.contentfulAsset.file.url}
          target="_blank"
          rel="noreferrer"
          style={{ color: "blue" }}
        >
          Click here
        </NoneDecorationA>
        {intro2}
      </IntroText>
    </RightSideWrapper>
  )
}

export default AcademicAndVetCalendar
