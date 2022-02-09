import React, { useRef } from "react"

import { MainContainer } from "./index.css"
import { StudentsWork } from "../../components"
import SpecialOffersHero from "../../components/SpecialOffersHero"
import SpecialOffersScrollMenu from "../../components/SpecialOffersScrollMenu"
import SpecialOffersTable from "../../components/SpecialOfferTable"
import { specialOffersArray } from "../../contents/courseArrayForSpecialOffers"

const SpecialOffersTemplate = () => {
  const itemsRef = useRef([])

  const excuteScroll = el => {
    itemsRef.current[el].scrollIntoView({ behavior: "smooth" })
  }

  const trueIndemandArray = []

  specialOffersArray.map((item, index) =>
    item.school.map((it, idx) => it.isInDemand && trueIndemandArray.push(it))
  )

  return (
    <>
      <SpecialOffersHero />
      <MainContainer>
        <div ref={el => (itemsRef.current[999] = el)}>
          <SpecialOffersScrollMenu excuteScroll={excuteScroll} />
        </div>
        {specialOffersArray.map((item, index) => (
          <div ref={el => (itemsRef.current[index] = el)}>
            <SpecialOffersTable
              key={index}
              tableData={item.school}
              excuteScroll={excuteScroll}
            />
          </div>
        ))}
        <SpecialOffersTable
          tableData={trueIndemandArray}
          excuteScroll={excuteScroll}
        />
        <StudentsWork course="false" />
      </MainContainer>
    </>
  )
}

export default SpecialOffersTemplate
