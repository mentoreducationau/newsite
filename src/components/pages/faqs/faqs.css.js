import styled from "styled-components"
import { Title } from "../../../styles/Typography.css"

export const HeadingText = styled.p`
  font-size: 64px;
  line-height: 84px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 33px;

  @media (max-width: 835px) {
    font-size: 42px;
    line-height: 56px;
    margin-bottom: 43px;
  }

  @media (max-width: 1280px) {
    font-size: 53px;
    line-height: 70px;
  }
`

export const IntroHeading = styled.p`
  font-size: 18px;
  line-height: 26.1px;
  font-weight: 800;
  margin-bottom: 0;

  @media (max-width: 835px) {
    font-weight: 500;
  }
`
export const IntroText = styled.p`
  font-size: 18px;
  line-height: 26.1px;
  font-weight: 400;
  margin-bottom: 30px;

  @media (max-width: 835px) {
    font-weight: 500;
  }
`

/* Style the accordion section */
export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
`

/* Style the buttons that are used to open and close the accordion panel */
export const AccordionBlock = styled.div`
  background-color: gray;
  cursor: pointer;
  padding: 1rem 0px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none;
  border-radius: 5px;
  outline: none;
  transition: background-color 0.6s ease;
  margin-bottom: ${props => (props.active === "active" ? "0" : "1rem")};
  height: 5rem;
`

/* Style the accordion content panel. Note: hidden by default */
export const AccordionContent = styled.div`
  background-color: white;
  transition: max-height 0.5s ease;
  overflow: hidden;
  padding: ${props => (props.active ? "1rem" : "0 1rem")};
`

export const AccordionIcon = styled.button`
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 20%;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: white;
    transition: transform 0.25s ease-out;
  }

  /* Vertical line */
  &:before {
    top: 0;
    left: 50%;
    width: 4px;
    height: 100%;
    margin-left: -2px;
  }

  /* horizontal line */
  &:after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    margin-top: -2px;
  }

  &.active {
    &:before {
      transform: rotate(90deg);
    }
    &:after {
      transform: rotate(180deg);
    }
  }

  @media (max-width: 450px) {
    width: 15px;
    height: 15px;
  }
`
export const AccordionTitle = styled(Title)`
  margin: 0;
  color: white;
  font-size: 30px;
`
