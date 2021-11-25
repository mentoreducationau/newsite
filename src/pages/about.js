import React from "react"
import { Link } from "gatsby"
// import PageTransition from 'gatsby-plugin-page-transitions'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Principles from "../components/pages/about/principles"
import AboutTable from "../components/pages/about/about-table"
import WhereOurGraduatesWork from "../components/reuse/where-our-graduates-work-banner/where-our-graduates-work"

const About = ({ pageContext, location }) => {
  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel="About Us"
    >
      <SEO title="About Us" />
      <div className="section">
        <div className="container">
          <h1>Welcome to Mentor Education</h1>
          <h4>
            At Mentor Education we do one thing and one thing only, we provide
            quality training across multiple sectors, including Accounting and
            Bookkeeping, Mortgage Broking, Financial Services and Business.
          </h4>
          <p>
            We do not try to be all things to all people but concentrate on what
            we do best. We believe our quality training will provide you with
            the outcomes you desire, be it a better job, an increased income,
            being a better adviser or gaining professional recognition. We
            subscribe to best practice assessment standards ensuring you
            graduate at the leading edge of your field. You will be equipped
            with the skill and knowledge gained from an industry-leading
            training course that will fast track your career.
          </p>
        </div>
        <AboutTable />
        <div className="container">
          <h1>MENTOR EDUCATION COMPANY PROFILE</h1>
          <div className="section">
            <h2>Our Values</h2>
            <div className="row">
              <div className="col s12 m12">
                <p style={{ margin: `0`, paddingBottom: `.1rem` }}>
                  We, the Mentor Education team, are passionate about education;
                  We hold our clients at the centre of everything we do; As one
                  professional team, we demonstrate our shared values by:
                </p>
              </div>
              <div className="col s12 offset-m6" style={{width: "50%"}}>
                <ul>
                  <li>
                    - Delivering quality outcomes for all our stakeholders
                  </li>
                  <li>- Demonstrating trust, respect, honesty and integrity</li>
                  <li> - Taking responsibility for our actions</li>
                </ul>
              </div>
              <h2>Our Education Philosophy</h2>
              <p>"There is no substitute for quality training"</p>
              <Principles />
            </div>
          </div>
          <div className="section">
            <div className="row">
              <h2>Our Business</h2>
              <div className="col s12 m12">
                <p style={{ margin: `0`, paddingBottom: `.1rem` }}>
                  Established in 2002, Mentor Education has become one of the
                  longest established Australian owned and operated training
                  providers in the country specialising in Accounting, Business,
                  Mortgage Broking and Financial Services training. Corporates
                  and individuals seeking quality training turn to Mentor
                  Education for all their needs. Mentor Education specialises in
                  the provision of training to organisations through
                  face-to-face, distance education and interactive online
                  e-learning . Flexible Delivery Options: Nation-Wide Mentor
                  Education specialises in providing professional education and
                  training services to you or your advisers anywhere in
                  Australia. We appreciate that learning needs differ for each
                  individual and organisation, which is why we allow you to
                  select the approach that works best for you.
                </p>
              </div>
            </div>
            <div className="section">
              <div className="row">
                <h2>Our ongoing commitment to you</h2>
                <div className="col s12 m12">
                  <p style={{ margin: `0`, paddingBottom: `.1rem` }}>
                    Building on the strong relationships we develop with
                    students during our courses, our industry experts are
                    available by arrangement to provide ongoing mentoring - on
                    an individual or organisational basis. This can take the
                    form of helping students gain employment, providing
                    continuing professional development (CPD) and access to
                    current industry information, as well as and business
                    coaching to help develop the skills of your staff and
                    establish the systems necessary to achieve your goals.
                  </p>
                </div>
              </div>
              <div className="section">
                <div className="row">
                  <h2>Registered Training Organisation (RTO 21683)</h2>
                  <div className="col s12 m12">
                    <p style={{ margin: `0`, paddingBottom: `.1rem` }}>
                      Mentor Education Pty Ltd (ABN 47 106 065 847) is
                      registered under the National Vocational Education and
                      Training Regulator Act 2011 providing nationally
                      recognised and accredited courses throughout Australia. As
                      a well-established registered training organisation, with
                      a reputation for exemplar industry standards our main aim
                      is to provide quality education, and deliver competency
                      based training programs. You can find the full list of all
                      courses we offer here.
                    </p>
                  </div>
                </div>
              </div>
              <WhereOurGraduatesWork />
            </div>
          </div>
        </div>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default About
