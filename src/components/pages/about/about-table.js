import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function AboutTable() {
  const data = useStaticQuery(graphql`
    query MyQuery1 {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "bleh" }
        }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="tableDescrContainer center-align">
            <div className="row center-align">
              <div className="col s12 m4">
                <div className="tableDescCard">
                  <div className="tableDescCardImage">
                    <Img
                      fluid={data.allFile.edges[0].node.childImageSharp.fluid}
                    />
                  </div>
                  <div className="tableDescCardTitle">Our Founder</div>
                  <div className="tableDescCardText">
                    <p>
                      Find out more about our founder, Dr. Mark Sinclair, who
                      established Mentor Education in 2003.
                    </p>
                  </div>
                  <div
                    className="tableDescCardButton"
                    style={{
                      paddingBottom: `2rem`,
                    }}
                  >
                    <button className="btn red">Read More </button>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="tableDescCard">
                  <div className="tableDescCardImage">
                    <Img
                      fluid={data.allFile.edges[2].node.childImageSharp.fluid}
                    />
                  </div>
                  <div className="tableDescCardTitle">
                    News and Media Coverage
                  </div>
                  <div className="tableDescCardText">
                    <p>
                      The latest news and media coverage from Mentor Education.
                    </p>
                  </div>
                  <div
                    className="tableDescCardButton"
                    style={{
                      paddingBottom: `2rem`,
                    }}
                  >
                    <button className="btn red">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="tableDescCard">
                  <div className="tableDescCardImage">
                    <Img
                      fluid={data.allFile.edges[4].node.childImageSharp.fluid}
                    />
                  </div>
                  <div className="tableDescCardTitle">Media Releases</div>
                  <div className="tableDescCardText">
                    <p>The latest media releases from Mentor Education.</p>
                  </div>
                  <button className="btn red">Find out how </button>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="row center-align">
              <div className="col s12 m4">
                <div className="tableDescCard">
                  <div className="tableDescCardImage">
                    <Img
                      fluid={data.allFile.edges[1].node.childImageSharp.fluid}
                    />
                  </div>
                  <div className="tableDescCardTitle">Testimonials</div>
                  <div className="tableDescCardText">
                    <p>
                      With over 20,000 graduates since 2003, here what students
                      have to say about their learning experiences at Mentor
                      Education.
                    </p>
                  </div>
                  <div
                    className="tableDescCardButton"
                    style={{
                      paddingBottom: `2rem`,
                    }}
                  >
                    <button className="btn red"><Link to="/about-us/testimonials/" style={{color: "white"}}>Read More</Link></button>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="tableDescCard">
                  <div className="tableDescCardImage">
                    <Img
                      fluid={data.allFile.edges[3].node.childImageSharp.fluid}
                    />
                  </div>
                  <div className="tableDescCardTitle">
                    Employment Opportunities
                  </div>
                  <div className="tableDescCardText">
                    <p>
                      The latest employment opportunities at Mentor Education.
                    </p>
                  </div>
                  <div
                    className="tableDescCardButton"
                    style={{
                      paddingBottom: `2rem`,
                    }}
                  >
                    <button className="btn red"><Link to="/about-us/jobs-at-mentor/" style={{color: "white"}}>Read more</Link></button>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="tableDescCard">
                  <div className="tableDescCardImage">
                    <Img
                      fluid={data.allFile.edges[2].node.childImageSharp.fluid}
                    />
                  </div>
                  <div className="tableDescCardTitle">Webinar Series</div>
                  <div className="tableDescCardText">
                    <p>The latest Webinars from Mentor Education.</p>
                  </div>
                  <button className="btn red"><Link to="/about-us/webinar-series/" style={{color: "white"}}>Find out more</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
