import React from "react"
import useForm from "../../../hooks/useForm"

import {
  SubscribeFormStyled,
  SubscribeFormField,
  SubscribeButton,
  RequiredIndicatorText,
  RequiredIndicator,
} from "./SubscribeForm.css"

import { FormFieldComponent } from "../FormFieldComponent"

const SubscribeForm = () => {
  
  // Todo: add mailchimp endpoint in gatsby-config
  const handleSubmit = async () => {
  }

  const { values, handleChange } = useForm(handleSubmit)

  return (
    <>
      <div>
        <SubscribeFormStyled onSubmit={handleSubmit}>
          <div style={{ display: "block" }}>
            <SubscribeFormField>
              <FormFieldComponent
                label="Email Address"
                name="email"
                type="email"
                required={true}
                value={values.email || ""}
                onChange={handleChange}
              >
                <RequiredIndicator>*</RequiredIndicator>
              </FormFieldComponent>
            </SubscribeFormField>
            <SubscribeFormField>
              <FormFieldComponent
                label="First Name"
                name="firstname"
                value={values.firstname || ""}
                onChange={handleChange}
              />
            </SubscribeFormField>
            <SubscribeFormField>
              <FormFieldComponent
                label="Last Name"
                name="lastname"
                value={values.lastname || ""}
                onChange={handleChange}
              />
            </SubscribeFormField>
            <SubscribeButton value="Subscribe" type="submit" name="subscribe" />
          </div>
        </SubscribeFormStyled>
      </div>
      <RequiredIndicatorText>
        <RequiredIndicator>*</RequiredIndicator>
        indicates required
      </RequiredIndicatorText>
    </>
  )
}

export default SubscribeForm