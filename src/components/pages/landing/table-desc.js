import React from "react"
import {
  AboutCardWrapper,
  CardsWrapper,
  PrinciplesWrapper,
  TableDescCard,
  // TableDescCardButton,
  TableDescCardButtonWrapper,
  TableDescCardImage,
  TableDescCardText,
  TableDescCardTitle,
} from "../about/index.css"
import { TableDescContainer, Image } from "./landing.css"
import tableDescImg1 from "./images/tableDescrImg1.jpg"
import tableDescImg2 from "./images/tableDescrImg2.jpg"
import tableDescImg3 from "./images/tableDescrImg3.jpg"

const TableDesc = () => {
  const cardData = [
    {
      title: "ONLINE LEARNING",
      image: tableDescImg1,
      text:
        "Self-paced online learning provides you flexibility to study online and get qualification (anywhere, anytime), access to our experienced student support team between Monday to Friday, 9am – 5pm by telephone and email to receive support and feedback as you learn in real time.",
    },
    {
      title: "VIRTUAL CLASSROOMS",
      image: tableDescImg2,
      text:
        "Classroom learning (Virtual and In-Class) aprovide the complete learning experience. Conducted either face to face or via video conference and facilitated by industry professionals skilled at making the class experience interactive, incorporating real life examples of today’s market place.",
    },
    {
      title: "CORPORATE TRAINING",
      image: tableDescImg3,
      text:
        "We can customise delivery of our series of courses to suit your corporate requirements. Training solutions can be delivered on your premises by our facilitators or under a content licensing arrangement. Course Branding options available. Please contact us for more information.",
    },
  ]
  return (
    <TableDescContainer>
      <PrinciplesWrapper>
        <div>
          <h1>
            Get started with our finance, accounting and business qualifications
            tailored for you
          </h1>
        </div>
        <div>
          <p>
            Being a quality educator, we recognise that you have other
            commitments. To help you access the right resources and expertise to
            balance work/life/study and achieve your professional goals, we have
            designed a range of flexible study options.
          </p>
        </div>
      </PrinciplesWrapper>
      <CardsWrapper>
        {cardData.map((item, index) => (
          <AboutCardWrapper key={index}>
            <TableDescCard>
              <TableDescCardImage>
                <Image src={item.image} alt="table-desc-img" />
              </TableDescCardImage>
              <TableDescCardTitle>{item.title}</TableDescCardTitle>
              <TableDescCardText>
                <p>{item.text}</p>
              </TableDescCardText>
              <TableDescCardButtonWrapper>
                {/* <TableDescCardButton>Find out how</TableDescCardButton> */}
              </TableDescCardButtonWrapper>
            </TableDescCard>
          </AboutCardWrapper>
        ))}
      </CardsWrapper>
    </TableDescContainer>
  )
}

export default TableDesc
