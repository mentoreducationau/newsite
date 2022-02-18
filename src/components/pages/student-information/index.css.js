import styled from "styled-components"
import { Link } from "gatsby"

export const LeftMenuWrapper = styled.div`
  position: sticky;
//   width: 351px;
  padding: 0 32px;
`
export const RightSideWrapper = styled.div`
  width: 100%;
`
export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const MenuTitle = styled.p`
  font-size: 25px;
  line-height: 40px;
  color: red;
  font-weight: bolder;
  text-decoration: underline;
  text-underline-offset: 3px;
`
export const MenuLink = styled(Link)`
  font-size: 20px;
  line-height: 20px;
  color: black;
  font-weight: 400;
  text-decoration: none;
  text-underline-offset: 2px;

  :hover {
    font-weight: bolder;
  }
`
export const Heading = styled.p`
  font-size: 28px;
  line-height: 37px;
  color: black;
  font-weight: bold;
  margin-bottom: 35px;
  text-align: center;
`
export const IntroText = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: black;
  font-weight: 500;
  margin-bottom: 34px;
  text-align: left;
`
