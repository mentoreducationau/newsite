import styled from "styled-components"

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;

  h3 {
    margin: 30px;
    text-align: center;
    text-transform: uppercase;
  }

  ${props => props.theme.desktop`
    width: 25vw;
  `}
`