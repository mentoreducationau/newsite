import React, { useState } from "react"
import PropTypes from "prop-types"
import { uniqueId } from "lodash"
import useForm from "../../../hooks/useForm"
import {
  CustomFormStyled,
  FormField,
  FormButton,
  RightWrapper,
  SignUpTitleText,
  DescText,
} from "./sis.css"

export const FormFieldComponent = ({
  children,
  label,
  name,
  zoomWebinarId,
  type,
  onChange,
  value,
  error,
  required,
}) => {
  const [id] = useState(() => uniqueId(`${zoomWebinarId}-`))
  return (
    <>
      <label htmlFor={id}>
        {label} {children}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        aria-required={required}
        style={error && { border: "solid 1px red" }}
      />
      {error && <p style={{ color: "red", fontSize: "8px" }}>{error}</p>}
    </>
  )
}

FormFieldComponent.defaultProps = {
  type: "text",
  required: false,
}

FormFieldComponent.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "number", "password"]),
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
}

export const SignUpForm = ({ zoomWebinarId, course, handleSubmit }) => {
  const { values, onSubmit, handleChange } = useForm(() => handleSubmit(values))
  return (
    <CustomFormStyled onSubmit={onSubmit}>
      <div>
        <FormField course={course}>
          <FormFieldComponent
            label="Name*"
            name="name"
            zoomWebinarId={zoomWebinarId}
            value={values.name || ""}
            onChange={handleChange}
          />
        </FormField>
        <FormField course={course}>
          <FormFieldComponent
            label="Phone"
            name="phone"
            value={values.phone || ""}
            onChange={handleChange}
          />
        </FormField>
        <FormField course={course}>
          <FormFieldComponent
            label="Email*"
            name="email"
            type="email"
            value={values.email || ""}
            onChange={handleChange}
          />
        </FormField>
      </div>
      <RightWrapper>
        <SignUpTitleText>Sign np now!</SignUpTitleText>
        <DescText>
          include your phone number to receive a free call with one of our
          course advisors.
        </DescText>
        <FormButton>Sign Up</FormButton>
      </RightWrapper>
    </CustomFormStyled>
  )
}
