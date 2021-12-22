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
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;

  @media(max-width: 1100px) {
    white-space: unset;
    line-height: 34px;
  }
`

export const LinksWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
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

  :hover {
    border-bottom: 2px solid grey;
  }

  @media(max-width: 1400px) {
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
