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
  }

  input {
    border: none;
    width: 100% !important;
    height: 55px !important;
    background-color: white !important;
    border-radius: 5px !important;
    transition: none !important;
  }
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
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
