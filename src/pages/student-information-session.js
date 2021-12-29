import React, { useState } from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import { ModalProvider, BaseModalBackground } from "styled-react-modal"
import SessionCard from "../components/pages/studentInformationSession/SessionCard"
import SignUpModal from "../components/pages/studentInformationSession/SignUpModal"

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  align-items: start;
  transition: all 0.3s ease-in-out;
`
const IntroWrapper = styled.div`
  width: 100%;
  margin-top: 46px;
  margin-bottom: 76px;
`

const PageTitle = styled.p`
  font-size: 62px;
  line-height: 83px;
  margin-bottom: 21px;
  text-align: center;
`

const IntroText = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 0;
`
const StudentInformationSessionPage = ({ pageContext, location, data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [selectedZoomWebinarId, setSelectedZoomWebinarId] = useState(0)
  const [signedUp, setSignedUp] = useState(false)

  const toggleModal = (id, cardSignedUp) => {
    setOpacity(0)
    setSelectedZoomWebinarId(id)
    setSignedUp(cardSignedUp)
    setIsOpen(!isOpen)
  }

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1)
    }, 100)
  }

  const beforeClose = () => {
    return new Promise(resolve => {
      setOpacity(0)
      setTimeout(resolve, 300)
    })
  }
  console.log(data)
  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel="Student Information Session"
      pageName="Student Information Session"
    >
      <Seo title="Student Information Session" />
      <ModalProvider backgroundComponent={FadingBackground}>
        <div
          style={{
            width: "90%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IntroWrapper>
            <PageTitle>Student Inforamtion Sessions</PageTitle>
            <IntroText>
              i’m baby hoodie air plant squid hashtag. street art hexagon pok
              pok, man bun try-hard knausgaard marfa. brunch photo booth
              pour-over, art party tumeric yuccie chambray. offal quinoa kitsch
              woke single-origin coffee chia bitters hella narwhal put a bird on
              it beard cold-pressed tousled poutine. yuccie seitan mixtape
              paleo. narwhal mlkshk cornhole seitan. readymade cornhole
              cold-pressed vaporware, pitchfork shaman vhs direct trade mustache
              snackwave viral messenger bag. paleo butcher chia master cleanse
              fashion axe. bicycle rights plaid air plant, 8-bit cred keffiyeh
              church-key literally austin taxidermy actually. meditation
              brooklyn lyft lumbersexual, post-ironic vegan put a bird on it
              pickled squid adaptogen you probably haven’t heard of them bitters
              portland enamel pin. kitsch mixtape umami pitchfork cold-pressed
              air plant vaporware tacos. irony vape af glossier etsy tilde 90’s
              four loko green juice mlkshk artisan cliche 8-bit quinoa.
            </IntroText>
          </IntroWrapper>

          {data.allContentfulStudentInformationSession.nodes.map(item => (
            <SessionCard
              image={item.coverImage}
              sessionDate={item.sessionDate}
              course={item.course}
              hosts={item.hosts}
              zoomWebinarId={item.zoomWebinarId}
              toggleModal={toggleModal}
            />
          ))}
        </div>
        <SignUpModal
          isOpen={isOpen}
          opacity={opacity}
          toggleModal={toggleModal}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          zoomWebinarId={selectedZoomWebinarId}
          signedUp={signedUp}
        />
      </ModalProvider>
    </Layout>
  )
}

export default StudentInformationSessionPage

export const sisData = graphql`
  query StudentInformationSessionQuery {
    allContentfulStudentInformationSession {
      nodes {
        id
        coverImage {
          gatsbyImageData(aspectRatio: 1.8, layout: FULL_WIDTH)
        }
        sessionDate
        course {
          courseCode
          courseName
          studyLevel
        }
        hosts {
          name
          portrait {
            gatsbyImageData(aspectRatio: 1)
          }
        }
        zoomWebinarId
      }
    }
  }
`
