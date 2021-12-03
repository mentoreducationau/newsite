import styled from "styled-components"

export const CourseContainer = styled.div`
  margin-top: 41px;
  h2 {
    text-align: center;
  }
`
export const FormIntroContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-top: 41px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 43px;
  }
  
`

export const FormDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  * {
    text-align: left;
  }

  h4 {
    margin-bottom: 10px;
  }

  p {
    color: #535353;
  }

  div {
    color: #fc0000;
    margin: 6px 0;
    text-align: left;
  }

  ${props => props.theme.largeScreen`
    max-width: 80%;
  `}
`

export const InputContainer = styled.div`
  @media (min-width: 768px) {
    flex-direction: row;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
`

export const QuotedBoxLeft = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    padding-right: 21px;
  }

  width: 100%;
  color: #535353;
`

export const InputForm = styled.input`
  border: 3px solid #707070;
  height: 50px;
  margin-bottom: 23px;
  width: 100%;
  padding-left: 9px;
  padding-right: 9px;

  border: 2px solid #707070 !important;
  height: 45px !important;
    
  border-radius: 5px !important;
  transition: none !important;

  ${props => props.theme.desktop`
    height: 59px;
  `}

  ${props => props.theme.largeScreen`
    height: 79px;
  `}
`

export const InputLabel = styled.label`
  font-family: Futura Medium;
  font-size: 1rem;
  line-height: 26px;
  letter-spacing: 0px;
  color: #464343;
  margin-bottom: 15px;
  margin-left: 10px;
  display: inline-block;
  width: 100%;

  ${props => props.theme.desktop`
    font-size: 1.4rem;
    line-height: 35px;
  `}

  ${props => props.theme.largeScreen`
    font-size: 1.8rem;
    line-height: 46px;
  `}
`

export const QuotedBoxRight = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    padding-left: 21px;
  }

  width: 100%;
`

export const Textarea = styled.textarea`
  height: 145px;
  border: 2px solid #707070;
  border-radius: 5px;
  width: 100%;
  padding-left: 9px;
  padding-right: 9px;

  ${props => props.theme.desktop`
    height: 200px;
  `}

  ${props => props.theme.largeScreen`
    height: 265px;
  `}
`
export const FooterFormbuttonWrapper = styled.div`
  @media (min-width: 768px) {
    text-align: right;
  }

  width: 100%;
  margin-top: 50px;
`

export const FooterFormbutton = styled.button`
  font-family: Futura Heavy;
  font-size: 1.5rem;
  line-height: 38px;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  background: #cc4a28;
  border: none;
  border-radius: 2px;
  padding: 10px;
  width: 100%;
  cursor: pointer;

  ${props => props.theme.desktop`
    font-size: 2rem;
    line-height: 51px;
    padding: 10px 70px;
    width: fit-content;
  `}

  ${props => props.theme.largeScreen`
    font-size: 2.65rem;
    line-height: 68px;
  `}
`
