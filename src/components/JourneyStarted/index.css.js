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
`
export const JourneyCardContainer = styled.div`
  width: 48%;
  padding: 26px 32px;
  background: #d6d5d5 0% 0% no-repeat padding-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const JourneyTitle = styled(H5)`
  font-size: 41px;
  line-height: 54px;
  text-decoration: underline;
  color: #393939;
`
export const JourneyOldPrice = styled(H5)`
  font-size: 32px;
  line-height: 43px;
  color: #707070;
  letter-spacing: 0px;
  text-decoration: line-through;
`
export const JourneyPrice = styled(H5)`
  font-size: 51px;
  line-height: 68px;
  color: #CC4A28;
  letter-spacing: 0px;
  text-decoration: underline;
`
export const PriceDes = styled(H5)`
  font-size: 32px;
  line-height: 38px;
  color: #707070;
  letter-spacing: 0px;
  text-decoration: underline;
`

export const PriceButton = styled.button`
  font-family: Futura Heavy;
  font-size: 30px;
  line-height: 38px;
  background: #cc4a28;
  color: white;
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 50px;
  text-transform: uppercase;
  margin: 6% auto 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.theme.desktop`
    font-size: 40px;
    line-height: 51px;
  `}

${props => props.theme.largeScreen`
    font-size: 48px;
    line-height: 61px;
    height: 70px;
  `}
`