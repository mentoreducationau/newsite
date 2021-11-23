import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumb from '../components/breadcrumb'

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Breadcrumb />
    <h1>Hi I am a contact us page</h1>
    <p>Welcome to contact us page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
