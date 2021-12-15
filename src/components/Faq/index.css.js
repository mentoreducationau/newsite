import styled from "styled-components"

export const FaqContainer = styled.div`
  margin-bottom: 6rem;
`
export const SearchContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;

  a {
    color: #cc4a28;
  }
`
export const InlineSearch = styled.div`
  margin-right: 8px;
  margin-bottom: 8px;
  input,
  button {
    vertical-align: middle;
    padding: 0.5rem;
    border: 1px solid #707070 !important;
  }
  input {
    border-radius: 5px 0 0 5px !important;
    margin-bottom: 0 !important;
    width: auto !important;
    border-right: none !important;
    transition: none !impotant;
    padding-left: 5px !important;
  }
  button {
    background: transparent;
    border-radius: 0 5px 5px 0 !important;
    height: 3.1rem !important;
  }
`
