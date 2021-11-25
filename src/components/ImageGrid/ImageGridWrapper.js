import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CourseCardTitle } from "../BusinessSkillSet/AcademicPathway/Courses/courseCard.css"
import { H4 } from "../../styles/Typography.css"
import React from "react"

const ImageGridWrapper = ({ title, content, image, link }) => {
  return (
    <>
      <GatsbyImage
        imgStyle={{ width: "100%" }}
        image={getImage(image)}
        alt="test"
      />
      <Link style={{ textDecoration: "none" }} to="#">
        <CourseCardTitle
          style={{ color: "#C0202F", textDecoration: "underline" }}
        >
          <Link to={link} style={{color: "rgb(192, 32, 47)"}}><H4 card>{title}</H4></Link>
        </CourseCardTitle>
      </Link>
      <CourseCardTitle>{content}</CourseCardTitle>
    </>
  )
}
export default ImageGridWrapper
