import styled from "styled-components"

export const EnrolContainer = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  height: 100%;
  text-align: center;
  background-color: #f1f1f1;

  h3 {
    color: #333;
  }

  p {
    margin-top: 2rem;
  }
`
export const OnlineButton = styled.button`
  margin-top: 2rem;
  font-family: Futura Heavy;
  background: #4caf50;
  color: white;
  border: 0;
  border-radius: 2px;
  width: 70%;
  height: 50px;
  text-transform: uppercase;
  cursor: pointer;

  ${props => props.theme.desktop`
    font-size: 18px;
    line-height: 23px;
    height:45px ;
  `}
`
export const PriceButton = styled.button`
  margin-top: 1rem;
  font-family: Futura Heavy;
  background: #9F9F9F;
  color: white;
  border: 0;
  border-radius: 2px;
  width: 70%;
  height: 50px;
  text-transform: uppercase;
  cursor: pointer;

  ${props => props.theme.desktop`
    font-size: 18px;
    line-height: 23px;
    height:45px ;
  `}
`
