import React from 'react'
import data from './data.json'
import styled from '@emotion/styled'
import TextComp from '../../components/Text'
import { useTheme } from '@mui/material/styles'
import {
  Box,
  Button,
  InputBase,
  useMediaQuery,
  styled as muiStyled,
  Fade,
  MenuItem,
  Menu,
} from '@mui/material'
import { Search } from '@mui/icons-material'
import { theme as customTheme } from '../../Theme/theme'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-bottom: 15px;
  margin-top: 15px;
`

export const SearchBar = muiStyled(Box)(({ theme }) => {
  return {
    borderRadius: '3px',
    height: '40px',
    border: '1px solid #6A6D70',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.only('xs')]: {
      marginLeft: '0px',
      borderRadius: '5px 0px 0px 5px',
      width: '235px',
    },
    [theme.breakpoints.between(0, 680)]: {
      marginLeft: '0px',
      borderRadius: '5px 0px 0px 5px',
      width: '235px',
    },
    [theme.breakpoints.only('sm')]: {
      marginLeft: '30px',
      width: '340px',
    },
    [theme.breakpoints.only('md')]: {
      marginLeft: '20px',
      width: '500px',
    },
    [theme.breakpoints.only('lg')]: {
      width: '650px',
    },
  }
})

function Navbar() {
  const theme = useTheme()
  const phone = useMediaQuery(theme.breakpoints.down(679))
  const tablet = useMediaQuery(theme.breakpoints.between(680, 1250))
  const web = useMediaQuery(theme.breakpoints.up(1250))

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <NavbarContainer>
      {web &&
        data.map((element, i) => {
          return <TextComp key={i} content={element} color='#6A6D70' mr='30px' />
        })}
      {tablet && (
        <div
          style={{
            display: 'flex',
            justifyContent:"center",
                alignItems:"center",
          }}
        >
          {data.slice(0, 6).map((element, i) => (
            <TextComp key={i} content={element} color='#6A6D70' mr='30px' />
          ))}
          <TextComp
            style={{ cursor: 'pointer' }}
            onClick={handleClick}
            content={
              <span style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                padding: 0,
                margin: 0
              }}>
                More <KeyboardArrowDownIcon />
              </span>
            }
            color='#6A6D70'
            mr='30px'
          />
          <Menu
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
           
          >
            <MenuItem  sx={{
              backgroundColor: '#F4F5F6',
              color:"#000",
              ':hover':{
                backgroundColor: '#F4F5F6',
              },
              '::selection': {
                backgroundColor: '#F4F5F6',
              }
            }} onClick={handleClose}>Profile</MenuItem>
            <MenuItem  sx={{
              backgroundColor: '#F4F5F6',
              color:"#000",
              ':hover':{
                backgroundColor: '#F4F5F6',
              },
              '::selection': {
                backgroundColor: '#F4F5F6',
              }
            }} onClick={handleClose}>My account</MenuItem>
            <MenuItem  sx={{
              backgroundColor: '#F4F5F6',
              color:"#000",
              ':hover':{
                backgroundColor: '#F4F5F6',
              },
              '::selection': {
                backgroundColor: '#F4F5F6',
              }
            }} onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      )}
      {phone && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <SearchBar>
            <InputBase
              placeholder='Search...'
              sx={{
                margin: '10px',
                width: 'calc(100% - 50px)',
              }}
            />
          </SearchBar>
          <Button
            variant='contained'
            sx={{
              paddingInline: '2.5rem',
              backgroundColor: customTheme.mainColor,
              borderRadius: '0 5px 5px 0',
            }}
          >
            <Search />
          </Button>
        </Box>
      )}
    </NavbarContainer>
  )
}

export default Navbar
