import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Roboto', sans-serif;
    background-image: url('./images/background.jpg');
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
  }

  main{
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
      padding-left: 10%;
      color: #eca018;
      opacity: 0.95;
      font-size: 5rem;
      font-weight: lighter;
      margin-top: -30%;
      width: 23ch;
      overflow:hidden;
      white-space: nowrap;
      animation: type 4s;
      z-index: -2;
    }
    
    @keyframes type {
       0% { width:0ch }
       100% { width:23ch }
    }
  }

   button{
     width: 15vw;
     height: 50px;
     background-color: #26a69a;
     border: none;
     cursor: pointer;
     color: white;
     font-size: 1.2rem;
     border-radius: 2%;
     outline: none;
     &:hover{
      background-color: #3abeb2;
     }
   }
`

export default GlobalStyle;