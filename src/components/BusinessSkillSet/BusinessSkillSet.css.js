import styled from "styled-components"

export const BusinessInfo = styled.div`
  margin: 0 auto;

  ${props => props.theme.desktop`
    padding: 0 35px 0 0;
  `}

  ${props => props.theme.largeScreen`
    padding: 40px;
  `}
`