import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/Seo/Seo"

import {
  TitleBanner,
  MainContainer,
  CourseContainer,
  SideBar,
  Terms,
} from "./index.css"

import {
  FreeConsultBanner,
  StudyOptions,
  StudentsWork,
  EnrolOnline,
  MentorEducation,
  Reviews
} from "../../components"
import CourseGuide from "../../components/Forms/CourseGuide/CourseGuide"
import DownloadFree from "../../components/Forms/DownloadFree"
import { Container } from "../../styles/ContainerStyles.css"
import { Headline, Paragraph } from "../../styles/Typography.css"

const CoursePage = ({ pageContext, location, ...props }) => {
  const courseId = props.params.courseId

  return (
    <>
    boob
    </>
  )
}

export default CoursePage