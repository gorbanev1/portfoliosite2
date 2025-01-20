import styled from "styled-components";
import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {Text} from "../../../components/Text";
import {theme} from "../../../styles/Theme";
type AbilityPropsType = {
    iconId: string
    text:string
}

export const Ability = (props:AbilityPropsType) => {
    return (
        <StyledAbility>
            <IconWrapper>
                <Icon iconId={props.iconId} margin={"172px 0 0 30px"} width={"28px"} height={"28px"} viewBox={"0 0 28 28"}></Icon>
            </IconWrapper>
            <Text color={"inherit"} display={"block"} margin={"0 0 0 30px"} fontWeight={"700"} fontFamily={"Poppins, sans-serif"}>{props.text}</Text>
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

`
const IconWrapper = styled.div`
  margin: 172px 0 0 30px;
`