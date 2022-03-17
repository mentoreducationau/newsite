import styled from "styled-components"
import { Title } from "../../styles/Typography.css"

/* Style the accordion section */
export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
`

/* Style the buttons that are used to open and close the accordion panel */
export const AccordionBlock = styled.div`
  background-color: white;
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
  height: 2rem;
`

/* Style the accordion content panel. Note: hidden by default */
export const AccordionContent = styled.div`
  background-color: white;
  transition: max-height 0.5s ease;
  overflow: hidden;
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
  }

  th,
  td {
    text-align: left;
    padding: 16px !important;
  }

  tr:nth-child(even) {
    // background-color: #f6faf9;
    height: 63px;
  }

  tr:nth-child(odd) {
    // background-color: #e5f1ed;
    height: 63px;
  }
`

export const AccordionIcon = styled.button`
  position: relative;
  width: 14px;
  height: 14px;
  margin-left: 0;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: gray;
    transition: transform 0.25s ease-out;
  }

  /* Vertical line */
  &:before {
    top: 0;
    left: 50%;
    width: 3px;
    height: 100%;
    margin-left: -2px;
  }

  /* horizontal line */
  &:after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 3px;
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
    width: 14px;
    height: 14px;
  }
`
export const AccordionTitle = styled(Title)`
  margin: 0;
  color: gray;
  font-size: 18px;
  line-height: 20px;
`

export const AccordionUnitNameTd = styled.div`
  display: flex;

  li {
    margin-right: -10px;
  }
`
