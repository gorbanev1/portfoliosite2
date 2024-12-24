import React from 'react';
import styled from "styled-components";

type ButtonPropsType={
    width?: string
    height?: string
    display?: string
}

export const Button = styled.button<ButtonPropsType>`
  display: {${props => props.display}|"unset"};
  align-items: center;
  justify-content: center;
  width:  ${props => props.width||"unset"};
  height:  ${props => props.height||"unset"};
`

