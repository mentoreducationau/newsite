import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  RightSideWrapper,
  Heading,
  IntroText,
} from "../../components/pages/student-information/index.css"
import FormsGrid from "../../components/pages/student-information/FormsGrid"
import FormsTable from "../../components/pages/student-information/FormsTable"

const Forms = ( {activeState}) => {
  const data = useStaticQuery(graphql`
    query StudentFormsAndDocumentsQuery1 {
      allContentfulStudentFormsAndDocumentsPage {
        nodes {
          studentFormsSEctions {
            facultyName
            course {
              courseCode
              courseName
              studyLevel
              courseGuide {
                file {
                  url
                }
              }
              enrolmentForm {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  const formsData =
    data.allContentfulStudentFormsAndDocumentsPage.nodes[0].studentFormsSEctions

  const [tableContent, setTableContent] = useState([])
  const [showGrid, setShowGrid] = useState(true)

  const heading = "STUDENT FORMS"
  const intro = [
    {
      title: "Downloading Brochures and Enrolment forms",
      content: [
        "Download all forms and brochures from our website. All files are Portable Document Format (PDF) and require Adobe Acrobat Reader to open and print. Click the icon below to go to the Adobe download page to install Adobe Acrobat for free from the Adobe website.",
        "Larger PDF files may take a long time to open, depending on the speed of your internet connection. If you have difficulty opening a PDF file, try saving the file to the hard drive on your computer and open it from there. It will open and print much more quickly.",
      ],
    },
    {
      title: "Completing Enrolment forms",
      content: [
        "Students have the option of completing their enrolment online or using the below enrolment forms. Pricing on all enrolment forms will reflect current recommended retail prices. Please only make your course fee payment the amount shown on each individual course web page when completing these forms. If you have any questions regarding enrolment forms, please feel free to call us on 1300 306 146.",
      ],
    },
  ]

  const handleGridClick = (id) => {
    setShowGrid(false);
    setTableContent(formsData[id].course)
  }

  return (
    <RightSideWrapper activeState={activeState}>
      <Heading>{heading}</Heading>
      {intro.map(item => (
        <React.Fragment key={item.title}>
          <Heading marginBottom="0" tAlign="left">
            {item.title}
          </Heading>
          {item.content.map(it => (
            <IntroText key={it}>{it}</IntroText>
          ))}
        </React.Fragment>
      ))}
      <FormsGrid faculties={formsData} handleGridClick={handleGridClick} showGrid={showGrid} />
      <FormsTable courses={tableContent} hiddenTable={showGrid} setShowGrid={setShowGrid} />
    </RightSideWrapper>
  )
}

export default Forms
