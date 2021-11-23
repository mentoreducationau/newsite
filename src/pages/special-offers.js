import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumb from '../components/breadcrumb'

const SpecialOffers = () => (
  <Layout>
    <SEO title="Special Offers" />
    <Breadcrumb />
    <h1>Hi I am a special offers page</h1>
    <p>Welcome to special offers page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SpecialOffers
