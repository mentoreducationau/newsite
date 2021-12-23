import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/Seo/Seo"
import {
  TitleBanner,
  MainContainer,
  IntroWrapper,
  SubHeadingText,
  BackToArticlesText,
  Arrow,
  BackArrowWrapper,
} from "./index.css"
import { Headline } from "../../styles/Typography.css"
import ArticleRenderer from "../../rich-text-renderers/ArticleRenderer"

const StudentLifeTemplate = ({ pageContext, location }) => {
  const articleData = pageContext.articleData
  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel="Student Life"
    >
      <Seo title="Student Life" />
      <TitleBanner />
      <MainContainer>
        <IntroWrapper>
          <Headline banner style={{ textAlign: "left" }}>
            {articleData.title}
          </Headline>
          <SubHeadingText>
            {articleData.author + " - " + articleData.date}
          </SubHeadingText>
          <BackArrowWrapper onClick={() => window.history.back()}>
            <Arrow />
            <BackToArticlesText>Back to articles</BackToArticlesText>
          </BackArrowWrapper>
          <ArticleRenderer node={articleData.articleBody} />
        </IntroWrapper>
      </MainContainer>
    </Layout>
  )
}

export default StudentLifeTemplate
