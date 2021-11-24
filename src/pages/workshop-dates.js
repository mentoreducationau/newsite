import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumb from '../components/breadcrumb'
import Timetable from "../components/pages/timetable"

const WorkshopDates = () => (
  <Layout>
    <SEO title="TimeTable" />
    {/* <Breadcrumb /> */}
    <Timetable />
  </Layout>
)

export default WorkshopDates
