import React from 'react'

import styled from '@emotion/styled'

const Text = styled.p`
  color: #FFFFFF;
  font-family: Roboto;
  margin-top:${(props) => props.mt || '0'};
  margin-bottom:${(props) => props.mb || '0'};
  margin-left:${(props) => props.ml || '0'};
  margin-right:${(props) => props.mr || '0'};
  padding-top:${(props) => props.pt || '0'};
  padding-bottom:${(props) => props.pb || '0'};
  padding-left:${(props) => props.pl || '0'};
  padding-right:${(props) => props.pr || '0'};
  font-size: ${(props) => props.fontSize|| '16px'};
  font-weight: ${(props) => props.fontWeight|| '400'};

`

const TextComp = ({ fontSize, fontWeight, mt, mb, content, ...rest }) => {
  return (
    <Text fontSize={fontSize} fontWeight={fontWeight} mt={mt} mb={mb} {...rest}>
      {content}
    </Text>
  )
}

export default TextComp
