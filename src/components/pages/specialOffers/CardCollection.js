import React, {useRef} from "react"
import { NoneDecorationA } from "../../../styles/ButtonStyles.css"
import { SectionContainer } from "../../../styles/ContainerStyles.css"
import {
  CourseCollectionHeadingText,
  RequestButton,
  CourseTable,
  ButtonAndScrollWrapper,
  IconImg,
} from "./offers.css"
import scrollUp from "../../../images/svg/scroll_up_icon.svg"

const CardCollection = ({ cardCollection }) => {

  const ref = useRef(null)

  const handleScrollUp = () => {
    const position =
      ref.current.getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight / 10
      window.scrollTo({ top: position, behavior: "smooth" })
  }

  return (
    <SectionContainer marginBottom="59.5px" mobMarginBottom="137.5px">
      <div ref={ref}>
        <CourseCollectionHeadingText>
          {cardCollection.sectionHeading}
        </CourseCollectionHeadingText>
      </div>

      <CourseTable>
        {cardCollection.courses.map((item, idx) => (
          <>
            <tr>
              <td rowSpan="2" style={{ textAlign: "center" }}>
                {item.courseCode}
              </td>
              <td rowSpan="2">
                {item.courseCode +
                  " - " +
                  item.studyLevel +
                  " " +
                  item.courseName}
              </td>
              <td>Self-Paced Study</td>
              <td>{`$ ` + item.pricing.salePrice + ` (save 59%)`}</td>
              <td>
                <NoneDecorationA
                  href={
                    `https://enrolments.mentor.edu.au/enrol-selfserve?course_code=` +
                    item.courseCode +
                    `&dc=courseadviser20`
                  }
                >
                  <RequestButton
                    width="120px"
                    height="33px"
                    fontSize="16px"
                    lineHeight="26px"
                    borderRadius="0"
                  >
                    Enrol
                  </RequestButton>
                </NoneDecorationA>
              </td>
            </tr>
            <tr>
              <td>Self-Paced {"&"} Live Tutorial Study</td>
              <td>{`$ ` + item.pricing.tutorialsSalePrice + ` (save 59%)`}</td>
              <td>
                <NoneDecorationA
                  href={
                    `https://enrolments.mentor.edu.au/enrol-selfserve?course_code=` +
                    item.courseCode +
                    `&dc=courseadviser20`
                  }
                >
                  <RequestButton
                    width="120px"
                    height="33px"
                    fontSize="16px"
                    lineHeight="26px"
                    borderRadius="0"
                  >
                    Enrol
                  </RequestButton>
                </NoneDecorationA>
              </td>
            </tr>
          </>
        ))}
      </CourseTable>
      <ButtonAndScrollWrapper>
        <RequestButton
          width="250px"
          height="42px"
          fontSize="16px"
          lineHeight="26px"
          borderRadius="0"
        >
          REQUEST A CALL BACK
        </RequestButton>
        <IconImg src={scrollUp} onClick={handleScrollUp} />
      </ButtonAndScrollWrapper>
    </SectionContainer>
  )
}
export default CardCollection
