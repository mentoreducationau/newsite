import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const markQaulity = () => {
  return (
    <div>
      <div
        className="section"
        style={{
          padding: `5rem 0 2rem 0`,
        }}
      >
        <div className="row center-align">
          <div
            className="col s12 m3"
            style={{
              padding: `2rem`,
            }}
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <div className="portrait">
              <div
                className=""
                data-sal="fade"
                data-sal-delay="100"
                data-sal-duration="600"
                data-sal-easing="ease"
              >
                <StaticImage src="./images/mark.jpg" alt="mark-qaulity-img" />
              </div>
            </div>
            <div className="qoute">
              <p
                className="left-align"
                style={{
                  fontSize: `.8rem`,
                }}
              >
                15 YEARS AS A TRUSTED EDUCATOR IS A PROUD LEGACY THAT WE AIM TO
                UPHOLD TODAY AND FOR THE NEXT GENERATION OF FINANCIAL AND
                BUSINESS PROFESSIONALS
              </p>
              <div
                className="profile"
                style={{
                  float: `right`,
                  margin: `0`,
                  textAlign: `right`,
                }}
              >
                <p
                  className="name"
                  style={{
                    marginBottom: `-.3rem`,
                    padding: `0`,
                    fontWeight: `bold`,
                  }}
                >
                  Mark Sinclar
                </p>
                <p
                  className="credentials"
                  style={{
                    margin: `0`,
                  }}
                >
                  Founder Mentor Education Pty Ltd
                </p>
              </div>
            </div>
          </div>
          <div
            className="col s12 m9"
            style={{
              padding: `2rem`,
            }}
            data-sal="slide-right"
            data-sal-delay="200"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            <div className="statement left-align">
              <h2>THERE IS NO SUBSTITUTE FOR QUALITY TRAINING</h2>
              <h5>
                AT MENTOR EDUCATION WE DO ONE THING AND ONE THING ONLY, WE
                PROVIDE QUALITY TRAINING IN FINANCIAL, ACCOUNTING AND BUSINESS
                SERVICES
              </h5>
              <p>
                We do not try to be all things to all people but concentrate on
                what we do best. We believe our quality training will provide
                you with the outcomes you desire, be it a better job, an
                increased income, increased skills or gaining professional
                recognition. We concentrate on Financial Planning, Accounting,
                Bookkeeping, Mortgage Broking, Business Administration and RG146
                Compliance because it is what we know best and it is our
                passion. We are just as passionate about you our students; we
                want you to succeed. Work with us and we will get you through to
                graduation. We subscribe to best practice assessment standards
                ensuring you graduate at the leading edge of your field. You
                will be equipped with the skill and knowledge gained from an
                industry-leading training course that will fast track your
                finance, accounting and business services career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default markQaulity
