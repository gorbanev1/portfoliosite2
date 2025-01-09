import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Text} from "../../components/Text";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Text fontFamily={"Poppins"} fontSize={"20px"} fontWeight={"500"} color={"rgba(255, 255, 255, 0.50)"}>Created by
                    <Name> Zarror </Name>
                    | All Reserved!
                </Text>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
  background-color: #a1a658;
  padding: 50px 0;
  text-align: center;
`

const Name = styled.span`
  color: ${theme.colors.font};
  font-weight: 700;
  letter-spacing: 0.3px;
`