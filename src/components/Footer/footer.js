import React, { Fragment } from "react"
import SubscribeForm from "../Forms/Subscribe/SubscribeForm"

import {
  FooterContainer,
  Footer,
  RowOne,
  FooterColumns,
  FooterCourseList,
  FooterMenuLinks,
  RowTwo,
  Connect,
  AboutMentor,
  SocialLink,
} from "./footer.css"

import { footerData, socialLinks } from "./footer-data"

import Logo from "../../images/mlogo.png"

const CustomLink = ({ children, to }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  )
}

const FooterComponent = () => {
  return (
    <FooterContainer>
      <Footer>
        <RowOne>
          {footerData.map((el, i) => (
            <FooterColumns key={el.id}>
              {/* COLUMN ONE */}

              {i === 0 && (
                <>
                  <FooterMenuLinks>
                    {el.column_one.menu_links.map(({ id, name, url }) => (
                      <li key={id}>
                        <CustomLink to={url}>{name}</CustomLink>
                      </li>
                    ))}
                  </FooterMenuLinks>
                  <br />
                  <br />
                  <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                  <SubscribeForm />
                </>
              )}

              {/* COLUMN TWO */}

              {i === 1 && (
                <>
                  <CustomLink to="https://www.mentor.edu.au/school-of-accounting-and-finance/">
                    <h3>{"SCHOOL OF ACCOUNTING & FINANCE"}</h3>
                  </CustomLink>
                  {el.column_two.course_heading.map(
                    ({ id, title, titleUrl, course_list }) => (
                      <Fragment key={id}>
                        <CustomLink to={titleUrl}>
                          <h4>{title}</h4>
                        </CustomLink>
                        <FooterCourseList>
                          {course_list.map(({ id, name, courseUrl }) => (
                            <li key={id}>
                              <CustomLink to={courseUrl}>{name}</CustomLink>
                            </li>
                          ))}
                        </FooterCourseList>
                      </Fragment>
                    )
                  )}
                </>
              )}

              {/* COLUMN THREE */}

              {i === 2 && (
                <>
                  {el.column_three.course_heading.map(
                    ({ id, title, titleUrl, course_list }) => (
                      <Fragment key={id}>
                        {titleUrl ? (
                          <CustomLink to={titleUrl}>
                            <h4>{title}</h4>
                          </CustomLink>
                        ) : (
                          <h4>{title}</h4>
                        )}
                        <FooterCourseList>
                          {course_list.map(({ id, name, courseUrl }) => (
                            <li key={id}>
                              <CustomLink to={courseUrl}>{name}</CustomLink>
                            </li>
                          ))}
                        </FooterCourseList>
                      </Fragment>
                    )
                  )}
                </>
              )}

              {/* COLUMN FOUR */}

              {i === 3 && (
                <>
                  <CustomLink to="https://www.mentor.edu.au/school-of-business-it-project-management/">
                    <h3>{"SCHOOL OF BUSINESS, IT & PROJECT MANAGEMENT"}</h3>
                  </CustomLink>
                  {el.column_four.course_heading.map(
                    ({ id, title, titleUrl, course_list }) => (
                      <Fragment key={id}>
                        <CustomLink to={titleUrl}>
                          <h4>{title}</h4>
                        </CustomLink>
                        <FooterCourseList>
                          {course_list.map(({ id, name, courseUrl }) => (
                            <li key={id}>
                              <CustomLink to={courseUrl}>{name}</CustomLink>
                            </li>
                          ))}
                        </FooterCourseList>
                      </Fragment>
                    )
                  )}
                </>
              )}
            </FooterColumns>
          ))}
        </RowOne>
        <RowTwo>
          <Connect>
            <br />
            <h4>GET IN TOUCH WITH US</h4>
            <p>
              Current students:{" "}
              <CustomLink href="mailto:service@mentor.edu.au">
                service@mentor.edu.au
              </CustomLink>
              <br />
            </p>
            <p>
              New enquires:
              <br />
              <CustomLink href="mailto:courseconsultant@mentor.edu.au">
                courseconsultant@mentor.edu.au
              </CustomLink>
            </p>
            <ul>
              {socialLinks.map(({ id, link, icon }) => (
                <li key={id}>
                  <SocialLink 
                    href={link}
                    icon={icon}
                    target="_blank"
                    rel="noreferrer noopener"
                  />
                </li>
              ))}
            </ul>
          </Connect>
          <AboutMentor>
            <br />
            <CustomLink to="https://www.mentor.edu.au/">
              <img src={Logo} alt="Mentor Education" title="Mentor Education" />
            </CustomLink>
            <p>
              Established since 2003, Mentor Education is an Australian
              nationally recognised vocational education and training (VET)
              provider, specialising in the provision of interactive online,
              face-to-face and distance education of nationally accredited
              qualifications, skill sets and non accredited industry
              designations. As a Registered Training Organisation (RTO 21683),
              Mentor Education deliver nationally recognised Australian
              government qualifications, which comply with the Australian
              Qualifications Framework standard.
            </p>
            <p>
              <CustomLink to="https://www.mentor.edu.au/privacy-policy">
                Privacy Policy
              </CustomLink>
              <CustomLink to="https://www.mentor.edu.au/complaints-policy">
                Complaints Policy
              </CustomLink>
              <CustomLink to="https://www.mentor.edu.au/refund-policy">
                Refund Policy
              </CustomLink>
              <CustomLink to="https://www.mentor.edu.au/accessibility-statement">
                Accessibility Statement
              </CustomLink>
              <CustomLink to="https://www.mentor.edu.au/inclusivity-statement">
                Inclusivity Statement
              </CustomLink>
              <CustomLink to="https://www.mentor.edu.au/terms-and-conditions">
                Terms &amp; Conditions
              </CustomLink>
              <CustomLink to="https://www.mentor.edu.au/disclaimer">
                Disclaimer
              </CustomLink>
            </p>
            <p>
              Copyright © 2003 - 2021 Mentor Education Pty Ltd ABN 47 106 065
              847
            </p>
          </AboutMentor>
        </RowTwo>
      </Footer>
    </FooterContainer>
  )
}

export default FooterComponent
