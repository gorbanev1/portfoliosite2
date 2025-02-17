import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";

type ButtonPropsType={
    width?: string
    height?: string
    display?: string
    bgc?: string
    position?: string
    margin?: string
    gap?: string


}

export const LinkButton = styled.a<ButtonPropsType>`
  cursor: pointer;
  white-space: nowrap;
  display: ${props => props.display||"flex"};
  align-items: center;
  justify-content: center;
  text-align: center;
  width:  ${props => props.width||"unset"};
  height:  ${props => props.height||"unset"};
  background-color: ${props=>props.bgc||theme.colors.accent};
  margin: ${props=>props.margin||"unset"};
  gap: ${props=>props.gap||"unset"};;
`

