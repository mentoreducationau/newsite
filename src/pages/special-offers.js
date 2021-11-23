// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Breadcrumb from '../components/breadcrumb'
// import Hero from "../components/pages/specialOffers/Hero"
// import SpecialOffersTable from "../components/pages/specialOffers/SpecialOffersTable"

// const SpecialOffers = () => (
//   <Layout>
//     <SEO title="Special Offers" />
//     <Breadcrumb />
//     <Hero />
//     <SpecialOffersTable />
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

// export default SpecialOffers


import * as React from "react"
// import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import SpecialOffersTemplate from "../templates/SpecialOffersTemplate"
import Layout from "../components/layout"

const StudentInformationPage = ({ pageContext, location }) => (
  // <Layout pageContext={pageContext} location={location} crumbLabel="Special Offers">
  <Layout>
    <Seo title="Special Offers" />
    <SpecialOffersTemplate />
  </Layout>
)

export default StudentInformationPage

