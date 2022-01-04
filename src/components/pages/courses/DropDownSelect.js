import React from "react"
import { DropDownWrapper } from "./courses.css"
import Select from "react-select"
import { components } from "react-select"

const DropDownSelect = ({ options, error, excuteScroll }) => {

  const handleChange = (e) => {
      excuteScroll(e.value)
  }

  const customStyles = {
    container: (provided, state) => ({
      ...provided,
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: "0px",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
    }),
    IndicatorsContainer: (provided, state) => ({ ...provided }),
    indicatorSeparator: (provided, state) => ({ ...provided, display: "none" }),
    menu: (provided, state) => ({
      ...provided,
      marginTop: "-1px",
      borderTop: "none",
      marginBottom: "0",
      borderBottom: "0",
      border: "1px #000000 solid",
      outline: "1px solid",
      borderRadius: "0px",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "#adb4d2",
      fontSize: "1.25rem",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "1.25rem",
    }),
  }

  return (
    <DropDownWrapper>
      <Select
        options={options}
        styles={customStyles}
        placeholder="Please select an option"
        menuColor="red"
        menuPlacement="bottom"
        isMulti={false}
        components={{
          Menu: props => <components.Menu {...props} />,
        }}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "lightgrey",
            primary: "grey",
            primary50: "lightgrey",
          },
        })}
        onChange={(e) => handleChange(e)}
      />
    </DropDownWrapper>
  )
}

export default DropDownSelect
