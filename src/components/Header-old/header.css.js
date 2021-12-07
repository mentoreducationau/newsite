import styled from "styled-components"

export const StyledHeader = styled.header`
  width: 100%;
  height: 7rem;
`

export const TitleContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Open Sans", Arial;
  font-weight: 400;
  font-size: 5px;
  color: #999;
  padding: 0 1rem;
  line-height: 20px;
  font-size: 13px;
`

export const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  span {
    display: none;
  }

  @media (min-width: 768px) {
    span {
      display: flex;
      height: 50%;
      max-height: 50px;
      width: 1px;
      background: #999;
      opacity: 0.3;
      margin: 0 1rem;
    }
  }
`

export const BlurbLeft = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    margin: 0;
    max-width: 14rem;
  }
`

export const BlurbRight = styled.div`
  display: none;
  @media (min-width: 768px) {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    span:nth-of-type(2) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 2px;
  
      a {
        text-decoration: none;
        font-weight: bold;
        color: #0071ba;
        font-size: 19px;
      }
  
      .gatsby-image-wrapper {
        margin-right: 0.3rem;
      }
    }
  }
`

export const MobileContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-around;

  div {
    display: inherit;
    align-items: inherit;
    height: inherit;
    margin: 0 10vw;

    img {
      margin: 0 7.25px;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileMenu = styled.span`
  width: 16vw;
  max-width: 60px;
  height: 3px;
  background: #707070;
  position: relative;

  ::before, ::after {
    content: "";
    position: absolute;
    background: inherit;
    width: inherit;
    max-width: 60px;
    height: inherit;
    left: 0;
  }

  ::before {
    top: -14px;
  }
  ::after {
    bottom: -14px;
  }
`
