import React from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo/Seo"
import AboutTable from "../components/pages/about/about-table"
import WhereOurGraduatesWork from "../components/reuse/where-our-graduates-work-banner/where-our-graduates-work"
import AboutUsIntro from "../components/pages/about/Intro"
import SomeInfo from "../components/pages/about/SomeInfo"
import CompanyProfile from "../components/pages/about/CompanyProfile"

const About = ({ pageContext, location }) => {
  const heading = "Welcome to Mentor Education"
  const intro = [
    "At Mentor Education we do one thing and one thing only, we provide quality training across multiple sectors, including Accounting and Bookkeeping, Mortgage Broking, Financial Services and Business.",
    "We do not try to be all things to all people but concentrate on what we do best. We believe our quality training will provide you with the outcomes you desire, be it a better job, an increased income, being a better adviser or gaining professional recognition. We subscribe to best practice assessment standards ensuring you graduate at the leading edge of your field. You will be equipped with the skill and knowledge gained from an industry-leading training course that will fast track your career.",
  ]
  const somethings = [
    {
      title: "Our Business",
      content:
        "Established in 2002, Mentor Education has become one of the longest established Australian owned and operated training providers in the country specialising in Accounting, Business, Mortgage Broking and Financial Services training. Corporates and individuals seeking quality training turn to Mentor Education for all their needs. Mentor Education specialises in the provision of training to organisations through face-to-face, distance education and interactive online e-learning . Flexible Delivery Options: Nation-Wide Mentor Education specialises in providing professional education and training services to you or your advisers anywhere in Australia. We appreciate that learning needs differ for each individual and organisation, which is why we allow you to select the approach that works best for you.",
    },
    {
      title: "Our ongoing commitment to you",
      content:
        "Building on the strong relationships we develop with students during our courses, our industry experts are available by arrangement to provide ongoing mentoring - on an individual or organisational basis. This can take the form of helping students gain employment, providing continuing professional development (CPD) and access to current industry information, as well as and business coaching to help develop the skills of your staff and establish the systems necessary to achieve your goals.",
    },
    {
      title: "Registered Training Organisation (RTO 21683)",
      content:
        "Mentor Education Pty Ltd (ABN 47 106 065 847) is registered under the National Vocational Education and Training Regulator Act 2011 providing nationally recognised and accredited courses throughout Australia. As a well-established registered training organisation, with a reputation for exemplar industry standards our main aim is to provide quality education, and deliver competency based training programs. You can find the full list of all courses we offer here.",
    },
  ]
  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel="About Us"
      pageName="About Us"
    >
      <Seo title="About Us" />
      <AboutUsIntro heading={heading} intro={intro} />
      <AboutTable />
      <CompanyProfile />
      <SomeInfo something={somethings} />
      <WhereOurGraduatesWork />
    </Layout>
  )
}
export default About
