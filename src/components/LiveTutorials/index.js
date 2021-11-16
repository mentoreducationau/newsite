import React from "react"
import { Title, Paragraph } from "../../styles/Typography.css"
import { StaticImage } from "gatsby-plugin-image"
import { TutorialsContainer, TutorialVideoContainer } from "./index.css"
import playbutton from "../../images/svg/playbutton.svg"
const LiveTutorials = () => {
  return (
    <TutorialsContainer>
      <Title>Live Tutorials</Title>
      <Paragraph>
        Take advantage of live tutorials to get more out of your course
      </Paragraph>
      <Paragraph>
        Mentor offers extra support and guidance through our experienced,
        qualified Student Support Team. Phasellus sagittis libero vitae
        venenatis imperdiet. Sed accumsan nisi mi, non pellentesque felis
        iaculis non. Aliquam pretium efficitur rhoncus. Maecenas vitae massa
        diam. Watch the video below for more information
      </Paragraph>
      <TutorialVideoContainer>
        <StaticImage
          src="../../images/tutorial.png"
          alt="tutorial"
          layout="fullWidth"
        />
        <img className="playbutton" src={playbutton} alt="play" />
      </TutorialVideoContainer>
    </TutorialsContainer>
  )
}

export default LiveTutorials
