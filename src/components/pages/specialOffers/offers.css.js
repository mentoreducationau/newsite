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
export const CardsWrapper = styled.div`
  --repeat: auto-fit;

  @media (max-width: 1280px) {
    --repeat: 2;
    grid-template-columns: 1fr 1fr;
    max-width: 760px;
  }

  @media (min-width: 1280px) {
    --repeat: 3;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1150px;
  }

  @media (max-width: 835px) {
    --repeat: 1;
    grid-template-columns: 1fr;
  }

  display: grid;
  grid-template-rows: auto;
  row-gap: 110px;
  column-gap: 34px;
  margin: 0 auto;
`

export const CourseCardWrapper = styled.div`
  @media (min-width: 250 * 3px) {
    max-width: 250px;
  }

  width: 345px;
  height: 452px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: auto;
  justify-content: space-between;
  font-family: Futura Heavy;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 7%);
  -webkit-box-shadow: 10px 10px 20px rgba(0, 0, 0, 10%),
    -10px 10px 20px rgba(0, 0, 0, 10%);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 10%),
    -10px 10px 20px rgba(0, 0, 0, 10%);

  .gatsby-image-wrapper {
    width: 100%;
    justify-self: center;
  }
`

export const CardButton = styled.button`
  font-family: Futura Heavy;
  font-size: ${props => (props.fontSize ? props.fontSize : "25px")};
  line-height: ${props => (props.fontSize ? props.lineHeight : "33px")};
  background: #df2f16;
  color: white;
  border: 0;
  border-radius: 5px;
  width: 100%;
  height: 48px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CourseNameText = styled.p`
  font-size: 19px;
  line-height: 22px;
  font-weight: 800;
`

export const CourseCodeText = styled.p`
  font-size: 15px;
  line-height: 16.9px;
  font-weight: 800;
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
