import styled from 'styled-components'

// const Button = styled.button`
//   font-size: 1rem;
//   line-height: 1;
//   font-weight: 600;
//   padding: 0.5rem 1rem;
//   border-radius: 0.25rem;
//   border: 0;
//   cursor: pointer;
//   color: ${(props) => props.theme.textLight};
// `

// const ButtonPrimary = styled(Button)`
//   background-color: ${(props) => props.theme.buttonPrimary};
//   color: ${(props) => props.theme.textLight};
// `

// const ButtonGhost = styled(Button)`
//   background-color: ${(props) => props.theme.buttonGhost};
//   color: ${(props) => props.theme.textLight};
//   font-size: 1.8rem;
// `

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