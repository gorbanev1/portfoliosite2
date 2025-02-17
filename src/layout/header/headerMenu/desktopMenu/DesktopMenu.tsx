import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {S} from '../HeaderMenu_Styles';
import {Menu} from "../menu/Menu";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Logo} from "../../../../components/logo/Logo";
import {MobileMenu} from "../mobileMenu/MobileMenu";
import {LinkButton} from "../../../../components/LinkButton";
import {Text} from "../../../../components/Text";
import {Container} from "../../../../components/Container";

export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.Header>

                <S.HeaderWrapper>
                    <FlexWrapper justify={"space-between"} padding={"0 0 0 15px"} color={theme.colors.font}>
                        <Logo/>
                        <S.DesktopMenu>
                            <Menu menuItems={props.menuItems}/>
                        </S.DesktopMenu>
                        <LinkButton display={"flex"} height={"50px"} width={"157px"}><Text
                            fontFamily={"Poppins, sans-serif"} fontWeight={"500"} fontSize={"20px"}> Contact
                            Me</Text></LinkButton>
                    </FlexWrapper>
                </S.HeaderWrapper>

        </S.Header>

    );
};


