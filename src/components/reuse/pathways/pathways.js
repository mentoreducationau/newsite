import React from "react"
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt"
import styled from "styled-components"

const PathwaysContainer = styled.div`
  padding-bottom: 2rem;
  text-align: center;
`
const PathwaysWrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
  background: #efeef1;
  padding: 1rem 5rem;
  min-height: 200px;

  @media (min-width: 993px) {
    width: 70%;
  }
  @media (min-width: 601px) {
    width: 85%;
    min-height: 150px;
  }
`
const ArrowRight = styled(ArrowRightAlt)`
  display: flex !important;
  padding-left: 0.1rem !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 30px !important;
`
const RedGoButton = styled.p`
  display: flex;
  padding: 1.5rem 2rem;
  align-items: center;
  justify-content: center;
  float: right;
  font-size: 1rem;

  text-decoration: none;
  color: #fff;
  text-align: center;
  letter-spacing: 0.5px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  outline: 0;
  border: none;
  border-radius: 2px;
  height: 36px;
  line-height: 36px;
  text-transform: uppercase;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
  background-color: #f44336 !important;
`
const ButtonWrapperOnDesk = styled.div`
  display: none !important;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0px 0.5rem 4rem;
  float: left;
  box-sizing: border-box;
  min-height: 1px;

  @media (min-width: 601px) {
    display: flex !important;
    width: 16.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
`
const ButtonWrapperOnMob = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: auto;
  left: auto;
  right: auto;
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;

  @media (min-width: 601px) {
    display: none !important;
  }
`
const TextWrapper = styled.div`
  padding-top: 0.5rem;
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;

  @media (min-width: 601px) {
    width: 83.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
`
const Wrapper = styled.div`
  margin: 0;
`

const Pathways = () => {
  return (
    <PathwaysContainer>
      <h1>
        Explore the pathways to <strong> Higher Education </strong> available
        through Mentor Educations courses
      </h1>
      <PathwaysWrapper>
        <Wrapper>
          <TextWrapper>
            <span>
              <p>
                Learn more about our pathways to Higher Education in Business,
                Accounting and Finance
              </p>
            </span>
          </TextWrapper>
          <ButtonWrapperOnDesk>
            <RedGoButton>
              GO
              <span>
                <ArrowRight />
              </span>
            </RedGoButton>
          </ButtonWrapperOnDesk>
          <ButtonWrapperOnMob>
            <RedGoButton>
              GO
              <span>
                <ArrowRight />
              </span>
            </RedGoButton>
          </ButtonWrapperOnMob>
        </Wrapper>
      </PathwaysWrapper>
    </PathwaysContainer>
  )
}

export default Pathways
