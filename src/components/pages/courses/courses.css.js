import styled from "styled-components"

export const HeadingText = styled.p`
  font-size: 64px;
  line-height: 84px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 33px;
`
export const IntroText = styled.p`
  font-size: 18px;
  line-height: 26.1px;
  font-weight: 800;
  margin-bottom: 0;
`
export const CourseCollectionHeadingText = styled.p`
  font-size: 46px;
  line-height: 44.5px;
  text-align: center;
  margin-bottom: 45px;
  font-weight: 800;
`
export const CardsWrapper = styled.div`
  //   --repeat: auto-fit;
  --repeat: 3;

  //   @media (min-width: calc(250px * 5)) {
  //     --repeat: 3;
  //   }

  display: grid;
  grid-template-columns: repeat(
    var(--repeat, auto-fit),
    minmax(calc(250px * 1), 1fr)
  );
  grid-template-rows: auto;
  row-gap: 62px;
  column-gap: 34px;
  width: 100%;
`

export const CourseCardWrapper = styled.div`
  @media (min-width: 250 * 3px) {
    max-width: 250px;
  }

  max-width: 345px;
  max-height: 452px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: auto;
  align-content: space-between;
  font-family: Futura Heavy;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 7%);
  -webkit-box-shadow: 10px 0px 13px -7px rgba(0, 0, 0, 5%),
    5px 5px 15px 5px rgba(0, 0, 0, 1%);
  box-shadow: 10px 0px 13px -7px rgba(0, 0, 0, 5%),
    5px 5px 15px 5px rgba(0, 0, 0, 1%);
  transition: transform 0.3s ease-in-out;
  //   :hover {
  //     transform: scale(1.05);
  //   }

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
  margin-bottom: 40.3px;
  padding: 0 32px;
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 21px 51px 21px;
  gap: 9px;
`
export const SearchText = styled.p`
  font-size: 22px;
  line-height: 32.2px;
  font-weight: 800;
  margin-bottom: 0;
`





export const DropDownWrapper = styled.div`
  position: relative;
  min-height: 80px;
`
