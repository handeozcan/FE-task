import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import { Divider } from '@mui/material'

function Layout({ children }) {
  return (
    <>
      <Header />
      <Divider sx={{ backgroundColor: '#89919A' }}/>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
