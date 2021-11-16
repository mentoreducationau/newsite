import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { H3, Paragraph, ParagraphMedium } from "../../styles/Typography.css"
import { ReviewContainer, Review } from "./index.css"

const reviews = [
  {
    title: "Always so helpful and fast to respond to queries.",
    text:
      "I always had a plan to continue my studies but was looking for self-paced online study where I could balance my study and other responsibilities. After lots of research I found Mentor Education was a suitable provider for me. When I started the course it was difficult for me to understand the assessment questions provided and was worried will I be able to complete the course? I was wrong. Course Trainers were polite, excellent and very helpful tutor throughout the course. Both the trainers helped me in acheiving my goals. Absolutely amazing and great support.",
    name: "Zohra",
  },
  {
    title: "I have just completed the Cert IV in Accounting and Bookkeeping",
    text:
      "I have just completed the Cert IV in Accounting and Bookkeeping and found it easy to follow. The tutor was helpful throughout the course and highly recommend Mentor for any further studies.",
    name: "Ana",
  },
  {
    title: "Well structured course and assessment",
    text:
      "Well structured course and assessment. The assessor/trainer was prompt on responding to queries and giving feedback. Moreover, was always supportive to assisting me in completing my course.",
    name: "Varun",
  },
]

const Reviews = () => {
  return (
    <ReviewContainer>
      <H3 course>What our students are saying</H3>
      {reviews.map((item, index) => (
        <Review key={index}>
          <ParagraphMedium course>
            <strong>{item.title}</strong>
          </ParagraphMedium>
          <Paragraph style={{ marginBottom: 0, fontSize: 22 }}>
            {item.text}
          </Paragraph>
          <Paragraph style={{ marginTop: 0 }}>-{item.name}</Paragraph>
          <StaticImage
            src="../../images/review.jpg"
            alt="stars"
          />
        </Review>
      ))}
    </ReviewContainer>
  )
}

export default Reviews
