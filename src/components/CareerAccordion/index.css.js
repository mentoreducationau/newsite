import styled from "styled-components"
import { H3 } from "../../styles/Typography.css"

export const AccordionContainer = styled.div`
  margin-top: 4rem;

  .accordion {
    border: none;
  }

  .accordion__item + .accordion__item {
    border: none;
  }

  .accordion__button {
    background-color: #fff;
    cursor: pointer;
    padding: 16px 0px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;

    &:before {
      display: none;
    }
  }
`
export const AccordionItemButtonIcon = styled.button`
  position: relative;
  width: 10px;
  height: 10px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  margin-right: 10px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: #707070;
    transition: transform 0.25s ease-out;
  }

  /* Vertical line */
  &:before {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    margin-left: -1px;
  }

  /* horizontal line */
  &:after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    margin-top: -1px;
  }

  &.active {
    &:before {
      transform: rotate(90deg);
    }
    &:after {
      transform: rotate(180deg);
    }
  }
`

export const CardsHeaderWrapper = styled.div`
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

export const CardsHeader = styled(H3)`
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

export const CardsWrapper = styled.div`
  --repeat: auto-fit;

  @media (min-width: calc(250px * 5)) {
    --repeat: 4;
  }

  display: grid;
  grid-template-columns: repeat(
    var(--repeat, auto-fit),
    minmax(calc(250px * 1), 1fr)
  );
  grid-template-rows: auto;
  gap: 27px;
  width: 100%;

  ${props => props.theme.tablet`
    width: 90%;
  `}

  ${props => props.theme.widescreen`
    width: 100%;
    row-gap: 37px;
    column-gap: 74px;
  `}

  ${props => props.theme.largeScreen`
    row-gap: 37px;
  `}
`

export const CourseCardContainer = styled.div`
  width: 100%;
`

export const CourseCardWrapper = styled.div`
  height: 100%;
  padding: 1rem;
  margin: auto;
  align-content: space-between;
  font-family: Futura Heavy;
  border-radius: 22px;
  border: 1px solid rgba(0, 0, 0, 7%);
  -webkit-box-shadow: 10px 0px 13px -7px rgba(0, 0, 0, 5%),
    5px 5px 15px 5px rgba(0, 0, 0, 1%);
  box-shadow: 10px 0px 13px -7px rgba(0, 0, 0, 5%),
    5px 5px 15px 5px rgba(0, 0, 0, 1%);
  transition: transform 0.3s ease-in-out;
  :hover {
    transform: scale(1.05);
  }

  ${props => props.theme.tablet`
    max-width: unset;
  `}
`

export const CourseCardTitle = styled.div`
  margin: 0.5rem;
  font-size: 14px;
  line-height: 16px;

  h4 {
    font-size: 14px;
    line-height: 16px;
  }
`

export const CourseCardButtonContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2rem;
`

export const CourseCardButton = styled.button`
  font-family: Futura Heavy;
  font-size: 1.05rem;
  line-height: 27px;
  width: 100%;
  background-color: #cc4a28;
  border: none;
  border-radius: 10px;
  color: #ffffff;

  ${props => props.theme.desktop`
    font-size: 1.3rem;
    line-height: 34px;
  `}

  ${props => props.theme.largeScreen`
    font-size: 1.7rem;
    line-height: 43px;
  `}
`
