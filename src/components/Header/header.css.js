import styled from "styled-components"
import { Link } from "gatsby"

export const NavWrapper = styled.nav`
  width: 100%;
  height: 10vh;
  padding: 0 3rem;
  background: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: none;
`

export const LogoWrapepr = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  color: red;
`

export const LinksWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2c2d2f;
  height: 50%;
  font-family: futura;
  font-size: 0.75rem;
  line-height: 0;
  margin: 0;
  padding: 0 1rem;

  :hover {
    border-bottom: 2px solid grey;
  }
`

export const SignInButton = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  border: 1px solid red;
  color: red;
  box-shadow: none;
`
