import styled from "styled-components"
import { Container } from '../../styles/ContainerStyles.css'
import { H3 } from "../../styles/Typography.css"


export const MainContainer = styled(Container)`
  margin: 1rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${props => props.theme.desktop`
    flex-direction: row;
  `}
`

export const HostsContainer = styled.div`
  width: 100%;

  ${props => props.theme.desktop`
    width: 65%;
  `}
`

export const HostHeadline = styled(H3)`
  position: relative;
  width: fit-content;

  ::after {
    content: "";
    width: 100%;
    height: 2px;
    background: #707070;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`
export const AvatarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2rem 0;
`
export const AvatarCard = styled.div`
  width: 30%;
  text-align: center;
  display: grid;
  row-gap: 8px;
  align-content: baseline;

  ${props => props.theme.desktop`
    width: 25%;
  `}

  .gatsby-image-wrapper {
    aspect-ratio: 1;
  }
`

export const WebinarDescription = styled.div`
  width: 100%;

  ${props => props.theme.desktop`
    width: 65%;
  `}
`