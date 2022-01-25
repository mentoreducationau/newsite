import React from "react"
import Principles from "./principles"
import {
    AboutUsContainer,
  LeftOffsetContent,
  ProfileContentWrapper,
  SomeInfoContent,
} from "./index.css"

const CompanyProfile = () => {
  return (
    <AboutUsContainer marginBottom="40rem">
      <h1>MENTOR EDUCATION COMPANY PROFILE</h1>
      <ProfileContentWrapper>
        <h2>Our Values</h2>
        <SomeInfoContent>
          <p style={{ margin: `0`, paddingBottom: `.1rem` }}>
            We, the Mentor Education team, are passionate about education; We
            hold our clients at the centre of everything we do; As one
            professional team, we demonstrate our shared values by:
          </p>
        </SomeInfoContent>
        <LeftOffsetContent>
          <ul>
            <li>- Delivering quality outcomes for all our stakeholders</li>
            <li>- Demonstrating trust, respect, honesty and integrity</li>
            <li> - Taking responsibility for our actions</li>
          </ul>
        </LeftOffsetContent>
        <h2>Our Education Philosophy</h2>
        <p>"There is no substitute for quality training"</p>
        <Principles />
      </ProfileContentWrapper>
    </AboutUsContainer>
  )
}
export default CompanyProfile
