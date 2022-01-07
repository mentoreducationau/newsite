import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactUs from "../components/pages/contact"

const Contact = ({ pageContext, location }) => (
  <Layout
    pageContext={pageContext}
    location={location}
    crumbLabel="Contact Us"
    pageName="Contact Us"
  >
    <Seo title="Contact Us" />
    <ContactUs />
  </Layout>
)

export default Contact
