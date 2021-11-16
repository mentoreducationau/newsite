import styled from "styled-components"
import { GlobalFormField } from "../../styles/FormStyles.css"

export const CustomFormStyled = styled.form`
  width: 100%;
  margin: 0;
`

export const FormField = styled(GlobalFormField)`
  width: 100%;

  label {
    font-family: Futura Medium;
    font-size: 18px;
    line-height: 23px;
    color: #464343;
    padding-left: 1rem;
    margin-bottom: 8px;
  }

  input {
    border: 2px solid #707070;
    height: 50px;
  }

  ${props => props.theme.desktop`
    label {
      font-size: ${props.course ? "14px" : "28px"};
      line-height: ${props.course ? "16px" : "35px"};
    }
    input {
      height:  ${props.course ? "33px" : "70px"};
    }
  `}

  ${props => props.theme.largeScreen`
    input {
      height:  ${props.course ? "33px" : "70px"};
    }
  `}
`

export const FormButton = styled.button`
  font-family: Futura Heavy;
  font-size: 30px;
  line-height: 38px;
  background: #cc4a28;
  color: white;
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 50px;
  text-transform: uppercase;
  margin: 6% auto 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.theme.desktop`
    margin: ${props.course ? "2% auto 0" : "6% auto 0"};
    font-size: ${props.course ? "18px" : "40px"};
    line-height: ${props.course ? "23px" : "51px"};
    height: ${props.course ? "45px" : "70px"};
  `}

  ${props => props.theme.largeScreen`
    font-size: ${props.course ? "18px" : "48px"};
    line-height: ${props.course ? "23px" : "56px"};
    height: ${props.course ? "50px" : "70px"};
  `}
`
