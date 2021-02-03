import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <LoaderSvg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" r="15" strokeWidth="2" stroke="#e15b64" strokeDasharray="23.561944901923447 23.561944901923447" fill="none" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
      </circle>
      <circle cx="50" cy="50" r="12" strokeWidth="2" stroke="#f8b26a" strokeDasharray="18.84955592153876 18.84955592153876" strokeDashoffset="18.84955592153876" fill="none" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
      </circle>
    </LoaderSvg>
  )
}

const LoaderSvg = styled.svg`
  margin: auto;
  background: none;
  display: block;
  shape-rendering: auto;
  width:200px;
  height:200px;
  position: absolute;
  top:35%;
  left: 43%;
`
export default Loader;