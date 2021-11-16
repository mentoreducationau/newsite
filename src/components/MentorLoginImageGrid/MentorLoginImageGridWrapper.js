import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CourseCardTitle } from "../BusinessSkillSet/AcademicPathway/Courses/courseCard.css"
import { H4 } from "../../styles/Typography.css"
import React from "react"
import { ButtonLogin, ButtonPwdReset, ButtonsWrapper } from "./index.css"

const MentorLoginImageGridWrapper = ({ title, link, image }) => {
  return (
    <>
      <Link style={{ textDecoration: "none" }} to={link}>
        <GatsbyImage
          imgStyle={{ width: "100%" }}
          image={getImage(image)}
          alt="test"
        />
      </Link>
      <ButtonsWrapper>
        <Link style={{ textDecoration: "none" }} to={link}>
          <CourseCardTitle
            style={{ color: "#C0202F", textDecoration: "underline" }}
          >
            <H4 card>{title}</H4>
          </CourseCardTitle>
        </Link>
        <ButtonLogin>LMS LOGIN</ButtonLogin>
        <ButtonPwdReset>PASSWORD RESET</ButtonPwdReset>
        <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <a
            href="https://learn.mentor.edu.au/"
            style={{ textDecoration: "underline", color: "#c0202f" }}
          >
            Login
          </a>{" "}
          |{" "}
          <a
            href="https://learn.mentor.edu.au/d2l/lp/forgotPassword/forgotPassword.d2l"
            style={{ textDecoration: "underline", color: "#c0202f" }}
          >
            Reset password
          </a>
        </p>
      </ButtonsWrapper>
    </>
  )
}
export default MentorLoginImageGridWrapper
