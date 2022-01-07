import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
// import Hero from "../components/pages/landing/hero"
import Publications from "../components/reuse/publications/publicatons"
import TableDesc from "../components/pages/landing/table-desc"
import Pathways from "../components/reuse/pathways/pathways"
import TestimonialsLanding from "../components/pages/landing/testimonials-landing"
import MarkQaulity from "../components/reuse/mark-qaulity/mark-qaulity"
import QouteCoursesBanner from "../components/pages/landing/qoute-courses-banner"
import WhereOurGraduatesWork from "../components/reuse/where-our-graduates-work-banner/where-our-graduates-work"
// import LandingLayout from "../components/LandingLayout"

const IndexPage = ({pageContext, location}) => (
  // <LandingLayout pageContext={pageContext} location={location} crumbLabel="Home" pageName="Home">
  <Layout pageContext={pageContext} location={location} crumbLabel="Home" pageName="Home">
    <Seo title="Home" />
    {/* <Hero /> */}
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
