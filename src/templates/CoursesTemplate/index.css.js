import styled from "styled-components"
import { Container } from "../../styles/ContainerStyles.css"

export const MainContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

export const StickySideBar = styled.div`
  width: 22.5%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100vh; // experiment with this value, try changing to 110vh
  margin-top: ${props =>
    props.screenHeight ? "-" + props.screenHeight + "px" : "-4.5rem"};
  padding-top: ${props =>
    props.screenHeight ? props.screenHeight + "px" : "4.5rem"};
`
export const CourseContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  ul > li {
    list-style-type: square;
  }
`
export const MobileStickyBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  background-color: white;
  width: 100%;
  z-index: 2;
  transition: height .3s ease;
`
export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 76px;
  padding: 15px 17px;
`
export const CloseIconImg = styled.img`
  position: absolute;
  z-index: 3;
  display: ${props => (props.show ? "block" : "none")};
  top: 16px;
  right: 20px;
  width: 11px;
  height: 11px;
`
export const MobileFormWrapper = styled.div`
  position: relative;
  padding: 18px 26px 0;
  display: ${props => (props.show ? "block" : "none")};
`
export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
export const PriceText = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  color: ${props=> props.color ? props.color : "gray"};
  margin-bottom: 0;
`