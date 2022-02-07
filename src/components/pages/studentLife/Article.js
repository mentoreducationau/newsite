import React from "react"
import { getImage } from "gatsby-plugin-image"
import { Paragraph, Subtitle } from "../../../styles/Typography.css"
import { ArticleWrapper, ArticleInfoWrapper, LinkText, ArticleImage } from "./index.css"
import { NoneDecorationLink } from "../../../styles/ButtonStyles.css"

const Article = ({ title, author, date, image }) => {
  return (
    <NoneDecorationLink
      to={
        "/student-life/" +
        title.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-")
      }
    >
      <ArticleWrapper>
        <ArticleImage
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
          <NoneDecorationLink
            to={
              "/student-life/" +
              title.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-")
            }
          >
            <LinkText>View Article</LinkText>
          </NoneDecorationLink>
        </ArticleInfoWrapper>
      </ArticleWrapper>
    </NoneDecorationLink>
  )
}
export default Article
