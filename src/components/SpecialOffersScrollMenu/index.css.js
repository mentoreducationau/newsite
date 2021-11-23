import styled from "styled-components"
import { Paragraph } from "../../styles/Typography.css"

export const SpecialOffersScrollMenuWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`
export const RedDecParagraph = styled(Paragraph)`
  color: #c0202f;
  text-decoration: underline;
  &: hover{
      cursor: pointer;
  }
`
