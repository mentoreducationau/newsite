import React from "react"
import { StaticImage } from 'gatsby-plugin-image'

import { 
  MainContainer,
  HostsContainer,
  HostHeadline,
  AvatarContainer,
  AvatarCard,
  WebinarDescription 
} from "./WebinarInfo.css"

import Tab from "../Tab/Tab"
import { H4, H5, Headline, Paragraph } from "../../styles/Typography.css"
import Registar from "../Forms/Register/Register"
import CourseGuide from "../Forms/CourseGuide/CourseGuide"

const WebinarInfo = () => {
  return (
    <>
      <MainContainer>
        <HostsContainer>
          <HostHeadline>Your hosts</HostHeadline>
          <AvatarContainer>
            <AvatarCard>
              <StaticImage src="../../images/MS.png" alt="mark-sinclair" />
              <H4>Mark Synclair</H4>
              <H5>Founder Mentor Education</H5>
            </AvatarCard>
            <AvatarCard>
              <StaticImage src="../../images/JL.png" alt="james-lynch" />
              <H4>James Lynch</H4>
              <H5>Special Projects Officer</H5>
            </AvatarCard>
            <AvatarCard>
              <StaticImage src="../../images/DO.png" alt="daniel-oneal" />
              <H4>Danielle O'neal</H4>
              <H5>Education Advice Team Leader</H5>
            </AvatarCard>
          </AvatarContainer>
        </HostsContainer>
        <Registar />
      </MainContainer>
      <MainContainer>
        <WebinarDescription>
          <Headline>
            Launch or enhance your career with the FNS40217 Certificate IV in
            Accounting and Bookkeeping.
          </Headline>
          <Paragraph>
            Mentor Education's nationally recognised FNS40217 Certificate IV in
            Accounting and Bookkeeping qualification is tailored to individuals
            either currently working in bookkeeping and accounting roles seeking
            extra skills, knowledge and a formal nationally recognised
            qualification or those preparing to launch a career as a
            professional bookkeeper, payroll officer, accounts clerk or BAS
            agent. The FNS40217 Certificate IV in Accounting and Bookkeeping
            alongside additional assessment requirements as outlined by the Tax
            Practitioners Board (TPB) meet requirements for a course in basic
            GST/BAS taxation principles that is approved by the TPB*. Delivered
            via online study, this qualification introduces students to a broad
            range of accounting and bookkeeping skills including the preparation
            of financial reports, cloud computing, ledger administration and the
            completion and lodging of business activity and instalment activity
            statements. With more than 20,000 graduates since 2003, Mentor
            Education is Australia's largest privately owned accounting /
            bookkeeping, finance and business education provider.
          </Paragraph>
          <Tab />
        </WebinarDescription>
        <CourseGuide />
      </MainContainer>
    </>
  )
}

export default WebinarInfo