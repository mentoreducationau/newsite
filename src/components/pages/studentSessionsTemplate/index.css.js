import styled from "styled-components"
import { Link } from "gatsby"
import { Headline } from "../../../styles/Typography.css"
import bgImg from "../../../images/header-hero.jpeg"
import sessionHeaderBg from "../../../images/session-header-bg.png"

export const HeaderWrapper = styled.div`
  //   min-height: 91vh;
  //   background: url(${props =>
    props.background ? props.background : bgImg});
  background-size: cover;
  background-color: #df2f16;
  margin: 0 auto;

  @media (max-width: 450px) {
    background-position: bottom 0px left 17%;
  }
`

export const NavWrapper = styled.nav`
  width: 100vw;
  height: 10vh;
  padding: 0 66px;
  background: white;
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
  font-size: 15px;
  line-height; 20px;
  font-weight: 600;
  white-space: nowrap;

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
  color: grey;
  height: 50%;
  font-family: futura;
  font-size: 1rem;
  font-weight: 400;
  line-height: 0;
  margin: 0 0.5rem;
  padding: 0;
  background-color: transparent;
  text-decoration: none;
  position: relative;

  :after {
    content: "";
    position: absolute;
    width: 0;
    left: 50%;
    height: 2px;
    background: red;
    bottom: 0;
  }

  :hover {
    font-size: 1.5rem;
    :after {
      content: "";
      position: absolute;
      width: 100%;
      left: 0%;
      height: 2px;
      background: red;
      bottom: 0;
      transition: all 0.5s ease;
    }
  }
`

export const SignInButton = styled.button`
  background-color: transparent;
  border: 2px grey solid;
  border-radius: 3px;
  color: grey;
  font-size: 13px;
  line-height: 17px;
  height: 29px;
  margin: 0 0.5rem;

  :hover {
    cursor: pointer;
  }
`
export const ColorShapeWrapper = styled.div`
  height: 100%;
  // width: 100% !important;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 4.5rem;
  padding: 0 !important;
`
export const ColorShape = styled.div`
  border-right: 177px solid transparent;
  border-left: 0px solid transparent;
  border-top: ${props =>
    props.color ? `438px solid` + props.color : `438px solid #672060`};
  width: ${props => (props.width ? props.width : "178px")};
  opacity: 1;
  margin-top: ${props => (props.marginTop ? props.marginTop : "-18px")};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : "0")};
  // border-right: 177px solid transparent;
  // border-left: 0px solid transparent;
  // border-top: 438px solid #672060;
  // width: 178px;
  // opacity: 1;
  // margin-top: -18px;
  // margin-left: 0;
  height: 470px;
  transform: rotate(180deg);
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
  margin-bottom: 0;
`
export const ColorRectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 21rem;
`
export const ColorRect = styled.div`
  background-color: green;
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
export const Wrapper = styled.div`
  background: url(${sessionHeaderBg});
  background-size: cover;
  background-repeat: round;
  margin-top: 10vh;
  display: flex;
  justify-content: space-between;
`

export const ContentContainer = styled.div`
  padding: 30px 0 36px 60px;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  color: white;
  @media (max-width: 1280px) {
    width: 80%;
  }
`
export const MoreInfoWrapper = styled.div`
  position: relative;
  display: ${props => (props.status ? "none" : "display")};
`
export const MoreInfo = styled.div`
  position: absolute;
  bottom: 25px;
  right: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MoreInfoText = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: white;
  font-weight: 600;
  writing-mode: vertical-rl;
  text-orientation: upright;
  margin-bottom: 0;
`

export const TitleText = styled.p`
  font-size: 62px;
  line-height: 62px;
  margin-bottom: 0;
`
export const SessionDateText = styled.p`
  font-size: 48px;
  line-height: 64px;
  margin-bottom: 10px;
`
export const IntroText = styled.p`
  font-size: 22px;
  line-height: 24px;
  margin-bottom: 10px;
`
export const HostWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 49px;

  @media (max-width: 1280px) {
    gap: 20px;
  }
`
export const HostText = styled.p`
  font-size: 32px;
  line-height: 43px;
  margin-bottom: 0px;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
`
export const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`
export const NameAndRoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const NameText = styled.p`
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 0px;
`
export const FormWrapper = styled.div`
  max-width: 750px;
  margin-top: 25px;
  display: ${props => (props.status ? "none" : "display")};
`
export const TipText = styled.p`
  font-size: 12px;
  line-height: 12px;
  margin-top: 5px;
  margin-bottom: 0px;
  width: 40%;
`
