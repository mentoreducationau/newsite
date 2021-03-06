import React, { useState } from "react"
import PropTypes from "prop-types"
import { uniqueId } from "lodash"
import useForm from "../../hooks/useForm"
import {
  CustomFormStyled,
  FormField,
  FormButton,
  MobileFormField,
  NameAndSurNameWrapper,
  DownloadButtonWrapper,
} from "./formComponent.css"
import { Button } from "../../styles/ButtonStyles.css"

export const FormFieldComponent = ({
  children,
  label,
  name,
  type,
  onChange,
  value,
  error,
  required,
}) => {
  const [id] = useState(() => uniqueId(`${name}-`))
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

export const VerticalFormTemplate = ({ course, buttonText, handleSubmit }) => {
  const { values, onSubmit, handleChange } = useForm(() => handleSubmit(values))
  return (
    <CustomFormStyled onSubmit={onSubmit}>
      <NameAndSurNameWrapper>
        <FormField course={course}>
          <FormFieldComponent
            label="Name*"
            name="name"
            value={values.name || ""}
            onChange={handleChange}
          />
        </FormField>
        <FormField course={course}>
          <FormFieldComponent
            label="Surname*"
            name="surname"
            value={values.surname || ""}
            onChange={handleChange}
          />
        </FormField>
      </NameAndSurNameWrapper>
      <FormField course={course}>
        <FormFieldComponent
          label="Phone Number"
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
      <FormButton course={course}>{buttonText}</FormButton>
    </CustomFormStyled>
  )
}

export const MobileFormTemplate = ({ course, buttonText, handleSubmit }) => {
  const { values, onSubmit, handleChange } = useForm(() => handleSubmit(values))
  return (
    <CustomFormStyled onSubmit={onSubmit}>
      <NameAndSurNameWrapper>
        <MobileFormField course={course}>
          <FormFieldComponent
            label="Name*"
            name="name"
            value={values.name || ""}
            onChange={handleChange}
          />
        </MobileFormField>
        <MobileFormField course={course}>
          <FormFieldComponent
            label="SurName*"
            name="surname"
            value={values.surname || ""}
            onChange={handleChange}
          />
        </MobileFormField>
      </NameAndSurNameWrapper>

      <MobileFormField course={course}>
        <FormFieldComponent
          label="Phone"
          name="phone"
          value={values.phone || ""}
          onChange={handleChange}
        />
      </MobileFormField>
      <MobileFormField course={course}>
        <FormFieldComponent
          label="Email*"
          name="email"
          type="email"
          value={values.email || ""}
          onChange={handleChange}
        />
      </MobileFormField>
      <DownloadButtonWrapper>
        <Button
          width="105px"
          height="31px"
          fontSize="18px"
          lineHeight="24px"
          borderRadius="3px"
          textTransform="none"
        >
          Download
        </Button>
      </DownloadButtonWrapper>
    </CustomFormStyled>
  )
}
