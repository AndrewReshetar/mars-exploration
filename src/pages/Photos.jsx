import React, { useState, useEffect } from 'react'
import Gallery from '../components/Gallery';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Photos() {
  const data = useSelector(state => state.photos);
  const modalState = useSelector(state => state.modal);
  const { photos } = data;
  const [visibleItems, setVisibleItems] = useState(10);

  useEffect(() => {
    setVisibleItems(10);
  }, [photos])

  const showButton = photos === undefined || photos.length === 0 || Object.keys(photos).length === 0 || modalState ? 'none' : 'flex';

  const showMorePhotos = () => {
    setVisibleItems(prevValue => prevValue + 10);
  }

  return (
    <>
      <main>
        <Gallery visibleItems={visibleItems} />
      </main>
      <LoadMore style={{ display: showButton }}>
        <button onClick={showMorePhotos}>Load More</button>
      </LoadMore>
    </>
  )
}

const LoadMore = styled.div`
  width: 98vw;
  margin: 0 auto;
  position: sticky;
  display: flex;
  justify-content: center;
  bottom: 5px;
  button{
    background-color:#df2e3c;
    &:hover{
      background-color:#ff4656;
    }
  }

`
export default Photos
