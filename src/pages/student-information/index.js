import React, { useState } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/Seo/Seo"
import Intro from "../../components/pages/student-information/Intro"
import { SectionContainer } from "../../styles/ContainerStyles.css"
import LeftMenu from "../../components/pages/student-information/LeftMenu"
import ClassTimetable from "./classTimetable"
import CareerPathwayPage from "./education-pathway"
import Faq from "./faqs-prospective-students"
import AcademicAndVetCalendar from "./academicAndVetCalendar"
import StudentInformationGuide from "./student-information-guide"
import Forms from "./forms"

const StudentInformationPage = ({ pageContext, location }) => {
  const [activePage, setActivePage] = useState(0)
  const heading = "Student Information"
  const intro =
    "I’m baby knausgaard schlitz tote bag mlkshk flannel you probably haven’t heard of them prism retro quinoa ennui shabby chic. Marfa waistcoat fixie craft beer shoreditch man bun ethical mixtape keytar celiac selfies church-key. Gastropub 3 wolf moon lo-fi fingerstache truffaut, +1 cronut hella humblebrag. Fam heirloom synth pickled pinterest XOXO. Cloud bread pour-over scenester fixie 8-bit, raw denim venmo pork belly cornhole disrupt before they sold out blog."

  const handleLeftMenu = (pageNum, url) => {
    setActivePage(pageNum)
    window.history.pushState("state", "Title", url)
  }

  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel={heading}
      pageName={heading}
    >
      <Seo title={heading} />
      <Intro heading={heading} intro={intro} />
      <SectionContainer
        paddingTop="40px"
        marginBottom="6rem"
        row
        style={{ alignItems: "flex-start" }}
      >
        <LeftMenu activePage={activePage} handleLeftMenu={handleLeftMenu} />
        <ClassTimetable activeState={activePage === 5} />
        <CareerPathwayPage activeState={activePage === 3} />
        <Faq activeState={activePage === 0} />
        <AcademicAndVetCalendar activeState={activePage === 4} />
        <StudentInformationGuide activeState={activePage === 1} />
        <Forms activeState={activePage === 2} />
      </SectionContainer>
    </Layout>
  )
}

export default StudentInformationPage
