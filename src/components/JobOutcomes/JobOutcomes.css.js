import styled, { keyframes } from "styled-components"
import { Container } from "../../styles/ContainerStyles.css"
import { SubtitleBold } from "../../styles/Typography.css"

export const fade = keyframes`
  from {
    display: none;
    opacity: 0;
  }

  to {
    display: initial;
    opacity: 1;
  }
`

export const JobOutcomesContainer = styled(Container)`
  display: grid;
  grid-template-columns: 100%;
  font: 33px/40px Futura;
  color: #707070;
  margin-top: 0;

  ${props => props.theme.desktop`
    grid-template-columns: 33% 33% 34%;
    margin-top: 2rem;
  `}

  ${props => props.theme.largeScreen`
    max-width: 1600px;
  `}
`
export const JobOutcomesCourseContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  font: 33px/40px Futura;
  color: #707070;
  margin-top: 0;

  ${props => props.theme.desktop`
    grid-template-columns: 33% 33% 34%;
    margin-top: 2rem;
  `}

  ${props => props.theme.largeScreen`
    max-width: 1600px;
  `}
`

export const JobDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const JobTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${props => props.theme.desktop`
      margin: 0;
  `}
`

export const JobHeader = styled(SubtitleBold)`
  width: 100%;
  margin: ${props => (props.margin ? props.margin : 0)};
  color: ${props => (props.light ? "#707070" : "")};
  font-size: ${props => (props.size === "sm" ? "20px" : "")};

  ${props => props.theme.desktop`
      max-width: fit-content;
  `}
`

export const JobTitle = styled.p`
  font-family: ${props =>
    props.size === "xs" ? "Futura Medium" : "Futura Bold"};
  font-size: 20px;
  line-height: 30px;
  color: ${props => (props.size === "xs" ? "#153E35" : "#707070")};

  ${props => props.theme.desktop`
    font-size: 33px;
    line-height: 40px;
    font-weight: 400;
    font-family: Futura Medium;
    color: #153e35;
  `}
`

export const SalaryTitle = styled.p`
  font-family: Futura;
  font-size: 14px;
  line-height: 23px;
  color: #153e35;
`

export const SeparatorLine = styled.div`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "4px")};
  background: #707070;
  margin: ${props => (props.margin ? props.margin : "0 auto")};
  opacity: ${props => (props.displayJob === props.id ? 1 : 0)};
  display: ${props => (props.displayJob === props.id ? "initial" : "none ")};
  animation: ${fade} 0.2s linear;
`

const QualificationsUL = styled.ul`
  opacity: ${props => (props.displayJob === props.id ? 1 : 0)};
  display: ${props => (props.displayJob === props.id ? "inline" : "none ")};
  line-height: 2rem;
  margin: 0;

  ${props => props.theme.desktop`
    padding: 1rem 0;
  `}
`

export const QualificationsList = styled(QualificationsUL)`
  animation: ${fade} 0.2s linear;

  .font-bold {
    font-weight: 600;
  }

  .underline {
    text-decoration: underline;
  }
`

export const JobListItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  font-family: Futura Medium;

  p {
    width: 100%;
    margin: 0;
  }

  ${props => props.theme.desktop`
    flex-direction: row;
    align-items: center;
    margin: 1rem 0;

    p {
      max-width: fit-content;
    }
  `}
`

export const QaulificationLink = styled.a`
  font-family: Futura;
  color: #153e35;
  font-size: 14px;
  line-height: 16px !important;
  font-weight: 600;
  text-decoration: none;
  display: block;
  line-height: inherit;
  margin: 10px 0;

  ${props => props.theme.desktop`
    font-size: 33px;
    line-height: 40px !important;
    margin: initial;
  `}
`

export const DropdownArrow = styled.div`
  width: 0;
  height: 0;
  display: inline-block;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  ${({ isOpen }) => {
    if (isOpen === true) return "border-bottom: 10px solid #707070;"
    return "border-top: 10px solid #707070;"
  }}

  ${props => props.theme.desktop`
    display: none;
  `}
`
