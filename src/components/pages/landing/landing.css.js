import styled from "styled-components"
import { TableDescCardButton } from "../about/index.css"

export const TableDescContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
  padding: 2rem;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "0")};
`
export const QuotesContainer = styled.div`
  padding: 0px 2rem 4rem;
  margin-top: 22rem;
`
export const QuotesWrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
  text-align: center;

  @media (min-width: 993px) {
    width: 70%;
  }
  @media (min-width: 601px) {
    width: 85%;
  }
`
export const CoursesButton = styled(TableDescCardButton)`
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem 2rem 2.5rem 2rem;
`
export const Image = styled.img`
  margin-bottom: 0;
`

////   testimonials

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`
export const CardsWrapper = styled(Wrapper)`
  display: flex;
  flex-wrap: wrap;
  padding: 0 3px;
`

export const ReadMoreButtonOnDesk = styled(TableDescCardButton)`
  float: right;
  @media (max-width: 601px) {
    display: none !important;
  }
`
export const ReadMoreButtonOnMob = styled(TableDescCardButton)`
  background: red;
  padding: 0.5rem 0rem 2.7rem 0rem;
  text-weight: bold;
  font-size: 1.5rem;
  width: 100%;
  margin-left: auto;
  left: auto;
  right: auto;
  float: left;
  box-sizing: border-box;
  min-height: 1px;

  @media (min-width: 601px) {
    display: none !important;
  }
`

export const CardWrapper = styled.div`
  width: 100%;
  float: left;
  box-sizing: border-box;
  min-height: 1px;
  padding: 0 0.75rem;
  @media (min-width: 601px) {
    width: 33.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
`
export const Card = styled.div`
  position: relative;
  margin: 0.5rem 0 1rem 0;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
`

export const CardContent = styled.div`
  color: rgb(69, 90, 100);
  padding: 24px;
  border-radius: 0 0 2px 2px;
`
export const AuthorText = styled.p`
  font-weight: bold;
  padding-top: 0.5rem;
  margin-bottom: 5px;
`
export const PosText = styled.p`
  fontsize: 0.8rem;
  lineheight: 1.3;
  margin-bottom: 5px;
`
export const Container = styled.div`
  padding: 2rem;
`
export const Text = styled.p`
  margin-bottom: 5px;
`
export const TestimonialsHeading = styled.h1`
  text-align: center;
`
export const AuthorSpan = styled.span`
  text-align: right;
`