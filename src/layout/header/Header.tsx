import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import {Menu} from '../../components/menu/Menu';

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <button>Contact Me</button>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: deeppink;
  display: flex;
  justify-content: space-between;
`