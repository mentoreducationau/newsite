import React from "react"
import { useState, useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components"
import Focus from "./Focus"

const Dropdown = ({ options, setSearchText, excuteScroll }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [inputText, setInputText] = useState("")
  const [showFocus, setShowFocus] = useState(true)
  const ref = useRef(null)
  const inputRef = useRef(null)

  const toggling = () => {
    setIsOpen(!isOpen)
  }

  const onOptionClicked = option => () => {
    excuteScroll(option.value)
    setIsOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])

  const onChangeHandler = v => {
    setSearchText(v)
    setInputText(v)
  }

  const handleFocus = () => {
    setShowFocus(true)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowFocus(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [inputRef])

  return (
    <DropDownContainer ref={ref}>
      <DropDownHeader>
        <InputWrapper>
          <DisplayWrapper showFocus={showFocus}>
            <DisplaySpan>{inputText}</DisplaySpan>
            <Focus />
          </DisplayWrapper>
          <SearchInput
            onChange={e => onChangeHandler(e.target.value)}
            onFocus={handleFocus}
            placeholder="Start typing or click to open menu"
            ref={inputRef}
          />
        </InputWrapper>

        <Arrow onClick={toggling} />
      </DropDownHeader>
      <DropDownListContainer isOpen={isOpen}>
        <DropDownList isOpen={isOpen}>
          {options.map((option, index) => {
            return (
              <ListItem key={index} onClick={onOptionClicked(option)}>
                {option.label}
              </ListItem>
            )
          })}
        </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  )
}

export default Dropdown

const DropDownContainer = styled("div")`
  width: 50%;

  @media (max-width: 835px) {
    width: 100%;
  }
`

const DropDownHeader = styled("div")`
  height: 1.75rem;
  padding: 1.5rem 0.5em 2rem 0;
  border-bottom: 1px solid #aaa6a6;
  font-size: 16px;
  font-family: PitchRegular;
  color: black;
  background: #ffffff;
  display: flex;
  justify-content: space-between;

  position: relative;
`

const Arrow = styled.i`
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  width: 1rem;
  height: 1rem;
`

const DropDownListContainer = styled("div")`
  position: absolute;
  max-height: ${props => (props.isOpen ? "15rem" : "0rem")};
  transition: max-height 0.2s ease-in-out;
  overflow: hidden;
  width: 50% !important;
  @media (max-width: 835px) {
    width: 100% !important;
  }
`

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 1px solid black;
  border-top: none;
  box-sizing: border-box;
  max-height: 15rem;
  overflow-x: hidden;
  overflow-y: auto;
  color: #3faffa;
  font-size: 22px;
  font-family: Futura;
  font-weight: 500;
  transform: translateY(${props => (props.isOpen ? "unset" : "-100%")});
  transition: transform 0.5s ease-in-out;
  &:first-child {
    padding-top: 0.2em;
  }

  :hover {
    cursor: pointer;
  }
`

const ListItem = styled("li")`
  list-style: none;
  padding: 0.4em;
  font-size: 22px;
  font-family: Futura;
  color: ${props => (props.color ? "grey" : "black")};
  background: #ffffff;
  &:hover {
    background: black;
    color: white;
  }
`

const SearchInput = styled("input")`
  width: 100%;
  margin: 0 !important;
  border: none !important;
  box-shadow: none !important;
  height: inherit !important;
  font-size: 22px !important;
  font-family: Futura;
  padding-left: 0.9rem !important;
  color: white !important;
  ::placeholder {
    color: gray !important;
  }

  :focus {
    outline: none;
  }

  @media (max-width: 1280px) {
    font-size: 20px;
  }
`
const DisplaySpan = styled("span")`
  font-size: 22px;
  font-family: Futura;
  @media (max-width: 1280px) {
    font-size: 20px;
  }
`
const blinking = keyframes`
  from, to{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
`

const DisplayWrapper = styled("div")`
  position: absolute;
  background-color: white;
  display: flex;
  z-index: 1;
  left: 1%;
  top: 1%;

  svg {
    display: ${props => (props.showFocus ? "block" : "none")};
    animation: ${blinking} 1s infinite;
  }
`
const InputWrapper = styled("div")`
  position: relative;
  width: 100%;
`
