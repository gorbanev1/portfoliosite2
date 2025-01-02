import React from 'react';
import styled from 'styled-components';
import {Container} from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import {Logo} from "../../components/logo/Logo";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu";
import {Button} from "../../components/Button";
import {Text} from "../../components/Text";

const items = ["Home", "About", "Services"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} padding={"0 0 0 15px"}>
                <Logo/>
                <HeaderMenu menuItems={items}/>
                <Button display={"block"} height={"50px"} width={"157px"} ><Text>Contact Me</Text></Button>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: deeppink;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 3;
  //margin: 10px 0;
`