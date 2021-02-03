import React, { useState } from 'react';
import { getPhotos } from '../actions';
import { useDispatch } from 'react-redux';
import Message from './Message';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

function Form({ setShowModal }) {
  const dispatch = useDispatch();
  let history = useHistory();
  const [rover, setRover] = useState('');
  const [sol, setSol] = useState(1000);
  const [camera, setCamera] = useState('');
  const [message, setMessage] = useState('');

  const handleRoverChange = (e) => {
    setRover(e.target.value);
  }

  const handleSolChange = (e) => {
    setSol(e.target.value);
  }

  const handleCameraChange = (e) => {
    setCamera(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rover === '' || camera === '') {
      setMessage('You have to choose Rover and Camera Options!');
    } else {
      setMessage('');
      dispatch(getPhotos(rover, sol, camera));
      setShowModal(prev => !prev);
      history.push('/photos');
    }
  }

  return (
    <FormStyle>
      {message ? <Message>{message}</Message> : null}
      <div className="rover">
        <h2>Rover:</h2>
        <ul style={{ display: 'flex' }}>
          <li>
            <input type="radio" id="f-option" name="rover" value="curiosity" onChange={handleRoverChange} />
            <label htmlFor="f-option">Curiosity</label>
          </li>
          <li>
            <input type="radio" id="s-option" name="rover" value="opportunity" onChange={handleRoverChange} />
            <label htmlFor="s-option">Opportunity</label>
          </li>
          <li>
            <input type="radio" id="t-option" name="rover" value="spirit" onChange={handleRoverChange} />
            <label htmlFor="t-option">Spirit</label>
          </li>
        </ul>
      </div>
      <div className="sol">
        <h2>SOL:</h2>
        <input type="range" min="0" max="1000" value={sol} style={{ width: '90%' }} onChange={handleSolChange} />
        <span style={{ marginLeft: '1%' }}>{sol}</span>
      </div>
      <div className="cameras">
        <h2>Camera:</h2>
        <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="row_one">
            <li>
              <input type="radio" id="fhaz" name="camera" onChange={handleCameraChange} value="fhaz" />
              <label htmlFor="fhaz">Front</label>
            </li>
            <li>
              <input type="radio" id="rhaz" name="camera" onChange={handleCameraChange} value="rhaz" />
              <label htmlFor="rhaz">Rear</label>
            </li>
            <li>
              <input type="radio" id="mast" name="camera" onChange={handleCameraChange} value="mast" />
              <label htmlFor="mast">Mast</label>
            </li>
          </div>
          <div className="row_two">
            <li>
              <input type="radio" id="chemcam" name="camera" onChange={handleCameraChange} value="chemcam" />
              <label htmlFor="chemcam">Chemistry</label>
            </li>
            <li>
              <input type="radio" id="mahli" name="camera" onChange={handleCameraChange} value="mahli" />
              <label htmlFor="mahli">Mars Hand</label>
            </li>
            <li>
              <input type="radio" id="mardi" name="camera" onChange={handleCameraChange} value="mardi" />
              <label htmlFor="mardi">Mars Descent</label>
            </li>
          </div>
          <div className="row_three">
            <li>
              <input type="radio" id="navcam" name="camera" onChange={handleCameraChange} value="navcam" />
              <label htmlFor="navcam">Navigation</label>
            </li>
            <li>
              <input type="radio" id="pancam" name="camera" onChange={handleCameraChange} value="pancam" />
              <label htmlFor="pancam">Panoramic</label>
            </li>
            <li>
              <input type="radio" id="minites" name="camera" onChange={handleCameraChange} value="minites" />
              <label htmlFor="minites">Miniature</label>
            </li>
          </div>
        </ul>
      </div>
      <button style={{ margin: '0 auto' }} onClick={handleSubmit}>Explore</button>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  width: 400px;
  height: 80%;
  h2{
    color: #1d1c1c;
  }
  ul{
    list-style-type: none;
    li{
      color: #999292;
      width: 100%;
      label{
        padding-left: 5px;
      }
    }
  }
`
export default Form
