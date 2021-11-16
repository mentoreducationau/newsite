import styled from "styled-components"

export const MissionContainer = styled.div`
  margin-top: 4rem;

  h2 {
    text-align: center;
  }
`
export const TutorialVideoContainer = styled.div`
  margin-top: 2rem;
  position: relative;

  .gatsby-image-wrapper {
    opacity: 0.7;
  }

  .playbutton {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`
