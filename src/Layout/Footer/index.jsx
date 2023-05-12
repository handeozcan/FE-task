import React from 'react'
import styled from '@emotion/styled'
import Logo from '../../components/Logo'
import TextComp from '../../components/Text'
import { Button, Divider } from '@mui/material'
import InstagramSVG from '../../components/SocialMediaIcons/InstagramIcon'
import FacebookSVG from '../../components/SocialMediaIcons/FacebookIcon'
import LinkedinSVG from '../../components/SocialMediaIcons/LinkedinIcon'
import data from './data.json'
import './footer.scss'
import { theme } from '../../Theme/theme'

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
  return (
    <div style={{ background: theme.mainColor }}>
      <div className='container'>
        <div className='leftContainer'>
          <Logo fill={'white'} />
          <TextComp fontSize='12px' fontWeight={300} content='Trusted Global Innovator' />
          <TextComp
            fontSize='16px'
            mt='20px'
            content='Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.'
          />
          <div className='email'>
            <Input size='small' type='text' placeholder='Email' />
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
          {data?.map((item, i) => (
            <div className='title' key={i}>
              <TextComp
                content={item.title}
                color='#fff'
                fontWeight={400}
                fontSize='24px'
                mb='22px'
              />

              {item.subtitle.map((content, i) => (
                <div key={i}>
                  <TextComp
                    content={content}
                    color='#fff'
                    fontWeight={300}
                    fontSize='16px'
                    mb='7px'
                  />
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

          <div className='icon'>
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
