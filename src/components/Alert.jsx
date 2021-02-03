import React from 'react';
import styled from 'styled-components';

function Alert({ children }) {
  return (
    <AlertStyle>
      <h1>{children}</h1>
    </AlertStyle>
  )
}

const AlertStyle = styled.div`
  width: 96vw;
  min-height: 70vh;
  background-color: rgba(0,0,0,0.9);
  display: block;
  h1{
    font-weight: bold;
    padding-top: 15%;
    margin-top: 0;
    font-size:2.4rem;
    overflow: visible;
    color: rgb(226,156,28);
    font-weight: normal;
    opacity: 1;
  }
`
export default Alert
