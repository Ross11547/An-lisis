import React from 'react';
import styled, { keyframes } from "styled-components";
function Loading() {
  return (
    <Loadings>
      <Spinner></Spinner>
      <p>Cargando...</p>
    </Loadings>
  );
}

export default Loading;
const Loadings = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 1.2rem;
    color: #333;
`;
const animation = keyframes`
 to {
      transform: rotate(360deg);
    }
   
`;
const Spinner = styled.div`
border: 8px solid rgba(0, 0, 0, 0.1);
    border-left-color: #333;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${animation} 1s linear infinite;
    margin-bottom: 1rem;
`;
  

  
 
  