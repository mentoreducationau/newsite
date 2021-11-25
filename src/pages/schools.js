import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SchoolCard from "../components/pages/schools/school-card"

const Schools = ({ pageContext, location }) => (
  <Layout
    pageContext={pageContext}
    location={location}
    crumbLabel="Schools"
  >
    <SEO title="Schools" />
    <div className="container">
      <div className="section">
        <h1> Welcome to our schools page</h1>
        <h3>
          Here you will find information and links to our individual learning
          areas
        </h3>
      </div>

      <div className="section">
        <div className="row">
          <SchoolCard />
          <SchoolCard />
        </div>
      </div>
    </div>
  </Layout>
)

export default Schools
