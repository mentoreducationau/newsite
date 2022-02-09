import styled from "styled-components"
import { GlobalFormField } from "../../styles/FormStyles.css"

export const CustomFormStyled = styled.form`
  width: 100%;
  margin: 0;
`

export const FormField = styled(GlobalFormField)`
  width: 100%;
  padding-bottom: 0;
  label {
    font-family: Futura Medium;
    font-size: 16px;
    line-height: 21px;
    color: #464343;
  }

  input {
    border: 2px solid #707070 !important;
    height: 35px !important;
    
    border-radius: 5px !important;
    transition: none !important;
  }
`

export const FormButton = styled.button`
  font-family: Futura Heavy;
  font-size: 28px;
  line-height: 37px;
  background: #DF2F16;
  color: white;
  border: 0;
  border-radius: 5px;
  width: 100%;
  height: 53px;
  margin: 11px auto 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
