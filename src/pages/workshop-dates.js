import React from "react"

import Layout from "../components/layout"
import Seo from "../components/Seo/Seo"
import Timetable from "../components/pages/timetable"

const WorkshopDates = ({pageContext, location}) => (
  <Layout pageContext={pageContext} location={location} crumbLabel="TimeTable" pageName="TimeTable" >
    <Seo title="TimeTable" />
    <Timetable />
  </Layout>
)

export default WorkshopDates
