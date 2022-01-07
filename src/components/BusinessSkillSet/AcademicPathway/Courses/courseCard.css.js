import styled, { keyframes } from "styled-components"
import { ButtonPrimary } from "../../../../styles/ButtonStyles.css"

const fade = keyframes`
  from {
    display: none;
    opacity: 0;
  }

  to {
    display: flex;
    opacity: 1;
   
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
  display: grid;
  width: 100%;
  max-width: 250px;
  height: 100%;
  padding: 1rem;
  margin: auto;
  justify-content: space-between;
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

  .gatsby-image-wrapper {
    width: 90%;
    aspect-ratio: 1;
    justify-self: center;
  }

  ${props => props.theme.tablet`
    max-width: unset;
  `}
`

export const CourseCardTitle = styled.div`
  margin: 0.5rem;
  font-size: 14px;
  line-height: 16px;

  ${props => props.theme.desktop`
    font-size: 18px;
    line-height: 20px;
  `}
  ${props => props.theme.largeScreen`
    font-size: 24px;
    line-height: 27px;
  `}
`

export const CourseCardButtonContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 0.5rem;
`

export const CourseCardButton = styled(ButtonPrimary)`
  font-family: Futura Heavy;
  font-size: 21px;
  line-height: 27px;
  width: 100%;
  background-color: #cc4a28;
  border-radius: 10px;

  ${props => props.theme.desktop`
    font-size: 26px;
    line-height: 34px;
  `}

  ${props => props.theme.largeScreen`
    font-size: 34px;
    line-height: 43px;
  `}
`

/* Course Card Modal */

export const CourseCardModalWrapper = styled.div`
  display: ${props => (props.display ? "flex" : "none")};
  align-items: center;
  flex-direction: column;
  position: fixed;
  margin: 0;
  background: rgba(0, 0, 0, 20%);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  padding: 30px;
  overflow-y: scroll;
`

const CourseCardModalCard = styled.div`
  opacity: ${props => (props.display === props.id ? 1 : 0)};
  display: ${props => (props.display === props.id ? "inline" : "none ")};
  background: white;
  border-radius: 45px;
  position: relative;
  z-index: 2;
`

export const CourseCardModalContainer = styled(CourseCardModalCard)`
  animation: ${fade} 0.2s linear;
`

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem 2.5rem;
  color: red;
  font-weight: bold;
  z-index: 3;
`

export const InnerWrapper = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 4rem 2rem;

  h3,
  a {
    font-family: Futura Bold;
    color: #464343;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 1rem 0;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const RightContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    height: auto;
  }

  h3,
  a {
    font-family: Futura Bold;
    color: #464343;
  }

  h3 {
    margin-top: 5px;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    width: 40%;
    padding-top: 2rem;
  }
`
