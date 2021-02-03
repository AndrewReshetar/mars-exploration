import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Form from './Form';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import mars from '../images/mars.jpg';

function Modal({ showModal, setShowModal }) {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }
  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={mars} alt="mars" />
              <ModalContent>
                <h1 style={{ marginTop: '10%', color: 'rgb(206, 72, 45)' }}>Choose Options:</h1>
                <Form setShowModal={setShowModal} />
              </ModalContent>
              <CloseModalButton aria-label="Close modal" onClick={() => setShowModal(prev => !prev)} />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  position: absolute;
  top: 0;
  left: 0;
  display:flex;
  justify-content: center;
  align-items:center;
`

const ModalWrapper = styled.div`
  width: 900px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background:#fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

const ModalImg = styled.img`
  width: 90%;
  height: 97.8%;
  border-radius: 10px 0 0 10px;
  background: #000;
`
const ModalContent = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.8;
  color: #141414;

  button{
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`

export default Modal
