import React from "react";

import Layout from "../../../../components/layout";
import Seo from "../../../../components/seo";
import Breadcrumb from "../../../../components/breadcrumb";

import CourseTabs from '../../../../components/pages/schools/course-tabs'
import CoursePaymentPlans from "../../../../components/pages/schools/course-payment-plans";
export default function CoursePage() {
  return (
    <Layout>
      <Seo title="Dynamically returned title" />
      
      <div className="container">
        <Breadcrumb />
        <div className="section">
          <h1>I am the dynamically created course page</h1>
        </div>
        <div className="section">
          <div className="row">
            <div
              className="col s12 m8"
              style={{
                background: `#efeef1`,
                height: `100%`,
              }}
            >
              <div
                className="section coursePromo"
                style={{
                  display: `flex`,
                  justifyContent: `center`,
                  padding: `3rem`,
                  margin: `1rem`,
                  background: `red`,
                }}
              >
                <div
                  style={{
                    textAlign: `center`,
                  }}
                >
                  <h2
                    style={{
                      margin: `0`,
                      padding: `0 0 1rem 0`,
                    }}
                  >
                    Excite your potential in 2021!
                  </h2>
                  <h4
                    style={{
                      margin: `0`,
                    }}
                  >
                    Special EOFY offers now available!*
                  </h4>
                </div>
              </div>
              <div className="section intro">
                <h3
                  style={{
                    margin: `0`,
                    padding: `0 1rem 1rem 1rem`,
                  }}
                >
                  {" "}
                  ** I will be dynamically created thats why I am on every page{" "}
                  <br />
                  Gain direct entry into the new FNS50217 Diploma of Accounting
                  qualification by completing the Accounting Principles Skill
                  Set!
                </h3>
                <p
                  style={{
                    margin: `0`,
                    padding: `0 1rem 1rem 1rem`,
                  }}
                >
                  The FNSSS00014 Accounting Principles Skill Set delivered by
                  Mentor Education is a nationally recognised course designed
                  for individuals seeking to update their qualifications from
                  previous Certificate IV Accounting and Bookkeeping training
                  packages to gain entry into the FNS50217 Diploma of
                  Accounting. The Accounting Principles Skill Set is also
                  suitable for individuals seeking direct entry into the
                  FNS50217 Diploma of Accounting without completing a
                  Certificate IV in Accounting/Bookkeeping qualification.
                </p>
                <p
                  style={{
                    margin: `0`,
                    padding: `0 1rem 1rem 1rem`,
                  }}
                >
                  The qualification comprises of core business units of
                  competency covering disciplines including:
                  <ul
                  style={{
                      marginTop: `1rem`
                  }}
                  >
                      <li>
                     - Processing financial transactions
                      </li>
                      <li>
                     - Extracting interim reports
                      </li>
                      <li>
                     - Creation and operation of a computer accounting system
                      </li>
                      <li>
                     - Establishing and maintaining payroll systems
                      </li>
                      <li>
                     - Completion of business activity statements
                      </li>
                  </ul>
                </p>
                <p
                 style={{
                    margin: `0`,
                    padding: `0 1rem`,
                  }}
                >
                Mentor Education’s FNSSS00014 Accounting Principles Skill Set is a nationally recognised qualification, complying with the AQF standard and ASQA standards for Registered Training Organisations.
                </p>
                  
              </div>
              {/* Buttons */}
              <div className="section">
                  <div className="row"
                  style={{
                      padding: `0 1rem`
                  }}>
                  <div className="col s12 m6">
                          <button
                          className="btn-large red"
                          style={{
                              width: `100%`
                          }}
                          > Course Resources</button>
                      </div>
                      <div className="col s12 m6">
                          <button
                          className="btn-large red"
                          style={{
                              width: `100%`
                          }}
                          > Enrol NOW!</button>
                      </div>
                  </div>
              </div>
              <CourseTabs />
              <CoursePaymentPlans />
            </div>
            <div
              className="col s12 m4"
              style={{
                background: `teal`,
                height: `100%`,
              }}
            >
                
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  );
}
