import styled from "styled-components"
import socialIcons from "../../../static/socialmediaicon.png"
import { Container } from "../../styles/ContainerStyles.css"

export const FooterContainer = styled.footer`
  background: #D32F2F;
  padding: 36px;
  clear: both;
  color: white;
`

export const Footer = styled(Container)`
  line-height: 20px;
  margin: auto;
  padding: 0;
  font-family: "Open Sans";

  h1,
  h2,
  h3,
  h4 {
    color: white;
  }

  h4 {
    color: white;
    font-size: 14px;
    margin: 20px 0 0;
  }

  h4,
  h2 {
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.17em;
  }

  ul,
  li {
    color: white;
    font-size: 14px;
  }

  li {
    list-style-type: none;
    margin-top: 10px;
  }

  a {
    color: white;
    text-decoration: none;

    :hover {
      text-decoration: underline white;
    }
  }

  a:visited {
    color: white;
    font-weight: 700;
  }
`
export const RowOne = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.theme.tablet`
    flex-direction: row;
    flex-wrap: wrap;
  `}
`

export const FooterColumns = styled.div`
  width: 100%;
  float: left;
  margin-bottom: 20px;

  :nth-of-type(1) {
    width: 100%;
    margin-left: 0;

    a {
      :hover {
        text-decoration: underline white;
      }
    }
  }

  h3 {
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    width: 24%;
    margin-left: 4%;

    :nth-of-type(1) {
      width: 16%;
    }
  }
`

export const FooterMenuLinks = styled.ul`
  margin: 0;
  padding: 0;

  li {
    font-weight: 700;
    :nth-of-type(1) {
      margin-top: 20px;
    }

    a {
      text-transform: uppercase;
    }
  }
`

export const FooterCourseList = styled.ul`
  margin: 5px 0 0 15px;
  padding: 0;

  li {
    position: relative;
    padding-left: 11px;
    color: white;
    font-size: 14px;

    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      width: 0;
      height: 0;
      border-top: 3px solid transparent;
      border-left: 6px solid white;
      border-bottom: 3px solid transparent;
      display: inline-block;
    }

    a {
      color: white;
      font-weight: 400;

      :hover {
        text-decoration: underline white;
      }
    }
  }
`

export const RowTwo = styled.div`
  display: block;
  font-family: Futura Medium;

  p {
    color: white;
    font-size: 16px;
    line-height: 24px;
  }

  a {
    :hover {
      text-decoration: underline white;
    }
  }
`

export const Connect = styled.div`
  width: 100%;
  float: bottom;

  h4 {
    color: white;
    font-size: 14px;
    margin: 20px 0 0;
  }

  ul {
    display: inline-block;
    margin: 0;
    padding: 0;

    li {
      list-style-type: none;
      float: left;
      margin-right: 3px;
    }
  }

  @media (min-width: 768px) {
    width: 24%;
    float: right;
  }
`

export const SocialLink = styled.a`
  border: none;
  text-decoration: none;
  display: inline-block;
  background: url(${socialIcons});
  background-repeat: no-repeat;
  background-position-x: ${props => `-${props.icon}px`};
  background-position-y: -2px;
  width: 32px;
  height: 32px;

  :hover {
    background-position-y: -37px;
  }
`

export const AboutMentor = styled.div`
  width: 100%;
  /* float: left; */

  a {
    margin-right: 15px;
  }

  @media (min-width: 768px) {
    width: 70%;
    margin-right: 5%;
  }
`
