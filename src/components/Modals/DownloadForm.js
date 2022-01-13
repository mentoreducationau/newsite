import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { uniqueId } from "lodash"
import useForm from "../../hooks/useForm"
import { GlobalFormField } from "../../styles/FormStyles.css"

export const CustomFormStyled = styled.form`
  width: 100%;
  margin: 0;
  display: flex;
  gap: 41px;
  align-items: center;
`

export const FormField = styled(GlobalFormField)`
  width: 324px;
  padding-bottom: 0;
  margin-bottom: 29px;
  label {
    font-family: Futura Medium;
    font-size: 20px;
    line-height: 22px;
    font-weight: 800;
    color: #464343;
    margin-bottom: 10px;
  }

  input {
    border: 2px solid #707070 !important;
    height: 44px !important;
    width: 324px;
    border-radius: 0px !important;
    transition: none !important;
  }
`

export const FormButton = styled.button`
  font-family: Futura Heavy;
  font-size: 36px;
  line-height: 44.5px;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  width: 306px;
  height: 62px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleText = styled.p`
  font-size: 40px;
  line-height: 44.5px;
  font-weight: 800;
  margin-bottom: 0;
`
export const DescText = styled.p`
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 11px;
  width: 100%;
`

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

export const DownloadForm = ({ zoomWebinarId, course, handleSubmit }) => {
  const { values, onSubmit, handleChange } = useForm(() => handleSubmit(values))
  return (
    <CustomFormStyled onSubmit={onSubmit}>
      <div>
        <FormField course={course}>
          <FormFieldComponent
            label="NAME*"
            name="name"
            zoomWebinarId={zoomWebinarId}
            value={values.name || ""}
            onChange={handleChange}
          />
        </FormField>
        <FormField course={course}>
          <FormFieldComponent
            label="PHONE*"
            name="phone"
            value={values.phone || ""}
            onChange={handleChange}
          />
        </FormField>
        <FormField course={course}>
          <FormFieldComponent
            label="EMAIL*"
            name="email"
            type="email"
            value={values.email || ""}
            onChange={handleChange}
          />
        </FormField>
      </div>
      <RightWrapper>
        <TitleText>Download Now!</TitleText>
        <DescText>
          Recieve your course guide now! You will receive a FREE call with one
          of our expert course advisors shortly.
        </DescText>
        <FormButton>Download</FormButton>
      </RightWrapper>
    </CustomFormStyled>
  )
}
