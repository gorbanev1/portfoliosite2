import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Logo = () => {
    return (
        <StyledLogo>
        <a href="">
            <Icon iconId={"computer"}  viewBox={"0 0 22 22"} width={"45"} height={"45"}/>
        </a>
        </StyledLogo>
    );
};
const StyledLogo = styled.div`
color: ${theme.colors.font};
  a{
    color: inherit;
  }
`

