import React from 'react'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Favorite } from '@mui/icons-material'
import TextComp from '../../components/Text'
import './card.scss'

const SingleCard = ({
  image,
  title,
  description,
  color,
  background,
  margin,
  price,
  shippingMethod,
  handleLikeButtonClick,
}) => {
  return (
      <div className='card'>
        <img src={image} alt='Card Image' className='card-image' />
        <div onClick={handleLikeButtonClick} className='card-like-icon'>
          <Favorite
            sx={{
              color,
              background,
              margin,
            }}
          />
        </div>
        <a href='https://github.com/handeozcan' target='blank' style={{
      textDecoration:'none'
    }}>
        <div className='card-content'>
          <TextComp
            fontSize='16px'
            fontWeight={600}
            content={title}
            color='#000'
            pb='5px'
            pl='5px'
          />
          <TextComp
            fontSize='14px'
            fontWeight={700}
            content={price}
            color='#000'
            background='#E6EEF8'
            pb='4px'
            pt='4px'
            pl='5px'
          />
          <TextComp
            fontSize='12px'
            fontWeight={500}
            content='Description'
            color='#000'
            pb='5px'
            pt='5px'
            pl='5px'
          />
          <TextComp
            fontSize='12px'
            fontWeight={400}
            content={description}
            color='#000'
            pb='5px'
            pt='5px'
            pl='5px'
          />
          <TextComp
            fontSize='10px'
            fontWeight={400}
            content={shippingMethod}
            color='#000'
            pb='5px'
            pt='5px'
            pl='5px'
            style={{
              position: 'absolute',
              bottom: '10px',
              
            }}
          />
        </div>
        </a>
      </div>
   
  )
}

export default SingleCard
