import React from "react"
import {
  CourseCardWrapper,
  CardButton,
  CourseNameText,
  ButtonWrapper,
} from "./schools.css"
import { NoneDecorationLink } from "../../../styles/ButtonStyles.css"

const FacultyCard = ({ faculty }) => {
  return (
    <CourseCardWrapper>
      <NoneDecorationLink
        to={
          "/schools/" +
          faculty.heading
            .toLowerCase()
            .replaceAll(" & ", "-")
            .replaceAll(" ", "-") +
          "/"
        }
        style={{color: "black"}}
      >
        <div
          style={{
            width: "100%",
            height: "197px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            marginBottom: "13px",
            backgroundColor: "gray",
          }}
        ></div>
        <CourseNameText>{faculty.heading}</CourseNameText>
        <ButtonWrapper>
          <NoneDecorationLink
            to={
              "/schools/" +
              faculty.heading
                .toLowerCase()
                .replaceAll(" & ", "-")
                .replaceAll(" ", "-") +
              "/"
            }
          >
            <CardButton fontSize="21px" lineHeight="28px">
              View Faculty
            </CardButton>
          </NoneDecorationLink>
        </ButtonWrapper>
      </NoneDecorationLink>
    </CourseCardWrapper>
  )
}

export default FacultyCard
