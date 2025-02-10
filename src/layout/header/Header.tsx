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

const items = ["Home", "About", "Services"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container maxwidth={"1440px"}>
                <HeaderWrapper>
                    <FlexWrapper justify={"space-between"} padding={"0 0 0 15px"} color={theme.colors.font}>
                        <Logo/>
                        <HeaderMenu menuItems={items}/>
                        <LinkButton display={"flex"} height={"50px"} width={"157px"}><Text
                            fontFamily={"Poppins, sans-serif"} fontWeight={"500"} fontSize={"20px"}> Contact
                            Me</Text></LinkButton>
                    </FlexWrapper>
                    <MobileMenu menuItems={items}/>
                </HeaderWrapper>
            </Container>
        </StyledHeader>

    );
};
const HeaderWrapper = styled.div`
  // display: flex;
  // justify-content: space-between;
  // padding: 0 0 0 15px;
    // color=${theme.colors.font}
  nav:last-child {
    
  }
  @media ${theme.media.tablet} {
    div:first-child {
      display: none;
    }
  }

`

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBgO};
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 3;
  margin: 0 auto;
  //margin: 10px 0;


  
`