import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Timetable from "../components/pages/timetable"

const WorkshopDates = ({pageContext, location}) => (
  <Layout pageContext={pageContext} location={location} crumbLabel="TimeTable">
    <SEO title="TimeTable" />
    <Timetable />
  </Layout>
)

export default WorkshopDates
