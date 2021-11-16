import React from "react"
import { StaticImage } from 'gatsby-plugin-image'

import {
  TitleBanner,
  CourseHeading,
  MainContainer,
} from "./index.css"

import {
  WebinarInfo,
  Testimonials,
  CareerSkillSket,
  JobOutcomes,
  BusinessSkillSet,
  AcademicPathways,
  Knowmore,
  Nosubsitute,
  FooterForm,
  StudentsWork,
} from '../../components'

import { Headline } from "../../styles/Typography.css"

const WebinarTemplate = () => {
  return (
    <>
      <TitleBanner>
        <StaticImage src="../../images/banner_bg.png" alt="banner background" layout="fullWidth" />
        <CourseHeading>
          <Headline banner>
            FNS40217 Certificate IV in Accounting and Bookkeeping
          </Headline>
        </CourseHeading>
      </TitleBanner>
      <MainContainer>
        <WebinarInfo />
        <CareerSkillSket title="How you can further your career with this course" />
        <JobOutcomes />
        <BusinessSkillSet />
        <AcademicPathways />
        <Knowmore />
        <Testimonials />
        <StudentsWork />
        <Nosubsitute />
        <FooterForm />
      </MainContainer>
    </>
  )
}

export default WebinarTemplate
