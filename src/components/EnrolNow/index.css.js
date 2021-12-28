import styled from "styled-components"

export const EnrolContainer = styled.div`
  margin-top: 1rem;
  height: 100%;
  text-align: center;

  a {
    color: #cc4a28;
  }
`
export const PriceContainer = styled.div`
  margin-top: 1rem;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  text-align: center;
`
export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
export const PriceButton = styled.button`
  margin-top: 0.5rem;
  font-family: Futura Heavy;
  font-size: 1.5rem;
  line-height: 38px;
  background: #cc4a28;
  color: white;
  border: 0;
  border-radius: 2px;
  width: 70%;
  height: 50px;
  text-transform: uppercase;
  cursor: pointer;

  ${props => props.theme.desktop`
    font-size: 0.9rem;
    line-height: 23px;
    height:45px ;
  `}

  ${props => props.theme.largeScreen`
    font-size: 1.5rem;
    line-height: 38px;
    height:50px;
  `}
`
export const EnrolText = styled.p`
  font-size: 22px;
  line-height: 30px;
  color: black;
`
export const PriceText = styled.p`
  font-size: 62px;
  line-height: 62px;
  color: #df2f16;
`
export const ClickHereWrapper = styled.div`
  text-align: center;
`
export const ClickHereText = styled.p`
  font-size: 22px;
  line-height: 22px;
  margin-bottom: 0;
  color: ${props => (props.click ? "#cc4a28" : "black")};
  text-decoration: ${props => (props.click ? "underline" : "none")};
  ${props => props.click && ":hover {cursor: pointer;}"};
`
