import styled from 'styled-components'
import { ParagraphHeavy } from '../../styles/Typography.css'

export const CounterText = styled(ParagraphHeavy)`
  padding: 0;
  margin: 0;
  width: fit-content;
  height: fit-content;
  color: ${props => (props.color ? props.color : "")};
  font-size: ${props => (props.size ? props.size : "")};
  font-family: ${props => (props.font ? props.font : "")};
  font-weight: ${props => (props.weight ? props.weight : "")};
  /* font: normal normal; */
  letter-spacing: 0px;
`