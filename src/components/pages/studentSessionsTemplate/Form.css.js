import styled from "styled-components"
import { GlobalFormField } from "../../../styles/FormStyles.css"

export const CustomFormStyled = styled.form`
  width: 100%;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;
`

export const FormField = styled(GlobalFormField)`
  width: 48%;
  padding-bottom: 0;
  label {
    font-family: Futura Medium;
    font-size: 22px;
    line-height: 30px;
    color: white;
    // padding-left: 1rem;
  }

  input {
    border: none;
    width: 100% !important;
    height: 55px !important;
    background-color: white !important;
    border-radius: 5px !important;
    transition: none !important;
  }

  // ${props => props.theme.desktop`
  //   label {
  //     font-size: ${props.course ? "14px" : "28px"};
  //     line-height: ${props.course ? "16px" : "35px"};
  //   }
  //   input {
  //     height:  ${props.course ? "33px" : "70px"};
  //   }
  // `}

  // ${props => props.theme.largeScreen`
  //   input {
  //     height:  ${props.course ? "33px" : "70px"};
  //   }
  // `}
`

export const FormButton = styled.button`
  font-family: Futura Heavy;
  font-size: 42px;
  line-height: 56px;
  background: white;
  color: #DF2F16;
  border: 0;
  border-radius: 5px;
  width: 48%;
  height: 72px;
  // text-transform: uppercase;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  // ${props => props.theme.desktop`
  //   margin: ${props.course ? "2% auto 0" : "6% auto 0"};
  //   font-size: ${props.course ? "0.9rem" : "2rem"};
  //   line-height: ${props.course ? "23px" : "51px"};
  //   height: ${props.course ? "45px" : "70px"};
  // `}

  // ${props => props.theme.largeScreen`
  //   font-size: ${props.course ? "0.9rem" : "2.4rem"};
  //   line-height: ${props.course ? "23px" : "56px"};
  //   height: ${props.course ? "50px" : "70px"};
  // `}
`
