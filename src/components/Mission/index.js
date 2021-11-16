import React from "react"
import { Title, Paragraph } from "../../styles/Typography.css"
import { StaticImage } from "gatsby-plugin-image"
import { MissionContainer, TutorialVideoContainer } from "./index.css"
import playbutton from "../../images/svg/playbutton.svg"

const Mission = () => {
  return (
    <MissionContainer>
      <Title course>Our mission is to get you to where you want to me</Title>
      <Paragraph style={{ padding: "2rem" }}>
        Mentor offers extra support and guidance through our experienced,
        qualified Student Support Team. Phasellus sagittis libero vitae
        venenatis imperdiet. Sed accumsan nisi mi, non pellentesque felis
        iaculis non. Aliquam pretium efficitur rhoncus. Maecenas vitae massa
        diam. Find out more from our founder <span style={{ color: "#CC4A28" }}>Mark Sinclair</span>.
      </Paragraph>
      <TutorialVideoContainer>
        <StaticImage
          src="../../images/mission.png"
          alt="mission"
          layout="fullWidth"
        />
        <img className="playbutton" src={playbutton} alt="play" />
      </TutorialVideoContainer>
    </MissionContainer>
  )
}

export default Mission
