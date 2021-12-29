import styled from "styled-components"

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
  text-align:${props => props.host ? "left" : "center"};
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
    background-color: #DF2F16;
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