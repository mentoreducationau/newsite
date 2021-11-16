import React from "react"
import { H3, Paragraph } from "../../styles/Typography.css"
import { IntroContainer, TrustLogoContainer, WhyMentor } from "./index.css"
import { StaticImage } from "gatsby-plugin-image"

const MentorEducation = () => {
  return (
    <>
      <IntroContainer>
        <H3>Why choose Mentor Education?</H3>
        <TrustLogoContainer>
          <StaticImage
            src="../../images/trust-logos/1.png"
            alt="1"
            width={200}
          />
          <br />
          <br />
          <StaticImage
            src="../../images/trust-logos/2.png"
            alt="2"
            width={200}
          />
        </TrustLogoContainer>
        <WhyMentor>
          <li>
            <Paragraph>
              <strong>100% Online</strong>
            </Paragraph>
            <Paragraph>
              Study where you want, when you want.
              <strong>No need to turn up to a class!</strong>
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <strong>Full student support provided</strong>
            </Paragraph>
            <Paragraph>
              We have dedicated training, assessment and student support staff
              focused on helping you finish your qualification, that's why we
              had a 90%+ completion rate in 2020!
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <strong>Free IPA and/or ICB student membership</strong>
            </Paragraph>
            <Paragraph>
              After enrolling into this program, you will be provided with a
              student membership with either the Institute of Certified
              Bookkeepers (ICB) and/or the Institute of Public Accountants (IPA)
              free of charge for 12 months.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <strong>
                Industry trusted training provider - 20,000 Graduates since 2003
              </strong>
            </Paragraph>
            <Paragraph>
              Mentor Education’s Certificate IV in Accounting and Bookkeeping is
              recognised and accredited by the Institute of Certified
              Bookkeepers (ICB), is a Nationally recognised qualification and is
              delivered by{" "}
              <strong>
                Australia's largest Accounting, Business and Finance education
                provider.
              </strong>
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <strong>Tax Practitioners Board GST/BAS</strong>
            </Paragraph>
            <Paragraph>
              The course includes the latest up-to-date GST/BAS units recognised
              by the Tax Practitioners Board (TPB).
            </Paragraph>
          </li>
        </WhyMentor>
      </IntroContainer>
    </>
  )
}

export default MentorEducation
