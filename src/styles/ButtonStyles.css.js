import { Link } from 'gatsby'
import styled from 'styled-components'

export const Button = styled.button`
  font-family: Futura Heavy;
  font-size: ${props => (props.fontSize ? props.fontSize : "25px")};
  line-height: ${props => (props.fontSize ? props.lineHeight : "33px")};
  background: #df2f16;
  color: white;
  border: 0;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "5px")};
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "48px")};
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ButtonPrimary = styled(Button)`

`
export const NoneDecorationLink = styled(Link)`
  text-decoration: none !important;
`
export const NoneDecorationA = styled.a`
  text-decoration: none !important;
`
export const AbsoluteNoneDecorationLink = styled(NoneDecorationLink)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`
