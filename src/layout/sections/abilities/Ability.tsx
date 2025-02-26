import styled from "styled-components";
import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {Text} from "../../../components/Text";
import {theme} from "../../../styles/Theme";

type AbilityPropsType = {
    iconId: string
    text:string
    marginPlus?: number
    marginText?: string
}

export const Ability = (props:AbilityPropsType) => {
    return (
        <StyledAbility>
            <IconWrapper marginPlus={props.marginPlus} >
                <Icon iconId={props.iconId}  width={"30px"} height={"30px"} viewBox={"0 0 30 30"}></Icon>
            </IconWrapper>
            <Text lineHeight={"1.2"} color={"inherit"} display={"block"} margin={props.marginText} fontWeight={"700"} fontFamily={"Poppins, sans-serif"} fontSize={"20px"} width={"100px"}>{props.text} </Text>
        </StyledAbility>
    );
};


const StyledAbility = styled.div`
  width: 288px;
  height: 295px;
  background-color: #C4C4C4;
  margin: 0 auto;
  color: ${theme.colors.icon};
  &:hover{
    background-color: ${theme.colors.accent};
    color: ${theme.colors.font}
  }
  @media screen and (max-width: 1093px){
    max-width: 600px;
    width: 100%;
  }
  @media screen and (max-width: 600px){
    height: 176px;
    padding-top: 3px;
    
  }
`

type iconWrapperPropsType = {
    marginPlus?: number
}

const IconWrapper = styled.div<iconWrapperPropsType>`
  margin: ${props => props.marginPlus}px 0 0 36px;
  @media screen and (max-width: 600px){
    margin-left:  32px;
  }

`