import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorite, removeToFavorite } from '../../app/features/favoriteSlice'
import SingleCard from './card'
import { getProducts } from '../../services'
import { Button, useTheme } from '@mui/material'
import TextComp from '../Text'
import { theme as customTheme } from '../../Theme/theme'
import { East, Favorite, FavoriteBorder } from '@mui/icons-material'
import useMediaQuery from '@mui/material/useMediaQuery'


function CardSection() {
  const theme = useTheme()
  const phone = useMediaQuery(theme.breakpoints.down(679))
  const tablet = useMediaQuery(theme.breakpoints.between(680, 1250))
  const web = useMediaQuery(theme.breakpoints.between(1250, 1300))

  const [data, setData] = useState([])
  const [showMore, setShowMore] = useState(4)
  const [visible, setVisible] = useState(false)
  const { favoritedItem } = useSelector((state) => state.favoritedItem)
  const dispatch = useDispatch()

  const handleGetProducts = async () => {
    const response = await getProducts()
    setData(response?.data)
    return response
  }

  useEffect(() => {
    handleGetProducts()
  }, [])

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '20px 50px',
        }}
      >
        <div>
          <TextComp
            color='#000'
            fontSize={web ? '32px' : tablet ? '24px' : phone ? '16px' : '32px'}
            fontWeight={300}
            content='Content title goes here'
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {favoritedItem.length > 0 ? <Favorite sx={{ color: 'red' }} /> : <FavoriteBorder />}
          <TextComp
            fontSize='16px'
            ml='5px'
            color='#000'
            fontWeight={500}
            content={`${favoritedItem.length} ÜRÜN`}
          />
          <Button
            onClick={() => {
              setVisible((prev) => !prev)
            }}
            variant='contained'
            sx={{
              cursor: 'pointer',
              textTransform: 'capitalize',
              padding: '4px 16px',
              backgroundColor: customTheme.mainColor,
              marginLeft: '10px',
            }}
          >
            Beğenilenler
          </Button>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: phone
            ? 'auto'
            : tablet
            ? 'auto auto'
            : web
            ? 'auto auto auto'
            : 'auto auto auto auto',
          justifyContent: 'center',
          gridGap: '20px',
        }}
      >
        {visible
          ? favoritedItem?.map((item) => {
              const itemInfavorite = favoritedItem?.find((select) => select?.id === item?.id)
              return (
                <SingleCard
                  key={item.id}
                  color={itemInfavorite?.id === item?.id ? 'red' : '#D1D1D1'}
                  handleLikeButtonClick={() => {
                    itemInfavorite?.id === item?.id
                      ? dispatch(removeToFavorite(item.id))
                      : dispatch(addToFavorite(item))
                  }}
                  image={item.imageUrl}
                  title={item.name}
                  price={item.price}
                  description={item.description}
                  shippingMethod={item.shippingMethod}
                />
              )
            })
          : data?.slice(0, showMore).map((item) => {
              const itemInfavorite = favoritedItem?.find((select) => select?.id === item?.id)
              return (
                <SingleCard
                  key={item.id}
                  color={itemInfavorite?.id === item?.id ? 'red' : '#D1D1D1'}
                  handleLikeButtonClick={() => {
                    itemInfavorite?.id === item?.id
                      ? dispatch(removeToFavorite(item.id))
                      : dispatch(addToFavorite(item))
                  }}
                  image={item.imageUrl}
                  title={item.name}
                  price={item.price}
                  description={item.description}
                  shippingMethod={item.shippingMethod}
                />
              )
            })}
      </div>
      <div style={{
        display:"flex",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginTop:'30px',
        marginBottom:'80px'
      }}>
      {!visible && showMore <= 12 && (
        <Button
          variant='contained'
          onClick={() => {
            setShowMore((prev) => prev + 4)
          }}
          sx={{
            padding: '16px 32px',
            backgroundColor: customTheme.mainColor,
          }}
         
        >
          Daha fazla
          <East sx={{ marginLeft:'10px'}}/>
        </Button>
      )}
      </div>
    </>
  )
}

export default CardSection
