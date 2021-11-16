import styled from 'styled-components'

export const CompanyLogosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  ${props => props.theme.tablet`
    justify-content: center;
  `}

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    flex: auto;
    flex-basis: 50%;
    max-width: 50%;

    .gatsby-image-wrapper {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    a {
      /* flex: 1 0 12%; */
      flex-basis: 12%;
      padding: 0 1rem;
      margin: 0 1rem;
      max-width: 20%;
    }
  }
`
export const CourseContainer = styled.div`
  margin-top: 4rem;
  h2 {
    text-align: center;
  }
`