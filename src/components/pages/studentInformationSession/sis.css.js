import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { GlobalFormField } from "../../../styles/FormStyles.css"

export const SessionCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  margin-bottom: 86px;
`

export const ContentWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`
export const CourseDataText = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 5px;
  color: ${props => (props.color ? props.color : "black")};
  text-align: ${props => (props.host ? "left" : "center")};
`
export const ImageAndButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 23px;
`
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`
export const PersonNameText = styled.p`
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 0;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const SignUpButton = styled.button`
  width: 201px;
  height: 54px;
  background-color: #df2f16;
  font-size: 24px;
  line-height: 32px;
  color: white;
  border: none;
  border-radius: 2px;
  margin-bottom: 11px;
`
export const HintText = styled.p`
  font-size: 8px;
  line-height: 11px;
  color: black;
  text-align: right;
  margin-bottom: 0;
  margin-right: 10px;
`
export const SignFormWrapper = styled.div`
  padding: 39px 56px;
`

// Sign Up Form

export const CustomFormStyled = styled.form`
  width: 100%;
  margin: 0;
  display: flex;
  gap: 72px;
  align-items: center;
`

export const FormField = styled(GlobalFormField)`
  width: 356px;
  padding-bottom: 0;
  margin-bottom: 22px;
  label {
    font-family: Futura Medium;
    font-size: 22px;
    line-height: 30px;
    color: #464343;
    padding-left: 1rem;
    margin-bottom: 8px;
  }

  input {
    border: 2px solid #707070 !important;
    height: 55px !important;
    width: 356px;
    border-radius: 5px !important;
    transition: none !important;
  }
`

export const FormButton = styled.button`
  font-family: Futura Heavy;
  font-size: 43px;
  line-height: 57px;
  background: #df2f16;
  color: white;
  border: none;
  border-radius: 5px;
  width: 356px;
  height: 87px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const SignUpTitleText = styled.p`
  font-size: 28px;
  line-height: 37px;
  margin-bottom: 0;
`
export const DescText = styled.p`
  font-size: 22px;
  line-height: 24px;
  margin-bottom: 14px;
  width: 72%;
`
// Thank you

export const ThankyouWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`
export const ThankyouContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ThankyouTitleText = styled.p`
  font-size: 48px;
  line-height: 24px;
  margin-bottom: 24px;
`
export const ViewLink = styled(Link)`
  font-size: 22px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 1px;

  :hover {
    cursor: pointer;
  }
`
export const CancelWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 25px 24px 0;
`
export const CancelText = styled.p`
  font-size: 22px;
  line-height: 24px;
  font-weight: 800;
  margin-bottom: 0;
`
