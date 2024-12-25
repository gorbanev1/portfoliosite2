import React from 'react';
import styled from 'styled-components';
import {Container} from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import {Logo} from "../../components/logo/Logo";
import {Menu} from '../../components/menu/Menu';

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                <Logo/>
                <Menu/>
                <button>Contact Me</button>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: deeppink;
  display: flex;
  justify-content: space-between;
`