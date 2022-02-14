import styled from "styled-components"
import { Button } from "../../../styles/ButtonStyles.css"

export const HeadingText = styled.p`
  font-size: 64px;
  line-height: 84px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 7px;
  opacity: 0.8;

  @media (max-width: 835px) {
    font-size: 42px;
    line-height: 56px;
    margin-bottom: 43px;
  }

  @media (max-width: 1280px) {
    font-size: 53px;
    line-height: 70px;
  }
`
export const IntroText = styled.p`
  font-size: 26px;
  line-height: 32px;
  font-weight: 400;
  margin-bottom: 0;
  text-align: center;
  opacity: 0.8;

  @media (max-width: 835px) {
    font-weight: 500;
  }
`

export const CourseCollectionHeadingText = styled.p`
  font-size: 29px;
  line-height: 32px;
  margin-bottom: 44px;
  font-weight: 600;
  color: #df2f16;
  text-decoration: underline;
  // @media (max-width: 835px) {
  //   font-size: 29px;
  //   line-height: 28px;
  // }

  // @media (max-width: 1280px) {
  //   font-size: 36px;
  //   line-height: 44.55px;
  // }
`
export const CourseCollectionNavigationText = styled(CourseCollectionHeadingText)`
  width: 350px;
  margin-bottom: 0;
`
export const RequestButton = styled(Button)`
  margin: 0 auto;
`
export const CourseTable = styled.table`
  border: solid 5px #df2f16;
  margin-bottom: 45px;
  border-collapse: collapse;
  tr {
    border: solid 2px #df2f16;
    td {
      border: solid 1px #df2f16;
      padding: 12px;
    }
  }
`
export const ButtonAndScrollWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const IconImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 20px 0 0;

  :hover {
    cursor: pointer;
  }
`
export const TopNavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 13px;
`