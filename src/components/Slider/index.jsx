import React, { useEffect, useRef, useState } from 'react'
import photoData from './data.json'
import './slider.scss'

const ImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(0)

  const delay = 3000
  const timeoutRef = useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () => setSelectedImage((prev) => (prev === photoData.length - 1 ? 0 : prev + 1)),
      delay,
    )

    return () => {
      resetTimeout()
    }
  }, [selectedImage])

  return (
    <div className='sliderMainContainer'>
      <div className='sliderContainer'>
        <div
          className='sliderImage'
          style={{
            backgroundImage: `url(${photoData[selectedImage]})`,
          }}
        >
          <div className='imageContainer'>
            {photoData.map((_, slideIndex) => (
              <div
                className='selectedImage'
                style={{
                  backgroundColor: slideIndex === selectedImage ? 'black' : 'white',
                  border: `1px solid ${slideIndex === selectedImage ? 'white' : 'black'}`,
                }}
                key={slideIndex}
                onClick={() => {
                  setSelectedImage(slideIndex)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
