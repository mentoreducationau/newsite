import React, { useRef } from "react"

import { TitleBanner, MainContainer } from "./index.css"

import { Headline } from "../../styles/Typography.css"
import { StudentsWork } from "../../components"
import { Container } from "../../styles/ContainerStyles.css"
import SpecialOffersGrid from "../../components/SpecialOffersGrid"
import SpecialOffersHero from "../../components/SpecialOffersHero"
import SpecialOffersScrollMenu from "../../components/SpecialOffersScrollMenu"
import SpecialOffersTable from "../../components/SpecialOfferTable"
import { specialOffersArray } from "../../contents/courseArrayForSpecialOffers"

const SpecialOffersTemplate = () => {
  const itemsRef = useRef([])

  const excuteScroll = el => {
    // const pos = itemsRef.current[el].getBoundingClientRect().top
    // window.scrollTo({ top: pos, behavior: "smooth" })
    itemsRef.current[el].scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
      <SpecialOffersHero />
      <MainContainer>
        <SpecialOffersScrollMenu excuteScroll={excuteScroll} />
        {specialOffersArray.map((item, index) => (
          <div ref={el => (itemsRef.current[index] = el)}>
            <SpecialOffersTable key={index} tableData={item.school} />
          </div>
        ))}
        <StudentsWork course="false" />
      </MainContainer>
    </>
  )
}

export default SpecialOffersTemplate
