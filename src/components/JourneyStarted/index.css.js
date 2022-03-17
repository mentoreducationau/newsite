import styled from "styled-components"
import { Paragraph, H5 } from "../../styles/Typography.css"

export const IntroContainer = styled.div`
  padding: 0 2rem;
`
export const Intro = styled(Paragraph)`
  padding: 0 2rem;
`
export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`
export const JourneyCardContainer = styled.div`
  width: 48%;
  padding: 26px 32px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 450px) {
    width: 100%;
  }
`
export const JourneyTitle = styled(H5)`
  font-size: 40px;
  line-height: 32px;
  text-decoration: underline;
  color: #242424;
  opacity: 0.8;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  margin-bottom: 20px;
`
export const JourneyOldPrice = styled(H5)`
  font-size: 28px;
  line-height: 26px;
  color: #707070;
  letter-spacing: 0px;
  text-decoration: line-through;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 5px;
`
export const JourneyPrice = styled(H5)`
  font-size: 44px;
  line-height: 26px;
  color: #df2f16;
  letter-spacing: 0px;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
  margin-bottom: 25px;
`
export const PriceDes = styled(H5)`
  font-size: 28px;
  line-height: 40px;
  color: #707070;
  letter-spacing: 0px;
  font-weight: ${props => (props.bold ? "bold" : "400")};
`

export const PriceButton = styled.button`
  font-family: Futura Heavy;
  font-size: 31px;
  line-height: 41px;
  font-weight: 400;
  background: #df2f16;
  color: white;
  border: 0;
  border-radius: 2px;
  width: 80%;
  height: 61px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 11px;

  a {
    color: white;
  }
`

export const AdditionalSupportContainer = styled.div`
  width: 100%;
  padding: 0 32px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
`
export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 15px;
`
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const NoticeWrapper = styled.div`
  width: 58%;
  padding: 30px 10px;
`
export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 38%;
`
export const NoticeText = styled.p`
  font-size: 28px;
  line-height: 39px;
  color: #707070;
  margin-bottom: 0;
`
export const DownloadWrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`
export const DownloadText = styled.p`
  font-size: 24px;
  line-height: 32px;
  color: #707070;
  margin-bottom: 0;

  a {
    font-size: 31px;
    line-height: 41px;
    color: #df2f16;
    margin-bottom: 0;
    text-underline-offset: 2px;
    text-decoration-thickness: 2px;
  }
`
