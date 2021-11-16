import React from "react"

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

const CourseTemplate = () => {
  return (
    <>
      <TitleBanner>
        <Container>
          <Headline banner>
            FNS40217 - Certificate IV in Accounting and Bookkeeping
          </Headline>
        </Container>
      </TitleBanner>
      <MainContainer>
        <CourseContainer>
          <FreeConsultBanner />
          <StudyOptions />
          <MentorEducation />
          <DownloadFree course/>
        </CourseContainer>
        <SideBar>
          <CourseGuide course imgContained />
          <EnrolOnline />
          <EnrolOnline virtual />
          <EnrolOnline support />
          <Reviews />
        </SideBar>
      </MainContainer>
      <MainContainer>
        <StudentsWork course />
      </MainContainer>
      <Terms>
        <Paragraph>* Terms and conditions.</Paragraph>
        <Paragraph>
          For further information regarding tuition fees and study options
          related to the FNS40217 - Certificate IV in Accounting and Bookkeeping
          Australian Government nationally recognised qualification listed on
          this web page delivered by Mentor Education Pty Ltd (RTO 21683),
          please visit the Terms and Conditions section of the Mentor Education
          Website located at https://www.mentor.edu.au/terms-and-conditions or
          call us on 1300 306 146.
        </Paragraph>
        <Paragraph>
          The FNS40217 - Certificate IV in Accounting and Bookkeeping alongside
          additional assessment requirements as outlined by the Tax
          Practitioners Board (TPB) meet requirements for a course in basic
          GST/BAS taxation principles that is approved by the TPB.
        </Paragraph>
      </Terms>
    </>
  )
}

export default CourseTemplate
