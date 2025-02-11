import React from 'react';
import styled from 'styled-components';
import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Logo} from "../../components/logo/Logo";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {LinkButton} from "../../components/LinkButton";
import {Text} from "../../components/Text";
import {theme} from "../../styles/Theme";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import { S } from './Header_Styles';

const items = ["Home", "About", "Services"]

export const Header:React.FC = () => {
    return (
        <S.Header>
            <Container maxwidth={"1440px"}>
                <S.HeaderWrapper>
                    <FlexWrapper justify={"space-between"} padding={"0 0 0 15px"} color={theme.colors.font}>
                        <Logo/>
                        <HeaderMenu menuItems={items}/>
                        <LinkButton display={"flex"} height={"50px"} width={"157px"}><Text
                            fontFamily={"Poppins, sans-serif"} fontWeight={"500"} fontSize={"20px"}> Contact
                            Me</Text></LinkButton>
                    </FlexWrapper>
                    <MobileMenu menuItems={items}/>
                </S.HeaderWrapper>
            </Container>
        </S.Header>
    );
};


