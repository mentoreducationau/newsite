import styled from "styled-components"
import { ParagraphMedium } from '../../styles/Typography.css'

export const FoundersDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 40px;

  .gatsby-image-wrapper {
    width: 100%;
    height: auto;
  }

  ${props => props.theme.tablet`
    .gatsby-image-wrapper {
      aspect-ratio: 1.5;
    }
  `}

  ${props => props.theme.widescreen`
    gap: 40px;
    grid-template-columns: repeat(2, 1fr);

    .gatsby-image-wrapper {
      aspect-ratio: 4/3;
    }
  `}
`
export const QuotedPara = styled(ParagraphMedium)`
  grid-column: 1 / 3;
  letter-spacing: 0px;
  text-align: center;
  color: #535353;
  margin: auto;
  text-transform: uppercase;

  svg:not(:root) {
    width: 7%;
    max-width: fit-content;
  }

  ${props => props.theme.desktop`
    font-size: 30px;
    text-align: left;
  `}
`

export const FounderDetails = styled.div`
  grid-column: 1 / 2;
  color: #535353;

  span {
    margin: 0;
  }

  p {
    margin-top: 17px;
  }

  ${props => props.theme.desktop`
    grid-row: 2;

    span {
      font-style: italic;
    }
  `}
`