import React from 'react';
import ImageCard from '../components/ImageCard';
import Alert from '../components/Alert';
import Loader from '../components/Loader';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function Gallery({ visibleItems }) {
  const data = useSelector(state => state.photos);
  const { loading, error, photos } = data;
  const message = `Photos don't exist here yet. Try to choose other options in settings!`
  return (
    <GalleryStyle>
      <ImageList>
        {photos === undefined ? <Loader /> : (
          photos.length === 0 ? <Alert>{message}</Alert> : (
            loading ? (<Loader />) : error ? (<Alert>{error}</Alert>) : (
              photos.slice(0, visibleItems).map(p => {
                return <ImageCard image={p} key={p.id} />
              })
            )
          )
        )}
      </ImageList>
    </GalleryStyle >
  )
}

const GalleryStyle = styled.div`
  width: 100vw;
  background-color: transparent;
  z-index: -3;
  @media (min-width: 768px) and (max-width: 1024px) {
     position: absolute;
     top: 150px;
   }
`

const ImageList = styled.div`
  background-color: rgba(0,0,0,0.3);
  padding: 1rem 1rem;
  width: 98vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0 10px;
  grid-auto-rows: 10px;
  img{
    width: 250px;
    grid-row-end: span 2;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    img{
      margin-left: 40px;
    }
  }
`

export default Gallery
