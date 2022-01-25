import styled from "styled-components"
import { Link } from "gatsby"
import { Headline } from "../../styles/Typography.css"
import bgImg from "../../images/header-hero.jpeg"

export const HeaderWrapper = styled.div`
  min-height: 91vh;
  background: url(${props => (props.background ? props.background : bgImg)});
  background-size: cover;
  background-color: #cccccc;
  margin: 0 auto;

  @media (max-width: 450px) {
    background-position: bottom 0px left 17%;
  }
`

export const NavWrapper = styled.nav`
  width: 100vw;
  height: 10vh;
  padding: 0 3rem;
  background: transparent;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: none;

  @media (max-width: 450px) {
    padding: 12px 20px;
    height: auto;
  }
`

export const LogoWrapepr = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${props => (props.mobileMenu ? "white" : "red")};
  font-size: 1rem;
  line-height; 20px;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;

  @media (max-width: 1100px) {
    white-space: unset;
    line-height: 34px;
  }

  @media (max-width: 450px) {
    font-size: 17px;
    line-height: 16px;
    flex-basis: min-content;
  }
`

export const LinksWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 450px) {
    display: none;
  }
`

export const HeaderLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2c2d2f;
  height: 50%;
  font-family: futura;
  font-size: 1rem;
  font-weight: 600;
  line-height: 0;
  margin: 0 0.5rem;
  padding: 0 1rem;
  background-color: transparent;
  text-decoration: none;

  :hover {
    border-bottom: 2px solid grey;
  }

  @media (max-width: 1400px) {
    padding: 0;
  }
`

export const SignInButton = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  border: 1px solid red;
  color: red;
  box-shadow: none;
`
export const ColorShapeWrapper = styled.div`
  height: 100vh;
  width: 100% !important;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 4.5rem;
  padding: 0 !important;
`
export const ColorShape = styled.div`
  border-left: 90px solid transparent;
  border-right: 0 solid transparent;
  border-top: 340px solid #df2f16;
  width: ${props => (props.width ? props.width : "100%")};
  opacity: ${props => (props.opacity ? props.opacity : "1")};
  margin-top: ${props => (props.marginTop ? props.marginTop : "0")};
  height: 200px;
`
export const TitleWrapper = styled.div`
  position: absolute;
  top: -310px;
  left: -40px;
`
export const SmallTitle = styled.h3`
  font-size: 35px;
  color: white;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : "0")};
  margin-bottom: 0.8rem;
`
export const BigTitle = styled(Headline)`
  font-size: 50px;
  color: white;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : "0")};
  color: ${props => (props.color ? props.color : "0")};
  text-decoration: ${props => (props.underline ? "underline" : "none")};
  margin-bottom: 0.8rem;
  text-underline-offset: 7px;
  text-decoration-thickness: 4px;
  line-height: 45px;
`
export const PageNameWrapper = styled.div`
  display: flex;
  align-items: baseline;
`
export const IconWrapper = styled.div`
  display: none;
  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`
export const IconImg = styled.img`
  max-width: 100%;
  margin: 0;
  padding: 0;
`
export const ColorRectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 21rem;
`
export const ColorRect = styled.div`
  background-color: #df2f16;
  width: ${props => (props.width ? props.width : "50%")};
  height: 43px;
  margin-bottom: 1.1rem;
`

export const TopBannerWrapper = styled.div`
  padding: 17px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const MenuListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 11px;
`
export const MenuLink = styled(Link)`
  color: white;
  font-size: 32px;
  line-height: 43px;
`
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 33px;
`
export const BottomLink = styled(Link)`
  color: white;
  font-size: 22px;
  line-height: 30px;
`
export const MenuContainer = styled.div`
  position: fixed;
  z-index: 2000;
  width: 100vw;
  height: 100vh;
  background-color: #df2f16;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(${props => (props.menuOpen ? "unset" : "100%")});
  transition: transform 0.5s ease-out;
`
