import React from "react"
import { H3, Paragraph } from "../../styles/Typography.css"
import {
  ConsultBannerContainer,
  IntroContainer,
  TrustLogoContainer,
} from "./index.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const FreeConsultBanner = () => {
  return (
    <>
      <ConsultBannerContainer>
        <H3 course>Excite Your Potential!</H3>
        <H3 course>
          Special October Intake Offers now open. <br />
          <strong>Must end Thursday September 30th 2021 @ 4.00pm AEST.</strong>
        </H3>
      </ConsultBannerContainer>
      <IntroContainer>
        <H3>
          Launch or enhance your career with the FNS40217 - Certificate IV in
          Accounting and Bookkeeping.
        </H3>
        <TrustLogoContainer>
          <StaticImage
            src="../../images/trust-logos/1.png"
            alt="1"
            width={150}
          />
          <br />
          <br />
          <StaticImage
            src="../../images/trust-logos/2.png"
            alt="2"
            width={150}
          />
          <br /> <br />
          <StaticImage src="../../images/trust-logos/3.png" alt="3" />
          <br /> <br />
          <StaticImage
            src="../../images/trust-logos/4.jpg"
            alt="4"
            width={100}
          />
        </TrustLogoContainer>
        <Paragraph>
          Mentor Education's nationally recognised FNS40217 - Certificate IV in
          Accounting and Bookkeeping qualification has been designed to cater to
          individuals either preparing to launch a career as a professional
          bookkeeper, payroll officer, accounts clerk or BAS agent (TPB GST/BAS
          taxation principles units included*) or those currently working in
          bookkeeping and accounting roles seeking extra skills, knowledge and a
          formal nationally recognised qualification.
        </Paragraph>
        <Paragraph>
          This course introduces students to a broad range of accounting and
          bookkeeping skills including bookkeeping fundamentals, financial
          reports preparation, cloud computing and the completion and lodging of
          business activity and instalment activity statements
        </Paragraph>
        <H3 style={{ color: "#666" }}>
          Flexible study options available - Choose how you study!
        </H3>
        <Paragraph>
          Flexible online study options are available, with the choice of
          ‘self-paced study’ or ‘self-paced study combined with virtual online
          tutorials’ (optional and non-compulsory collaborative online classes).
          Students can now choose how they wish to study online, delivering full
          student support (phone and email), relevant learning materials and
          optional virtual classroom collaboration opportunities.
        </Paragraph>
        <Paragraph>
          With more than 20,000 graduates since 2003, Mentor Education is
          Australia's largest privately owned accounting / bookkeeping, finance
          and business education provider, delivering full student support,
          quality training and assessment.
        </Paragraph>
        <Paragraph>
          Download your free <Link to="#">FNS40217 - Certificate IV in Accounting and Bookkeeping course guide</Link> and ask for a free one-on-one consultation
          with an expert Education Adviser today!
        </Paragraph>
      </IntroContainer>
    </>
  )
}

export default FreeConsultBanner
