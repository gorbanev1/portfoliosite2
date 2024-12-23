import styled from "styled-components";
import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {Text} from "../../../components/Text";
type AbilityPropsType = {
    iconId: string
    text:string
}

export const Ability = (props:AbilityPropsType) => {
    return (
        <StyledAbility>
            <IconWrapper>
                <Icon iconId={props.iconId} margin={"172px 0 0 30px"}></Icon>
            </IconWrapper>
            <Text display={"block"} margin={"0 0 0 30px"}>{props.text}</Text>
        </StyledAbility>
    );
};


const StyledAbility = styled.div`
  width: 288px;
  height: 295px;
  background-color: brown;

`
const IconWrapper = styled.div`
  margin: 172px 0 0 30px;
`