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

  width: 345px;
  height: 452px;
  display: flex;
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
  margin-bottom: ${props => props.enrol ? "23.3px" : "40.3px"} ;
  padding: 0 32px;
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${props =>props.enrol ? "0 21px 21px 21px" : "0 21px 51px 21px"} ;
  gap: 9px;
`
export const SearchText = styled.p`
  font-size: 22px;
  line-height: 32.2px;
  font-weight: 800;
  margin-bottom: 0;
`
export const BackToTopArrow = styled.i`
  border: solid gray;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(45deg);
  -webkit-transform: rotate(225deg);
  width: 1rem;
  height: 1rem;
  margin-top: calc(50% - 0.2rem);
  margin-left: calc(50% - 0.5rem);
`
export const ScrollWrapper = styled.div`
  display: ${props => (props.showBackToTop ? "block" : "none")};
  position: fixed;
  right: 5%;
  bottom: 5%;
  background-color: white;
  border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  box-shadow: 1px 1px 15px 2px rgb(0 0 0 / 41%), 0px 0px 0px 0px rgb(0 0 0 / 0%);

  :hover{
    cursor: pointer;
  }
`
