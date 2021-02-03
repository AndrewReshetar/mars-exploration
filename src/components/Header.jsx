import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import astronaut from '../images/astronaut.png';
import Modal from './Modal';
import { modalIsOpen, modalIsClosed } from '../actions';

function Header() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  useEffect(() => {
    if (showModal) {
      dispatch(modalIsOpen())
    } else {
      dispatch(modalIsClosed())
    }
  }, [showModal, dispatch])

  return (
    <HeaderStyle>
      <NavStyle>
        <a href="/"><img src={astronaut} alt="Home" /></a>
        <div className="settings">
          <button onClick={openModal}>Settings</button>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
      </NavStyle>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  min-height: 15vh;
`

const NavStyle = styled.nav`
  min-height: 15vh;
  background-color: transparent;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Header
