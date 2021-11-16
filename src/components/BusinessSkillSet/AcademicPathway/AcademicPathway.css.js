import styled from "styled-components"
import { SubtitleBold } from "../../../styles/Typography.css"
import { SectionWrapper } from "../../../styles/ContainerStyles.css.js"

export const CardsHeaderWrapper = styled(SectionWrapper)`
  margin-bottom: 40px;
  justify-content: left;

  @media (min-width: 768px) {
    justify-content: center;
  }

`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const CardsHeader = styled(SubtitleBold)`
  text-align: left;
  text-decoration: ${props => (props.isActive ? "underline" : "none")};
  margin: 5px 0;
  cursor: pointer;
  color: #707070;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
    margin: 0;
  }
`