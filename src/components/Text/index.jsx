import React from 'react'
import styled from '@emotion/styled'

const Text = styled.p`
  color: ${(props) => props.color || '#ffffff'};;
  font-family: Roboto;
  margin-top: ${(props) => props.mt || '0'};
  margin-bottom: ${(props) => props.mb || '0'};
  margin-left: ${(props) => props.ml || '0'};
  margin-right: ${(props) => props.mr || '0'};
  padding-top: ${(props) => props.pt || '0'};
  padding-bottom: ${(props) => props.pb || '0'};
  padding-left: ${(props) => props.pl || '0'};
  padding-right: ${(props) => props.pr || '0'};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || '400'};
  background: ${(props) => props.background || 'transparent'};
`

const TextComp = ({ color,background, fontSize, fontWeight, mt, mb, mr, ml, pt, pb, pr, pl, content, ...rest }) => {
  return (
    <Text color={color} background={background} fontSize={fontSize} fontWeight={fontWeight} mt={mt} mb={mb} mr={mr} ml={ml} pt={pt} pb={pb} pr={pr} pl={pl} {...rest}>
      {content}
    </Text>
  )
}

export default TextComp
