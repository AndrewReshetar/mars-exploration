import React from 'react';
import styled from 'styled-components';

function Message({ children }) {
  return (
    <MessageStyle>
      <h5>{children}</h5>
    </MessageStyle>
  )
}

const MessageStyle = styled.div`
  background-color: #e44040;
  border-radius: 2px;
  color: white;
  h5{
    padding-left: 10px;
    font-weight: bold;
  }
`

export default Message
