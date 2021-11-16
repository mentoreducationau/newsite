import styled, { keyframes } from "styled-components"

export const TabWrapper = styled.div`
  position: relative;
  flex-wrap: wrap;
  align-items: stretch;
  justify-items: stretch;
  width: 100%;
  margin: 2rem 0;
  padding: 0px 0.2%;
`

export const TabButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 1rem;
`

export const TabButton = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  border: 1px solid #707070;
  padding: 10px 5%;
  margin-bottom: 0;
  color: #707070;
  cursor: pointer;

  &:hover,
  &.active {
    background: #707070;
    border: 1px solid #707070;
    color: #fff;
  }

  @media (min-width: 768px) {
    border: 4px solid #707070;
    margin-left: -4px;
    margin-top: -4px;
    &:hover,
    &.active {
      border: 2px solid #707070;
    }
  }
`

export const TabInfoWrapper = styled.div`
  padding: 1.5rem;
  border: 1px solid #707070;
  
  @media (min-width: 768px) {
    margin-top: -3px;
    border: 3px solid;
    border-color: rgba(112, 112, 112, 0.45);
  }
`
const rotate = keyframes`
  from {
    display: none;
    opacity: 0;
  }

  to {
    display: inline;
    opacity: 1;
    height: auto;
  }
`
export const TabContentContainer = styled.div`
  opacity: ${props => (props.activeTab === props.id ? 1 : 0)};
  display: ${props => (props.activeTab === props.id ? "inline" : "none ")};
`
export const Display = styled(TabContentContainer)`
  animation: ${rotate} 0.2s linear;
`
