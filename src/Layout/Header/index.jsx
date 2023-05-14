import React, { useState } from 'react'
import Logo from '../../components/Logo'
import { theme as customTheme } from '../../Theme/theme'
import {
  InputBase,
  Select,
  MenuItem,
  Box,
  Button,
  styled,
  useMediaQuery,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material'
import './header.scss'
import { ExpandMore, Search } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'

export const SearchBar = styled(Box)(({ theme }) => {
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
      display: 'none',
    },
    [theme.breakpoints.between(0, 680)]: {
      marginLeft: '0px',
      borderRadius: '5px 0px 0px 5px',
      width: '235px',
      display: 'none',
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

function Header() {
  const [selectValue, setSelectValue] = useState('Categories')
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const phone = useMediaQuery('(max-width:680px)')

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='hb_menu'>
        {['Category 1', 'Category 2', ' Category 3', 'Category 4'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <div className='main__container--header'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Logo fill={customTheme.mainColor} />
        </div>
        <div>
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
                  width: 'calc(100% - 132px)',
                }}
              />
              <Select
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                sx={{
                  borderRadius: '0',
                  display: { xs: 'none', sm: 'flex' },
                  width: '142px',
                  background: '#F4F5F6',
                  border: 'none',
                  outline: 'none',
                }}
                IconComponent={ExpandMore}
              >
                <MenuItem value='Categories'>Categories</MenuItem>
                <MenuItem value='Category 1'>Category 1</MenuItem>
                <MenuItem value='Category 2'>Category 2</MenuItem>
                <MenuItem value='Category 3'>Category 3</MenuItem>
              </Select>
            </SearchBar>
            {!phone && (
              <Button
                variant='contained'
                sx={{
                  paddingInline: '2.5rem',
                  backgroundColor: customTheme.mainColor,
                  marginLeft: '10px',
                }}
              >
                <Search />
              </Button>
            )}
          </Box>
        </div>
        {phone &&
          ['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <MenuIcon style={{color: "#1C1B1F"}}/>
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
      </div>
    </>
  )
}

export default Header
