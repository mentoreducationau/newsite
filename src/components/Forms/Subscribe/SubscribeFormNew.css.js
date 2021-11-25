import styled from "styled-components"
import { GlobalFormField } from "../../../styles/FormStyles.css"

export const SubscribeFormStyled = styled.form`
  display: block;
  position: relative;
  text-align: left;
  padding: 10px 0 10px 3%;
  margin: 0;
`

export const SubscribeFormField = styled(GlobalFormField)`
  input {
    border-radius: 3px !important;
    background-color: white !important;
    transition: none !important;
    border: 2px solid #aaa !important;
    height: 45px !important;

    : focus{
      outline: none !important;
    }
  }
`

export const SubscribeButton = styled.input`
  clear: both;
  background-color: #aaa;
  border: 0 none;
  border-radius: 4px;
  transition: all 0.23s ease-in-out 0s;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: normal;
  height: 32px;
  line-height: 32px;
  margin: 0 5px 10px 0;
  padding: 0 22px;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
  width: auto;

  :hover {
    background-color: #777;
  }
`

export const RequiredIndicator = styled.span`
  color: #e85c41;
  font-size: 150%;
  font-weight: normal;
  position: relative;
  top: 5px;
`

export const RequiredIndicatorText = styled.div`
  text-align: right;
  font-size: 11px;
  margin-right: 4%;
`
