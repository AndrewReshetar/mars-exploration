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
  margin-top: -90%;
  h1{
    font-weight: bold;
    padding-top: 15%;
    padding-left: 7%;
    margin-top: 0;
    font-size:2.4rem;
    overflow: visible;
    color: rgb(226,156,28);
    font-weight: normal;
    opacity: 1;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
     width: 100vw;
     position: absolute;
     left: 0;
     top: 120px;
     margin: 0 auto;

     h1{
      padding-top: 15%;
      font-size:1.4rem;
     }
   }
  @media (min-width: 375px) and (max-width: 767px) {
     width: 100vw;
     position: absolute;
     left: 0;
     top: 100px;
     margin: 0 auto;

     h1{
      padding-top: 15%;
      padding-left: 2%;
      font-size:0.75rem;
     }
  }
`
export default Alert
