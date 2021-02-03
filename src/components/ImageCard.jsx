import React, { useState, useEffect, useRef } from 'react'

function ImageCard({ image }) {
  const [spanHeight, setSpanHeight] = useState(0);
  const imgRef = useRef();

  useEffect(() => {
    imgRef.current.addEventListener('load', setSpan)
  }, [])

  const setSpan = () => {
    const height = imgRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setSpanHeight(spans);
  }

  return (
    <div style={{ gridRowEnd: `span ${spanHeight}` }}>
      <img src={image.img_src} alt={image.id} ref={imgRef} />
    </div>
  )
}

export default ImageCard
