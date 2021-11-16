import styled from "styled-components"

export const CareerInfo = styled.div`
  margin: auto;
  
  ${props => props.theme.desktop`
    padding: 0 35px 0 0;
  `}
  
  ${props => props.theme.largeScreen`
    padding: 40px;
  `}
`
export const CourseContainer = styled.div`
  margin-top: 4rem;
`