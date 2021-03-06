import React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import Publications from "../components/reuse/publications/publications"
import TableDesc from "../components/pages/landing/table-desc"
import Pathways from "../components/reuse/pathways/pathways.js"
import TestimonialsLanding from "../components/pages/landing/testimonials-landing"
import MarkQaulity from "../components/reuse/mark-qaulity/mark-qaulity"
import QouteCoursesBanner from "../components/pages/landing/qoute-courses-banner"
import WhereOurGraduatesWork from "../components/reuse/where-our-graduates-work-banner/where-our-graduates-work"

const IndexPage = ({ pageContext, location }) => (
  <Layout
    pageContext={pageContext}
    location={location}
    crumbLabel="Home"
    pageName="Home"
  >
    <Seo title="Home" />
    <TableDesc />
    <Publications />
    <Pathways />
    <TestimonialsLanding />
    <MarkQaulity />
    <QouteCoursesBanner />
    <WhereOurGraduatesWork />
  </Layout>
)

export default IndexPage
