import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CourseCardTitle } from "../BusinessSkillSet/AcademicPathway/Courses/courseCard.css"
import { H4 } from "../../styles/Typography.css"
import React from "react"
import { ButtonLogin, ButtonPwdReset, ButtonsWrapper } from "./index.css"
import { NoneDecorationA, NoneDecorationLink } from "../../styles/ButtonStyles.css"

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
          <NoneDecorationLink to={link}>
          <CourseCardTitle
            style={{ color: "#C0202F", textDecoration: "underline" }}
          >
            <H4 card>{title}</H4>
          </CourseCardTitle>
          </NoneDecorationLink>
        <ButtonLogin>LMS LOGIN</ButtonLogin>
        <ButtonPwdReset>PASSWORD RESET</ButtonPwdReset>
        <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <NoneDecorationA
            href="https://learn.mentor.edu.au/"
            style={{ color: "#c0202f" }}
          >
            Login
          </NoneDecorationA>{" "}
          |{" "}
          <NoneDecorationA
            href="https://learn.mentor.edu.au/d2l/lp/forgotPassword/forgotPassword.d2l"
            style={{ color: "#c0202f" }}
          >
            Reset password
          </NoneDecorationA>
        </p>
      </ButtonsWrapper>
    </>
  )
}
export default MentorLoginImageGridWrapper
