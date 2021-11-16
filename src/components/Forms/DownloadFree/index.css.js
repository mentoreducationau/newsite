import styled from "styled-components"

export const DownloadFreeContainer = styled.div`
  width: 100%;
  padding: 4rem;
  background-color: #f1f1f1;

  h3 {
    text-transform: uppercase;
    text-align: center;
  }

  p {
    text-align: center;
  }

  ${props => props.theme.desktop`
    width: ${props.course ? "100%" : "25vw"};
    h3 {
      margin: ${props.course ? "10px" : "30px"};
      text-align: center;
      text-transform: uppercase;
    }
  `}
  ${props => props.theme.mobile`
    width: ${props.course ? "100%" : "25vw"};
    padding: 2rem;
    h3 {
      margin: ${props.course ? "10px" : "30px"};
      text-align: center;
      text-transform: uppercase;
    }
  `}
`
