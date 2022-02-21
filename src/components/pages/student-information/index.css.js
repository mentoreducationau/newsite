import styled from "styled-components"
import { Link } from "gatsby"
import gridBg from "../../../images/form-grid-bg.png"

export const LeftMenuWrapper = styled.div`
  position: sticky;
  top: 10vh;
  //   width: 351px;
  padding: 0 32px;
`
export const RightSideWrapper = styled.div`
  display: ${props => (props.activeState ? "block" : "none")};
  width: 75%;
  @media (max-width: 1280px) {
    width: 65%;
  }
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
    cursor: pointer;
  }
`
export const MenuText = styled.p`
  font-size: 20px;
  line-height: 20px;
  color: black;
  text-decoration: ${props => (props.activeStatus ? "underline" : "none")};
  font-weight: ${props => (props.activeStatus ? "bolder" : "400")};
  text-underline-offset: 2px;
  margin-bottom: 0;

  :hover {
    font-weight: bolder;
    cursor: pointer;
  }
`
export const Heading = styled.p`
  font-size: 28px;
  line-height: 37px;
  color: black;
  font-weight: bold;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "35px")};
  text-align: ${props => (props.tAlign ? props.tAlign : "center")};
`
export const IntroText = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: black;
  font-weight: 500;
  margin-bottom: 34px;
  text-align: left;
`
export const FormsGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const FormGrid = styled.div`
  width: 33%;
  background: ${props => (props.bg === 0 ? `url(` + gridBg + `)` : "#DF2F16")};
  height: 0;
  padding-top: 33%;
  position: relative;
  transition: all 0.3s ease;

  :hover {
    cursor: pointer;
    background: white;

    p {
      color: #df2f16;
    }
  }
`
export const GridTitle = styled.p`
  font-size: 22px;
  line-height: 27.5px;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
  color: ${props => (props.bg === 0 ? "#DF2F16" : "white")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const FormTable = styled.table`
  border: solid 2px #df2f16;
  margin-bottom: 45px;
  border-collapse: collapse;
  font-size: 12px;
  line-height: 17px;
  font-weight: bold;
  tr {
    border: solid 1px #df2f16;
    td {
      border: solid 1px #df2f16;
      padding: 12px;
    }
  }
`
export const ReturnText = styled.p`
  font-size: 15px;
  line-height: 23px;
  font-weight: bold;
  color: gray;
  margin-bottom: 24px;

  :hover {
    cursor: pointer;
  }
`
export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  display: ${props => (props.hiddenTable ? "none" : "block")};
`
export const GridWrapper = styled.div`
  display: ${props => (props.showGrid ? "block" : "none")};
  flex-direction: column;
`
export const StatementText = styled.p`
  font-size: 22px;
  line-height: 27.5px;
  font-weight: bold;
  color: black;
  margin-left: 36px;
  margin-bottom: 31px;
`
