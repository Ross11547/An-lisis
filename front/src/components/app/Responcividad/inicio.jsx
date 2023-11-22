import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Spinner = styled.div`
  animation: ${animation} 2s linear infinite;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: black;
  border-radius: 50%;
  height: 1em;
  width: 1em;
`
const Cel = styled.keyframes`
max-width:320px

`
function ejemplo() {
    return <Spinner />
  }
  