import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 5rem 0 2rem 0;
`
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  text-align: center;
`
const LeftWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  left: auto;
  right: auto;
  float: left;
  box-sizing: border-box;
  min-height: 1px;
  padding: 2rem;

  @media (min-width: 601px) {
    width: 25%;
  }
`
const ProfileText = styled.p`
  text-align: left;
  font-size: 0.8rem;
`
const ProfileContent = styled.div`
  float: right;
  margin: 0px;
  text-align: right;
`
const NameText = styled.p`
  margin-bottom: -0.3rem;
  padding: 0;
  font-weight: bold;
`
const PosText = styled.div`
  margin: 0;
`
const RightWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  left: auto;
  right: auto;
  float: left;
  box-sizing: border-box;
  min-height: 1px;
  padding: 2rem;

  @media (min-width: 601px) {
    width: 75%;
  }
`
const StatementWrapper = styled.div`
  text-align: left;
`

const markQaulity = () => {
  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <div>
            <div>
              <StaticImage src="./images/mark.jpg" alt="mark-qaulity-img" />
            </div>
          </div>
          <div>
            <ProfileText>
              15 YEARS AS A TRUSTED EDUCATOR IS A PROUD LEGACY THAT WE AIM TO
              UPHOLD TODAY AND FOR THE NEXT GENERATION OF FINANCIAL AND BUSINESS
              PROFESSIONALS
            </ProfileText>
            <ProfileContent>
              <NameText>Mark Sinclar</NameText>
              <PosText>Founder Mentor Education Pty Ltd</PosText>
            </ProfileContent>
          </div>
        </LeftWrapper>
        <RightWrapper>
          <StatementWrapper>
            <h2>THERE IS NO SUBSTITUTE FOR QUALITY TRAINING</h2>
            <h5>
              AT MENTOR EDUCATION WE DO ONE THING AND ONE THING ONLY, WE PROVIDE
              QUALITY TRAINING IN FINANCIAL, ACCOUNTING AND BUSINESS SERVICES
            </h5>
            <p>
              We do not try to be all things to all people but concentrate on
              what we do best. We believe our quality training will provide you
              with the outcomes you desire, be it a better job, an increased
              income, increased skills or gaining professional recognition. We
              concentrate on Financial Planning, Accounting, Bookkeeping,
              Mortgage Broking, Business Administration and RG146 Compliance
              because it is what we know best and it is our passion. We are just
              as passionate about you our students; we want you to succeed. Work
              with us and we will get you through to graduation. We subscribe to
              best practice assessment standards ensuring you graduate at the
              leading edge of your field. You will be equipped with the skill
              and knowledge gained from an industry-leading training course that
              will fast track your finance, accounting and business services
              career.
            </p>
          </StatementWrapper>
        </RightWrapper>
      </Wrapper>
    </Container>
  )
}

export default markQaulity
