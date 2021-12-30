import React from "react"
import { VerticalFormTemplate } from "../FormFieldComponent"
import { RegisterContainer } from "./register.css"
import { H3 } from "../../../styles/Typography.css"

const Registar = () => {

  //  Todo: add oAuth 2.0 access token
  const handleSubmit = async values => {
    console.log(values)
    const { email, name, phone } = values

    try {
      const response = await fetch("https://us02web.zoom.us/webinar/84567950781", {
        method: "POST",
        headers: {
          Authorization: `Bearer <ACCESS_TOKEN>`,
        },
        body: {
          email: email,
          first_name: name,
          phone: phone,
        },
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <RegisterContainer>
      <H3>Register now</H3>
      {/* <h3>Fill out your details to register now!</h3> */}
      <VerticalFormTemplate buttonText="Register" handleSubmit={handleSubmit} />
    </RegisterContainer>
  )
}

export default Registar
