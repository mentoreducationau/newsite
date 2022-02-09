import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { CourseCardTitle } from "../BusinessSkillSet/AcademicPathway/Courses/courseCard.css"
import { H4 } from "../../styles/Typography.css"
import React from "react"

const ImageGridWrapper = ({ title, content, image, link }) => {
  const educationAcademicLink = useStaticQuery(graphql`
    query EducationAcademic {
      contentfulAsset(contentful_id: { eq: "6TlHo0eVfFoNhj5ZGIZtvO" }) {
        id
        file {
          url
        }
      }
    }
  `)

  return (
    <>
      <Img fluid={image} imgStyle={{ width: "100%" }} />
      <Link style={{ textDecoration: "none" }} to="#">
        <CourseCardTitle
          style={{ color: "#C0202F", textDecoration: "underline" }}
        >
          {link === "education-academic" ? (
            <a
              href={educationAcademicLink.contentfulAsset.file.url}
              style={{ color: "rgb(192, 32, 47)" }}
              target="_blank"
              rel="noreferrer"
            >
              <H4 card>{title}</H4>
            </a>
          ) : (
            <Link to={link} style={{ color: "rgb(192, 32, 47)" }}>
              <H4 card>{title}</H4>
            </Link>
          )}
        </CourseCardTitle>
      </Link>
      <CourseCardTitle>{content}</CourseCardTitle>
    </>
  )
}
export default ImageGridWrapper
