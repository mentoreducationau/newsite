import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumb from '../components/breadcrumb'
import ContactUs from "../components/pages/contact"

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    {/* <Breadcrumb /> */}
    <ContactUs />
  </Layout>
)

export default Contact
