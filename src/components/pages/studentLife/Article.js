import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Paragraph, Subtitle } from "../../../styles/Typography.css"
import { ArticleWrapper, ArticleInfoWrapper, LinkText } from "./index.css"

const Article = ({ title, author, date, image }) => {
  return (
    <Link
      to={
        "/student-life/" +
        title.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-")
      }
    >
      <ArticleWrapper>
        <GatsbyImage
          imgStyle={{
            width: "100%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
          image={getImage(image)}
          alt="test"
        />
        <ArticleInfoWrapper>
          <Subtitle>{title}</Subtitle>
          <Paragraph>
            <b>{author}</b>
          </Paragraph>
          <Paragraph>
            <b>{date}</b>
          </Paragraph>
          <Paragraph>
            There is no strife, no prejudice, no national conflict in outer
            space as yet. Its hazards are hostile to us all. Its conquest
            deserves the best of all mankind, and its opportunity for peaceful
            cooperation many nerver come again. But why, some say, the moon? Why
            choose this as our goal? And they may well ask why climb the
            hightest mountain? Why, 35 years ago, fly the Atlantic? Why does
            Rice play Texas?
          </Paragraph>
          <Link
            to={
              "/student-life/" +
              title.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-")
            }
          >
            <LinkText>View Article</LinkText>
          </Link>
        </ArticleInfoWrapper>
      </ArticleWrapper>
    </Link>
  )
}
export default Article
