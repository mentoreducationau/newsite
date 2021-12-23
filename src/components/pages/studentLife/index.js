import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  TitleBanner,
  MainContainer,
  CardsWrapper,
  IntroWrapper,
  SubHeadingText,
} from "./index.css"
import { Headline, Paragraph } from "../../../styles/Typography.css"
import Article from "./Article"

const StudentLife = () => {
  const articles = useStaticQuery(graphql`
    query studentLifeArticlesQuery {
      allContentfulStudentLifeArticles {
        nodes {
          author
          date(formatString: "YYYY-MM-DD HH:mm:ss")
          title
          articleBody {
            raw
          }
          image {
            gatsbyImageData
          }
        }
      }
    }
  `)
  return (
    <>
      <TitleBanner />
      <MainContainer>
        <IntroWrapper>
          <Headline banner>Student Life</Headline>
          <SubHeadingText>
            Keeping you current and informed for your studies
          </SubHeadingText>
          <Paragraph>
            There is no strife, no prejudice, no national conflict in outer
            space as yet. Its hazards are hostile to us all. Its conquest
            deserves the best of all mankind, and its opportunity for peaceful
            cooperation many nerver come again. But why, some say, the moon? Why
            choose this as our goal? And they may well ask why climb the
            hightest mountain? Why, 35 years ago, fly the Atlantic? Why does
            Rice play Texas? There is no strife, no prejudice, no national
            conflict in outer space as yet. Its hazards are hostile to us all.
          </Paragraph>
        </IntroWrapper>
        <CardsWrapper>
          {articles.allContentfulStudentLifeArticles.nodes.map(
            (item, index) => (
              <Article
                key={index}
                title={item.title}
                author={item.author}
                date={item.date}
                image={item.image}
              />
            )
          )}
        </CardsWrapper>
      </MainContainer>
    </>
  )
}

export default StudentLife
