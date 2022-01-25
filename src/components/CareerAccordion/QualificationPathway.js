import React, { useEffect, useState } from "react"

// import { Swiper, SwiperSlide } from "swiper/react"
// import SwiperCore, { Navigation } from "swiper/core"

import { courses } from "../BusinessSkillSet/courses"

// import CourseCard from "./CourseCard"

import { CardsHeaderWrapper, TitleWrapper, CardsHeader } from "./index.css"
// import "../../../node_modules/swiper/swiper-bundle.min.css"

// SwiperCore.use([Navigation])

const QualificationPathway = () => {
  const types = [
    { type: "certIII", label: "Certificate III" },
    { type: "certIV", label: "Certificate IV" },
    { type: "diploma", label: "Diploma" },
    { type: "advancedDiploma", label: "Advanced Diploma" },
  ]
  const [selected, setSelected] = useState("certIII")
  const [courseList, setCourseList] = useState([])

  useEffect(() => {
    const list = courses.filter(item => item.type === selected)
    setCourseList(list)
  }, [selected])

  return (
    <>
      <CardsHeaderWrapper>
        <TitleWrapper>
          {types.map((item, index) => (
            <CardsHeader
              key={index}
              isActive={selected === item.type}
              onClick={() => setSelected(item.type)}
              course={true}
            >
              {item.label}
            </CardsHeader>
          ))}
        </TitleWrapper>
      </CardsHeaderWrapper>

      {/* <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          448: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          990: {
            slidesPerView: 3,
          },
        }}
      >
        {courseList.length &&
          courseList.map((item, index) => (
            <SwiperSlide key={index}>
              <CourseCard course={item} />
            </SwiperSlide>
          ))}
      </Swiper> */}
    </>
  )
}

export default QualificationPathway
