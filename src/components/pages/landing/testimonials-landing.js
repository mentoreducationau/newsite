import React from "react"
import {
  Container,
  Wrapper,
  TestimonialsHeading,
  CardsWrapper,
  CardWrapper,
  Card,
  CardContent,
  Text,
  AuthorSpan,
  AuthorText,
  PosText,
  ReadMoreButtonOnDesk,
  ReadMoreButtonOnMob,
} from "./landing.css"

const TestimonialsLanding = () => {
  const cardData = [
    {
      text:
        ".. Mentor’s assistance with helping me with both Diploma of Financial Planning and the Advanced Diploma of Financial Planning has been fantastic. I really appreciate their guidance and assistance with helping me obtain my qualifications. Your prompt email responses to my queries are also greatly appreciated.",
      author: "Linda Pfitzner",
      pos1: "Client Service Manager",
      pos2: "Leading Australia Bank Financial Planning",
    },
    {
      text:
        ".. Mentor’s assistance with helping me with both Diploma of Financial Planning and the Advanced Diploma of Financial Planning has been fantastic. I really appreciate their guidance and assistance with helping me obtain my qualifications. Your prompt email responses to my queries are also greatly appreciated.",
      author: "Linda Pfitzner",
      pos1: "Client Service Manager",
      pos2: "Leading Australia Bank Financial Planning",
    },
    {
      text:
        ".. Mentor’s assistance with helping me with both Diploma of Financial Planning and the Advanced Diploma of Financial Planning has been fantastic. I really appreciate their guidance and assistance with helping me obtain my qualifications. Your prompt email responses to my queries are also greatly appreciated.",
      author: "Linda Pfitzner",
      pos1: "Client Service Manager",
      pos2: "Leading Australia Bank Financial Planning",
    },
  ]
  return (
    <Container>
      <Wrapper>
        <TestimonialsHeading>
          Glowing reviews, trusted by over 20,000 students since 2003
        </TestimonialsHeading>
      </Wrapper>

      <CardsWrapper>
        {cardData.map((item, index) => (
          <CardWrapper key={index}>
            <div>
              <Card>
                <CardContent>
                  <Text>{item.text}</Text>
                  <AuthorSpan>
                    <AuthorText>{item.author}</AuthorText>
                    <PosText>
                      {item.pos1} <br />
                      {item.pos2}
                    </PosText>
                  </AuthorSpan>
                </CardContent>
              </Card>
            </div>
          </CardWrapper>
        ))}
      </CardsWrapper>
      <Wrapper>
        <ReadMoreButtonOnDesk>Read More Reviews</ReadMoreButtonOnDesk>
        <ReadMoreButtonOnMob>Read More Reviews</ReadMoreButtonOnMob>
      </Wrapper>
    </Container>
  )
}

export default TestimonialsLanding
