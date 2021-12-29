import styled from 'styled-components'
import { Title } from '../../styles/Typography.css'

/* Style the accordion section */
export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
`

/* Style the buttons that are used to open and close the accordion panel */
export const AccordionBlock = styled.div`
  background-color: #34A57C;
  cursor: pointer;
  padding: 1rem 0px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none;
  border-radius: 5px;
  outline: none;
  transition: background-color 0.6s ease;
  margin-bottom: ${props=>props.active === "active" ? "0" : "1rem"};
  height: 5rem;
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
    font-size: 24px;
  }
  
  th, td {
    text-align: left;
    padding: 16px;
  }
  
  tr:nth-child(even) {
    background-color: #F6FAF9;
    height: 5rem;
  }

  tr:nth-child(odd) {
    background-color: #E5F1ED;
    height: 5rem;
  }
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
  &:after{
      content: "";
      position: absolute;
      background-color: white;
      transition: transform 0.25s ease-out;
  }

  /* Vertical line */
  &:before{
      top: 0;
      left: 50%;
      width: 4px;
      height: 100%;
      margin-left: -2px;
  }

  /* horizontal line */
  &:after{
      top: 50%;
      left: 0;
      width: 100%;
      height: 4px;
      margin-top: -2px;
  }

  &.active {    
    &:before{ transform: rotate(90deg); }
    &:after{ transform: rotate(180deg); }
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