import * as React from "react"
// import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import SpecialOffersTemplate from "../templates/SpecialOffersTemplate"
import Layout from "../components/layout"

const SpecialOffersPage = ({ pageContext, location }) => (
  <Layout pageContext={pageContext} location={location} crumbLabel="Special Offers" pageName="Special Offers">
    <Seo title="Special Offers" />
    <SpecialOffersTemplate />
  </Layout>
)

export default SpecialOffersPage

