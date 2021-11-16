import styled from "styled-components"

export const CourseCardWrapper = styled.div`
  @media (min-width: 250 * 3px) {
    max-width: 250px;
  }

  width: 100%;

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

  .gatsby-image-wrapper {
    width: 100%;
    justify-self: center;
  }

  ${props => props.theme.tablet`
    max-width: unset;
  `}
`

export const CardsWrapper = styled.div`
  --repeat: auto-fit;

  @media (min-width: calc(250px * 5)) {
    --repeat: 3;
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
    width: 100%;
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
export const ButtonLogin = styled.button`
  background-color: #c0202f;
  color: white;
  width: 70%;
  height: 3rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  margin: 1.5rem auto;
`
export const ButtonPwdReset = styled.button`
  background-color: #a7a7a7;
  color: white;
  width: 70%;
  height: 3rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
`
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`
