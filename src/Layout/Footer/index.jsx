import React from 'react'
import styled from '@emotion/styled'
import Logo from '../../components/Logo'
import TextComp from '../../components/Text'
import { Button, Divider, useMediaQuery, useTheme } from '@mui/material'
import InstagramSVG from '../../components/SocialMediaIcons/InstagramIcon'
import FacebookSVG from '../../components/SocialMediaIcons/FacebookIcon'
import LinkedinSVG from '../../components/SocialMediaIcons/LinkedinIcon'
import data from './data.json'
import './footer.scss'
import { theme as customTheme } from '../../Theme/theme'

const Input = styled.input`
  width: 400px;
  height: 39px;
  padding: 0 10px;
  border: none;
  outline: none;
  background-color: #fff;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => (props.color ? props.color : '#000')};
    font-size: 16px;
    font-weight: 400;
  }
  :-ms-input-placeholder {
    color: ${(props) => (props.color ? props.color : '#000')};
    font-size: 16px;
    font-weight: 400;
  }
`

function Footer() {
  const theme = useTheme()
  const phone = useMediaQuery(theme.breakpoints.down(679))
  const tablet = useMediaQuery(theme.breakpoints.between(680, 1250))
  const web = useMediaQuery(theme.breakpoints.between(1250, 1300))
  return (
    <div style={{ background: customTheme.mainColor }}>
      <div className='container'>
        <div className='leftContainer'>
          <Logo fill={'white'} />
          <TextComp fontSize='12px' fontWeight={300} content='Trusted Global Innovator' />
          <TextComp
            fontSize='16px'
            mt='20px'
            style={phone ? { display: 'none' } : {}}
            content='Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.'
          />
          <div className='email' style={phone ? { marginRight: '50px' } : {}}>
            <Input
              size='small'
              style={phone ? { width: '250px' } : {}}
              type='text'
              placeholder='Email'
            />
            <Button
              sx={{
                color: 'white',
                height: '40px',
                width: '120px',
                background: '#00254F !important',
                textTransform: 'none',
                borderRadius: '0',
              }}
              size='small'
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div className='rightContainer'>
          {data.slice(0, phone ? 0 : tablet ? 1 : web ? 3 : 3).map((item, i) => (
            <div
              className='title'
              style={
                phone
                  ? {
                      margin: '0 50px 0 0',
                    }
                  : {}
              }
              key={i}
            >
              <TextComp content={item.title} fontWeight={400} fontSize='24px' mb='22px' />

              {item.subtitle.map((content, i) => (
                <div key={i}>
                  <TextComp content={content} fontWeight={300} fontSize='16px' mb='7px' />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider sx={{ backgroundColor: 'white' }} />
        <div className='bottomContainer'>
          <TextComp fontWeight={400} fontSize='14px' content='contact@nttdata.com' />

          <TextComp fontWeight={400} fontSize='14px' content='+3 9876 765 444' />

          <div className='icon' style={phone ? { display: 'none' } : {}}>
            <InstagramSVG />
            <FacebookSVG />
            <LinkedinSVG />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
