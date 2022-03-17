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
    margin-bottom: 5px;
  }

  input {
    border: 2px solid #707070 !important;
    height: 35px !important;
    margin-bottom: 5px;
    
    border-radius: 5px !important;
    transition: none !important;
  }
`

export const FormButton = styled.button`
  font-family: Futura Heavy;
  font-size: 24px;
  line-height: 30px;
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

export const MobileFormField = styled(GlobalFormField)`
  width: 100%;
  padding-bottom: 0;
  margin-bottom: 8px;
  label {
    font-family: Futura Medium;
    font-size: 18px;
    line-height: 24px;
    color: #707070;
    margin-bottom: 7px;
  }

  input {
    border: 2px solid #707070 !important;
    height: 41px !important;
    
    border-radius: 3px !important;
    transition: none !important;
  }
`
export const NameAndSurNameWrapper = styled.div`
  display: flex;
  gap: 17px;
` 
export const DownloadButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`